import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './PaymentPage.css';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  cardNumber: yup.string().required('Card Number is required'),
  username: yup.string().required('Username is required'),
  productName: yup.string().required('Product Name is required'),
  amount: yup.string().typeError('Amount must be a number').required('Amount is required'),
});

function PaymentPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors },reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Perform payment processing logic here
    console.log('Payment submitted:', data);
    alert('Payment successfully processed');
    navigate('/logout');
    reset();
  };

  return (
    <div className="payment-page">
      <h1>Payment</h1>
      <form className="payment-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            {...register('cardNumber')}
            placeholder="Enter card number"
          />
          {errors.cardNumber && <p className="error-message">{errors.cardNumber.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register('username')}
            placeholder="Enter Username"
          />
          {errors.username && <p className="error-message">{errors.username.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            {...register('productName')}
            placeholder="Enter Product Name"
          />
          {errors.productName && <p className="error-message">{errors.productName.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            {...register('amount')}
            placeholder="Enter Amount"
          />
          {errors.amount && <p className="error-message">{errors.amount.message}</p>}
        </div>
        <button type="submit" className="submit-button">Pay Now</button>
      </form>
    </div>
  );
}

export default PaymentPage;
