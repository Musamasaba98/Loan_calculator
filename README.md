# Loan Calculator App

This is a web-based loan calculator application built using React.js. It allows users to calculate the monthly payment amount and the total interest paid over the life of a loan based on the loan amount, annual interest rate, and loan term provided by the user.

![Loan Calculator App Screenshot](screenshot.png)

## Features

- User-friendly interface with input fields for loan amount, annual interest rate, and loan term.
- Input validation to prevent submission with invalid or missing values.
- Responsive design for both desktop and mobile devices.
- Calculation of monthly payment and total interest based on user inputs.
- Results displayed in Ugandan Shillings (UGX).
- Basic styling for a visually appealing experience.

## Usage

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   yarn dev or npm dev
   ```
4. Open your web browser and visit http://localhost:5173/ to use the loan calculator.

### How It Works

The loan calculator uses the following formulas to calculate the monthly payment amount:
Monthly Interest Rate (in decimal form) = (Annual Interest Rate / 100) / 12
Number of Monthly Payments = Loan Term (in years) _ 12
Monthly Payment Amount (in Ugandan Shillings) = Loan Amount _ (Monthly Interest Rate) / (1 - (1 + Monthly Interest Rate)^(-Number of Monthly Payments))

### Contributing

If you would like to contribute to this project or report issues, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your commit message here"
   ```
4. Push your changes to yoour fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request to the main repository

#### License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)

#### Contact

If you have any questions or need further assistance, please contact [Masaba Musa](https://www.linkedin.com/in/masabamusa98/).
