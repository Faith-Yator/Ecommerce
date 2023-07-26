import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './ordermanagement.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OrderManagement() {

const schema = yup.object().shape({
  Username: yup.string().required(),
  Productname: yup.string().required(),
  Ordernumber: yup.string().required(),
  Location: yup.string().required()
});
const navigate=useNavigate()
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
    Axios.post('http://localhost:3000/orders/new', data)
    .then((response) => {
      // Handle successful response
      console.log(response.data);
      navigate('/payment');
      reset(); 
    })
    .catch((error) => {
      // Handle error
      console.error(error);
    });
  
  }
  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <input
          type="text"
          name="Username"
          placeholder="Username"
          {...register('Username')}
        />
        { errors.Username && <p>{errors.Username.message}</p>}

        <input
          type="text"
          name="Ordernumber"
          placeholder="Ordernumber"
          {...register('Ordernumber')}
        />
        {errors.Ordernumber && <p>{errors.Ordernumber.message}</p>}

        <input
          type="text"
          name="Productname"
          placeholder="Productname"
          {...register('Productname')}
        />
        {errors.Productname && <p>{errors.Productname.message}</p>}

        <input
          type="text"
          name="Location"
          placeholder="Location"
          {...register('Location')}
        />
        {errors.Location && <p>{errors.Location.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default OrderManagement
