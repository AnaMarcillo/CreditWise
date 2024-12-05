import { Link } from 'react-router-dom';

// components
import Layout from '../components/Layout/Layout';
import Divider from '../components/Divider/Divider';

const Savings = (): JSX.Element => (
  <Layout>
    <Divider />

    {/* Instructional Content */}
    <h1 className="title">How to Use CreditWise</h1>
    <p className="description">
      CreditWise is designed to help you quickly predict your credit score category based on key financial and demographic details.
    </p>

    <div className="instructions">
      <h2>Steps to Use the App:</h2>
      <ol>
        <li>Click on the "Prediction Form Page" button.</li>
        <li>Enter your financial details, such as your outstanding debt, credit mix, and number of credit inquiries.</li>
        <li>Submit the form to get an instant prediction of your credit score category.</li>
      </ol>

      <h2>Features of CreditWise:</h2>
      <ul>
        <li>Real-time credit score prediction.</li>
        <li>Personalized financial insights based on your data.</li>
        <li>Completely private and secure.</li>
      </ul>
    </div>

    <Divider />

    {/* Button to Add Page (Prediction Form) */}
    <div className="cta-container">
      <Link to="/add" className="cta-button">Prediction Form Page</Link>  {/* Link to Add.tsx */}
    </div>

    <Divider />

    {/* Footer */}
    <footer className="center no-select">
      v.1.0.12<br />
      Banking Ltd.
    </footer>

    <Divider />
  </Layout>
);

export default Savings;
