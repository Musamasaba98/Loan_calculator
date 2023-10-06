import { useState } from "react";

const LoanForm = ({ onCalculate }) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");

  const handleCalculate = () => {
    onCalculate(loanAmount, annualInterestRate, loanTerm);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Loan Calculator</h2>
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
          className="p-2 border border-gray-300 rounded"
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
