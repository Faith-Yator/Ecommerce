import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './DeliveryPage.css';
import  Axios  from 'axios';

const schema = yup.object().shape({
  Username: yup.string().required('Username is required'),
  Address: yup.string().required(' Address is required'),
  City: yup.string().required('City is required'),
  Zip: yup.string().required('Zip is required'),
});

function DeliveryPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [deliveryProgress, setDeliveryProgress] = React.useState('Order Placed');
  const [Username, setUsername] = React.useState('');
  const [Address, setAddress] = React.useState('');
  const [City, setCity] = React.useState('');
  const [Zip, setZip] = React.useState('');
  const estimatedDeliveryDate = calculateEstimatedDeliveryDate();

  React.useEffect(() => {
    // Simulate progress updates after some time intervals
    const progressInterval = setInterval(() => {
      switch (deliveryProgress) {
        case 'Order Placed':
          setDeliveryProgress('Order Shipped');
          break;
        case 'Order Shipped':
          setDeliveryProgress('Out for Delivery');
          break;
        case 'Out for Delivery':
          setDeliveryProgress('Delivered');
          break;
        default:
          // Do nothing if already delivered
          break;
      }
    }, 10000); // Progress updates every 3 seconds

    return () => clearInterval(progressInterval);
  }, [deliveryProgress]);

  function calculateEstimatedDeliveryDate() {
    const today = new Date();
    const estimatedDate = new Date(today);
    estimatedDate.setDate(today.getDate() + 3); // Estimated delivery in 3 days
    return estimatedDate.toDateString();
  }

  const handleFormSubmit = (data) => {
    // Perform any form submission logic here, e.g., saving the entered details
    console.log('Form submitted', data);
    reset();
    Axios.post('http://localhost:3000/delivery/new', data)
    .then((response) => {
      console.log(response.data);
      reset(); 
    })
    .catch((error) => {
      console.error(error);
    });

  };

  return (
    <div className="delivery-page">
      <h1>Delivery Information</h1>
      <form className="delivery-details" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-group">
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            id="Username"
            {...register('Username')}
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
          />
          {errors.Username && <p>{errors.Username.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Address"> Address</label>
          <input
            type="text"
            id="Address"
            {...register('Address')}
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your  address"
          />
          {errors.Address && <p>{errors.Address.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="City">City</label>
          <input
            type="text"
            id="City"
            {...register('City')}
            value={City}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your City"
          />
          {errors.City && <p>{errors.City.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Zip">Zip</label>
          <input
            type="text"
            id="Zip"
            {...register('Zip')}
            value={Zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="Enter your Zip code"
          />
          {errors.Zip && <p>{errors.Zip.message}</p>}
        </div>
        <div className="delivery-method">
          <h2>Delivery Method</h2>
          <p>Standard Shipping</p>
          <p>Estimated Delivery: {estimatedDeliveryDate}</p>
        </div>
        <button type="submit" className="save-button">Save Address</button>
      </form>
      <div className="delivery-progress">
        <h2>Delivery Progress</h2>
        <ul className="progress-list">
          <li className={`progress-item ${deliveryProgress === 'Order Placed' ? 'completed' : ''}`}>Order Placed</li>
          <li className={`progress-item ${deliveryProgress === 'Order Shipped' ? 'active' : ''}`}>Order Shipped</li>
          <li className={`progress-item ${deliveryProgress === 'Out for Delivery' ? 'active' : ''}`}>Out for Delivery</li>
          <li className={`progress-item ${deliveryProgress === 'Delivered' ? 'completed' : ''}`}>Delivered</li>
        </ul>
      </div>
      <div className="delivery-actions">
        <button className="track-button">Track Order</button>
        {deliveryProgress === 'Order Placed' && <button className="cancel-button">Cancel Order</button>}
        {/* Link to the Orders page */}
        <Link to="/order">View Orders</Link>
      </div>
    </div>
  );
}

export default DeliveryPage;
