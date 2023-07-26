import React from 'react';
import './signin.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function SignIn() {
  const navigate = useNavigate();

  // Define the validation schema using yup
  const schema = yup.object().shape({
    Username: yup.string().required('Use any preferred username'),
    Email: yup.string().email().required('Email is required'),
    Password: yup.string().min(4).max(10).required('Password is required'),
   
  });

  // Initialize react-hook-form with the validation schema
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  // Handle form submission
  const handleSubmission = (data) => {
    console.log(data);
    Axios
    .post('http://localhost:3000/auth/Register', data)
    .then((response) => {
      console.log(response.data);
      alert('Register Successfully');
      navigate('/login');
    })
    .catch((error) => {
      console.error(error);
      alert('Please register into your account');
    });
  reset();
    //  reset();
    //  navigate("/login");
  };

  return (
    <div className='main-register'>
      <div className='register-content1'>
        <div className="init">
          <h1 style={{ fontFamily: 'monospace', fontWeight: 'bolder' }}>Create an account with us</h1>
        </div><br /><br />

        <div className="form-register">
          <h2 style={{ fontFamily: 'monospace', fontWeight: 'bolder', color: "orange", paddingLeft: "25px" }}>Sign up now and unlock exclusive access!</h2>

          <form onSubmit={handleSubmit(handleSubmission)}>

            <label>Username</label><br /><br />
            <input type='text' placeholder='Username' {...register('Username')} /><br />
            <p>{errors.Username?.message}</p><br />

            <label>Email</label><br /><br />
            <input type='Email' placeholder='Email' {...register('Email')} /><br />
            <p>{errors.Email?.message}</p><br />

            <label>Password</label><br /><br />
            <input type='Password' placeholder='Password' {...register('Password')} /><br />
            <p>{errors.Password?.message}</p><br />

            <input type='submit' value='SignIn' style={{ width: '50%', color: 'white', backgroundColor: 'orange', fontWeight: 'bolder', padding: "10px" }} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;