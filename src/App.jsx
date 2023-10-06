import { useState } from "react";
import LoanForm from "./components/LoanForm";
import LoanCalculator from "./components/LoanCalculator";
// import Result from "./components/Result";

function App() {
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

    setMonthlyPayment(monthlyPaymentAmount); // Replace with actual calculation
    setTotalInterest(totalInterestPaid); // Replace with actual calculation
  };
  return (
    <>
      <div>
        <LoanForm onCalculate={handleCalculate} />
        {monthlyPayment !== null && totalInterest !== null && (
          <LoanCalculator
            monthlyPayment={monthlyPayment}
            totalInterest={totalInterest}
          />
        )}
      </div>
    </>
  );
}

export default App;
