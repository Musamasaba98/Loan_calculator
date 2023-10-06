import { useState } from "react";

const LoanForm = ({ onCalculate }) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");

  const handleCalculate = () => {
    onCalculate(loanAmount, annualInterestRate, loanTerm);
  };

  return (
    <div className="lg:w-1/2 sm:w-11/12  md:mx-auto mx-6 ">
      <h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">
        Loan Calculator
      </h2>
      <p className="mb-4 mt-0 text-base font-light leading-relaxed">
        This loan calculator allows users to calculate the monthly payment
        amount and the total interest paid over the life of a loan based on the
        loan amount, annual interest rate, and loan term provided by the user.
      </p>
      <div className="flex flex-col space-y-4">
        <input
          type="number"
          placeholder="Loan Amount (UGX)"
          className="p-2 border border-gray-300 rounded"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Annual Interest Rate (%)"
          className="p-2  border border-gray-300 rounded"
          value={annualInterestRate}
          onChange={(e) => setAnnualInterestRate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Loan Term (Years)"
          className="p-2 border border-gray-300 rounded"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default LoanForm;
