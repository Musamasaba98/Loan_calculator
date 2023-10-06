const Result = ({ monthlyPayment, totalInterest }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-2xl font-semibold mb-4">
        Loan Calculation Results
      </div>
      <div className="mb-2">
        <strong>Monthly Payment:</strong> {monthlyPayment.toLocaleString()} UGX
      </div>
      <div>
        <strong>Total Interest Paid:</strong> {totalInterest.toLocaleString()}{" "}
        UGX
      </div>
    </div>
  );
};

export default Result;
