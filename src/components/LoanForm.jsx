import { useFormik } from "formik";
import validationSchema from "../utilities/formRules";

const LoanForm = ({ onCalculate }) => {
  const formik = useFormik({
    initialValues: {
      loanAmount: "",
      annualInterestRate: "",
      loanTerm: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onCalculate(
        values.loanAmount,
        values.annualInterestRate,
        values.loanTerm
      );
    },
  });
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
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col space-y-4">
          <input
            type="number"
            placeholder="Loan Amount (UGX)"
            className="p-2 border border-gray-300 rounded"
            name="loanAmount"
            value={formik.values.loanAmount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.loanAmount && formik.errors.loanAmount ? (
            <div className="text-red-500">{formik.errors.loanAmount}</div>
          ) : null}
          <input
            type="number"
            placeholder="Annual Interest Rate (%)"
            className="p-2 border border-gray-300 rounded"
            name="annualInterestRate"
            value={formik.values.annualInterestRate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.annualInterestRate &&
          formik.errors.annualInterestRate ? (
            <div className="text-red-500">
              {formik.errors.annualInterestRate}
            </div>
          ) : null}
          <input
            type="number"
            placeholder="Loan Term (Years)"
            className="p-2 border border-gray-300 rounded"
            name="loanTerm"
            value={formik.values.loanTerm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.loanTerm && formik.errors.loanTerm ? (
            <div className="text-red-500">{formik.errors.loanTerm}</div>
          ) : null}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanForm;
