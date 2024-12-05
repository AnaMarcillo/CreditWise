import { Link } from 'react-router-dom';

// components
import Layout from '../components/Layout/Layout';
import Divider from '../components/Divider/Divider';

const LandingPage = (): JSX.Element => (
  <Layout>
    <Divider />

    {/* Page Title and Description */}
    <h1 className="title">Welcome to CreditWise</h1>
    <p className="description">
      Assess your creditworthiness in seconds with our easy-to-use tool. Enter your financial details to predict your credit score category.
    </p>

    {/* CTA Button to Start Prediction */}
    <div className="cta-container">
      <Link to="/savings" className="cta-button">Get Started</Link>  {/* Link to Savings Page */}
    </div>

    {/* Button to Add Page (Prediction Form) */}
    <div className="cta-container">
      <Link to="/add" className="cta-button">Prediction Form Page</Link>  {/* Link to Add.tsx */}
    </div>

    <Divider />

    {/* Features or Benefits */}
    <div className="features">
      <h2>Why Use CreditWise?</h2>
      <ul>
        <li>Simple and fast credit score prediction</li>
        <li>Personalized financial insights</li>
        <li>Completely secure and private</li>
      </ul>
    </div>

    <Divider />

    <footer className="center no-select">
      v.1.0.12<br />
      Banking Ltd.
    </footer>

    <Divider />
  </Layout>
);

export default LandingPage;
