import { useState } from "react";
import Result from "./Result";
import LoanForm from "./LoanForm";

const LoanCalculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const handleCalculate = (loanAmount, annualInterestRate, loanTerm) => {
    // Convert annual interest rate to monthly rate (decimal)
    const monthlyInterestRate = annualInterestRate / 100 / 12;

    // Calculate the number of monthly payments
    const numberOfMonthlyPayments = loanTerm * 12;

    // Calculate the monthly payment amount
    const monthlyPaymentAmount =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonthlyPayments));

    // Calculate the total interest paid
    const totalInterestPaid =
      monthlyPaymentAmount * numberOfMonthlyPayments - loanAmount;

    setMonthlyPayment(monthlyPaymentAmount);
    setTotalInterest(totalInterestPaid);
  };
  return (
    <>
      <LoanForm onCalculate={handleCalculate} />
      <div className="container mx-auto p-4">
        {monthlyPayment !== null && totalInterest !== null && (
          <Result
            monthlyPayment={monthlyPayment}
            totalInterest={totalInterest}
          />
        )}
      </div>
    </>
  );
};

export default LoanCalculator;
