import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Divider from '../components/Divider/Divider';
import Button from '../components/Form/Button';
import Input from '../components/Form/Input';

const Add = (): JSX.Element => {
  // State variables for each feature
  const [outstandingDebt, setOutstandingDebt] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [delayFromDueDate, setDelayFromDueDate] = useState('');
  const [changedCreditLimit, setChangedCreditLimit] = useState('');
  const [creditMix, setCreditMix] = useState('');
  const [creditHistoryAge, setCreditHistoryAge] = useState('');
  const [numCreditInquiries, setNumCreditInquiries] = useState('');
  const [numCreditCard, setNumCreditCard] = useState('');
  const [monthlyBalance, setMonthlyBalance] = useState('');
  const [amountInvestedMonthly, setAmountInvestedMonthly] = useState('');

  // Form submission handler (dummy for now)
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      outstandingDebt,
      interestRate,
      delayFromDueDate,
      changedCreditLimit,
      creditMix,
      creditHistoryAge,
      numCreditInquiries,
      numCreditCard,
      monthlyBalance,
      amountInvestedMonthly
    };
    console.log('Form Data Submitted:', formData);
    // You can later replace this with the ML model call.
  };

  return (
    <Layout>
      <Divider />

      <h1 className='title'>Credit Score Prediction</h1>

      <form onSubmit={handleSubmit}>
        {/* Outstanding Debt */}
        <label htmlFor="outstandingDebt"><strong>Outstanding Debt</strong> (use decimals, e.g., 1200.50)</label>
        <Input
          name='outstandingDebt'
          type='number'
          tabIndex={0}
          placeholder='Outstanding Debt'
          required={true}
          value={outstandingDebt}
          onChange={(e) => setOutstandingDebt(e.target.value)}
        />

        {/* Interest Rate */}
        <label htmlFor="interestRate"><strong>Interest Rate</strong> (use decimals, e.g., 3.75)</label>
        <Input
          name='interestRate'
          type='number'
          tabIndex={1}
          placeholder='Interest Rate'
          required={true}
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />

        {/* Delay from Due Date */}
        <label htmlFor="delayFromDueDate"><strong>Delay from Due Date (days)</strong></label>
        <Input
          name='delayFromDueDate'
          type='number'
          tabIndex={2}
          placeholder='Delay from Due Date (days)'
          required={true}
          value={delayFromDueDate}
          onChange={(e) => setDelayFromDueDate(e.target.value)}
        />

        {/* Changed Credit Limit */}
        <label htmlFor="changedCreditLimit"><strong>Changed Credit Limit</strong> (use decimals, e.g., 5000.00)</label>
        <Input
          name='changedCreditLimit'
          type='number'
          tabIndex={3}
          placeholder='Changed Credit Limit'
          required={true}
          value={changedCreditLimit}
          onChange={(e) => setChangedCreditLimit(e.target.value)}
        />

        {/* Credit Mix */}
        <label htmlFor="creditMix"><strong>Credit Mix</strong></label>
        <Input
          name='creditMix'
          type='number'
          tabIndex={4}
          placeholder='Credit Mix'
          required={true}
          value={creditMix}
          onChange={(e) => setCreditMix(e.target.value)}
        />

        {/* Credit History Age */}
        <label htmlFor="creditHistoryAge"><strong>Credit History Age (years)</strong></label>
        <Input
          name='creditHistoryAge'
          type='number'
          tabIndex={5}
          placeholder='Credit History Age (years)'
          required={true}
          value={creditHistoryAge}
          onChange={(e) => setCreditHistoryAge(e.target.value)}
        />

        {/* Number of Credit Inquiries */}
        <label htmlFor="numCreditInquiries"><strong>Number of Credit Inquiries</strong></label>
        <Input
          name='numCreditInquiries'
          type='number'
          tabIndex={6}
          placeholder='Number of Credit Inquiries'
          required={true}
          value={numCreditInquiries}
          onChange={(e) => setNumCreditInquiries(e.target.value)}
        />

        {/* Number of Credit Cards */}
        <label htmlFor="numCreditCard"><strong>Number of Credit Cards</strong></label>
        <Input
          name='numCreditCard'
          type='number'
          tabIndex={7}
          placeholder='Number of Credit Cards'
          required={true}
          value={numCreditCard}
          onChange={(e) => setNumCreditCard(e.target.value)}
        />

        {/* Monthly Balance */}
        <label htmlFor="monthlyBalance"><strong>Monthly Balance</strong> (use decimals, e.g., 3000.50)</label>
        <Input
          name='monthlyBalance'
          type='number'
          tabIndex={8}
          placeholder='Monthly Balance'
          required={true}
          value={monthlyBalance}
          onChange={(e) => setMonthlyBalance(e.target.value)}
        />

        {/* Amount Invested Monthly */}
        <label htmlFor="amountInvestedMonthly"><strong>Amount Invested Monthly</strong> (use decimals, e.g., 150.00)</label>
        <Input
          name='amountInvestedMonthly'
          type='number'
          tabIndex={9}
          placeholder='Amount Invested Monthly'
          required={true}
          value={amountInvestedMonthly}
          onChange={(e) => setAmountInvestedMonthly(e.target.value)}
        />

        <Divider />

        {/* Submit Button */}
        <Button type="submit" text="Predict Credit Score" tabIndex={10} />

        <Divider />
      </form>

      <Divider />
    </Layout>
  );
};

export default Add;
