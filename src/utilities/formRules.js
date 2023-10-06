import * as Yup from "yup";

const validationSchema = Yup.object({
    loanAmount: Yup.number().required("Loan amount is required"),
    annualInterestRate: Yup.number().required("Annual interest rate is required"),
    loanTerm: Yup.number().required("Loan term is required"),
});

export default validationSchema;