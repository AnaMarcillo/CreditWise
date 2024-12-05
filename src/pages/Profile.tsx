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
