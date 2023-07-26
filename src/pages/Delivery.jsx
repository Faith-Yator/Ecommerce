import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './delivery.css';

const schema = yup.object().shape({
  Username: yup.string().required('Username is required'),
  Productname: yup.string().required('Product Name is required'),
  Ordernumber: yup.string().required('Order Number is required'),
  Location: yup.string().required('Location is required')
});

function Delivery() {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    resolver: yupResolver(schema)
  });

  const [users, setUsers] = React.useState([]);

  const handleInputChange = (e) => {
    setValue(e.target.name, e.target.value);
  };

  const onSubmit = (data) => {
    Axios.post('http://localhost:3000/orders/new', data)
      .then((response) => {
        console.log(response.data);
        setUsers([...users, data]); // Add the submitted data to the users state
        reset(); // Reset the form
        alert('order made successfully')
      })
      .catch((error) => {
        console.error(error);
        alert('order failed')
      });
  };

  const navigate = useNavigate();

  const handleAddToCart = () => {
    const formData = {
      Username: register.Username.value,
      Productname: register.Productname.value,
      Ordernumber: register.Ordernumber.value,
      Location: register.Location.value
    };
    setUsers([...users, formData]);
    reset();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <input
          type="text"
          name="Username"
          placeholder="Username"
          {...register('Username')}
        />
        {errors.Username && <p>{errors.Username.message}</p>}

        <input
          type="text"
          name="Productname"
          placeholder="Productname"
          {...register('Productname')}
        />
        {errors.Productname && <p>{errors.Productname.message}</p>}

        <input
          type="text"
          name="Ordernumber"
          placeholder="OrderNumber"
          {...register('Ordernumber')}
        />
        {errors.Ordernumber && <p>{errors.Ordernumber.message}</p>}

        <input
          type="text"
          name="Location"
          placeholder="Location"
          {...register('Location')}
        />
        {errors.Location && <p>{errors.Location.message}</p>}

        <button type="submit">Submit</button>
        <button type="button" onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={() => navigate('/payment')}>Go to Payment</button>
      </form>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Ordernumber</th>
              <th>Productname</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.Username}</td>
                <td>{user.Ordernumber}</td>
                <td>{user.Productname}</td>
                <td>{user.Location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Delivery;
