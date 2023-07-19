import React from 'react';
import './TrackOrderPage.css';

function TrackOrderPage() {
  // Get the current date
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="track-order-page">
      <h1>Track Your Order</h1>
      <table className="order-table">
        <caption>Order Details</caption>
        <tbody>
          <tr>
            <th>Order ID</th>
            <td>123456789</td>
          </tr>
          <tr>
            <th>Order Date</th>
            <td>{currentDate}</td>
          </tr>
        </tbody>
      </table>
      <div className="order-status">
        <h2>Order Status</h2>
        <table className="status-table">
          <tbody>
            <tr className="status-row completed">
              <td>Order Placed</td>
              <td>{currentDate}</td>
            </tr>
            <tr className="status-row completed">
              <td>Order Shipped</td>
              <td>{currentDate}</td>
            </tr>
            <tr className="status-row active">
              <td>Out for Delivery</td>
              <td>{currentDate}</td>
            </tr>
            <tr className="status-row">
              <td>Delivered</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TrackOrderPage;
