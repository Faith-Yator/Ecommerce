import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './PaymentPage.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const schema = yup.object().shape({
  cardNumber: yup.string().required('Card Number is required'),
  Username: yup.string().required('Username is required'),
  Productname: yup.string().required('Product Name is required'),
  Amount: yup.string().typeError('Amount must be a number').required('Amount is required'),
});

function PaymentPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors },reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Perform payment processing logic here
    // console.log('Payment submitted:', data);
    // alert('Payment successfully processed');
    // navigate('/logout');
    // reset();
    Axios.post('http://localhost:3000/payment/new', data)
    .then((response) => {
      // Handle successful response
      console.log(response.data);
      navigate('/Logout');
      reset(); 
    })
    .catch((error) => {
      // Handle error
      console.error(error);
    });
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
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            id="Username"
            {...register('Username')}
            placeholder="Enter Username"
          />
          {errors.username && <p className="error-message">{errors.username.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Productname">Productname</label>
          <input
            type="text"
            id="ProductName"
            {...register('Productname')}
            placeholder="Enter Product Name"
          />
          {errors.Productname && <p className="error-message">{errors.Productname.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Amount">Amount</label>
          <input
            type="text"
            id="Amount"
            {...register('Amount')}
            placeholder="Enter Amount"
          />
          {errors.Amount && <p className="error-message">{errors.Amount.message}</p>}
        </div>
        <button type="submit" className="submit-button">Pay Now</button>
      </form>
    </div>
  );
}

export default PaymentPage;
