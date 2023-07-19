import React, { useState, useEffect } from 'react';
import './DeliveryPage.css';

function DeliveryPage() {
  const [deliveryProgress, setDeliveryProgress] = useState('Order Placed');
  const [name, setName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const estimatedDeliveryDate = calculateEstimatedDeliveryDate();

  useEffect(() => {
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
    }, 3000); // Progress updates every 3 seconds

    return () => clearInterval(progressInterval);
  }, [deliveryProgress]);

  function calculateEstimatedDeliveryDate() {
    const today = new Date();
    const estimatedDate = new Date(today);
    estimatedDate.setDate(today.getDate() + 3); // Estimated delivery in 3 days
    return estimatedDate.toDateString();
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform any form submission logic here, e.g., saving the entered details
    console.log('Form submitted');
  };

  return (
    <div className="delivery-page">
      <h1>Delivery Information</h1>
      <form className="delivery-details" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="streetAddress">Street Address</label>
          <input
            type="text"
            id="streetAddress"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            placeholder="Enter your street address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city"
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip</label>
          <input
            type="text"
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="Enter your zip code"
          />
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
      </div>
    </div>
  );
}

export default DeliveryPage;
