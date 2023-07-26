import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom'
import  Axios  from 'axios';

import './Login.css'




function AdminLogIn() {



    const navigate = useNavigate();
    const schema = yup.object().shape({
       Username: yup.string().required('Username is required'),
        Password: yup.string().min(4).max(100).required('Password is required')
      });
    
      const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });


        const Submission = (data) => {
            console.log(data);
            Axios
            .post('http://localhost:3000/admin/register', data)
            .then((response) => {
              console.log(response.data);
              alert('Login Successfully');
              navigate('/admin');
            })
            .catch((error) => {
              console.error(error);
              alert('Please register into your account');
            });
          reset();
            // reset();
            // navigate('/admin');
        };


  return (
    <div className='main-login'>
     
 
        
    <div className="contact-one">
        <h1>DIGISTIC-ELECTONICS</h1><br/>
     <h4>Experience the greatest shopping time </h4>
        </div>
    
     <div className="form-login">
    <h1  style={{ color: 'orange'}}>Admin Login</h1><br /><br/>
    <form onSubmit={handleSubmit(Submission)}>
    <label>Username</label><br /><br />
          <input type='text' placeholder='Username' {...register('Username')} /><br />
          <p>{errors.Username?.message}</p><br/>

          <label>Enter Password</label><br /><br />
          <input type='password' placeholder='Password' {...register('Password')} /><br />
          <p>{errors.Password?.message}</p><br/>

          <input type='submit' value='Log in ' style={{ width: '50%', color: 'white', backgroundColor: 'orange', fontWeight: 'bolder' }} />

    </form>
     </div>
   
    </div>

    )
}

export default AdminLogIn