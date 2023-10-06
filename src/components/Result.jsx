const Result = ({ monthlyPayment, totalInterest }) => {
  return (
    <div className="container mx-auto h-auto">
      <div className=" bg-white rounded-lg shadow-md">
        <div className="px-2 py-4 text-white  bg-blue-400">
          <h3 className="text-lg font-semibold">Your EMI Details</h3>
        </div>
        <div className="p-2">
          <p className="text-gray-600">Loan EMI</p>
          <h5 className="text-xl font-semibold">
            {monthlyPayment.toLocaleString()} UGX
          </h5>
        </div>
        <div className="p-2">
          <p className="text-gray-600">Total Interest Payable</p>
          <h5 className="text-xl font-semibold">
            {totalInterest.toLocaleString()} UGX
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Result;
