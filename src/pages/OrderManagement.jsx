import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './ordermanagement.css';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';

function OrderManagement() {

const schema = yup.object().shape({
  UserName: yup.string().required(),
  OrderNumber: yup.string().required(),
  ProductName: yup.string().required(),
  OrderDate: yup.string().required()
});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Add the reset method from react-hook-form
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
    reset()
  }
  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <input
          type="text"
          name="UserName"
          placeholder="UserName"
          {...register('UserName')}
        />
        { errors.UserName && <p>{errors.UserName.message}</p>}

        <input
          type="text"
          name="OrderNumber"
          placeholder="OrderNumber"
          {...register('OrderNumber')}
        />
        {errors.OrderNumber && <p>{errors.OrderNumber.message}</p>}

        <input
          type="text"
          name="ProductName"
          placeholder="ProductName"
          {...register('ProductName')}
        />
        {errors.ProductName && <p>{errors.ProductName.message}</p>}

        <input
          type="text"
          name="OrderDate"
          placeholder="OrderDate"
          {...register('OrderDate')}
        />
        {errors.OrderDate && <p>{errors.OrderDate.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default OrderManagement
