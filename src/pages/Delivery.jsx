import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './delivery.css';

function Delivery() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ ProductName: '', OrderNumber: '', UserName: '', Location: '' });

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const add = () => {
    setUsers([...users, newUser]);
    setNewUser({ Username: '', OrderNumber: '', ProductName: '', Location: '' });
  };

  const navigate = useNavigate();

  const redirectToPayment = () => {
    // Add your logic or validations here if needed before redirecting
    navigate('/payment'); // Replace '/payment' with the actual URL of the payment page
  };

  return (
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
              <td>{user.ProductName}</td>
              <td>{user.OrderNumber}</td>
              <td>{user.Location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-container">
        <input
          type="text"
          name="UserName"
          placeholder="UserName"
          value={newUser.UserName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="ProductName"
          placeholder="Product Name"
          value={newUser.ProductName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="OrderNumber"
          placeholder="Order Number"
          value={newUser.OrderNumber}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="Location"
          placeholder="Location"
          value={newUser.Location}
          onChange={handleInputChange}
        />
        <button onClick={add}>Add</button>
        <button onClick={redirectToPayment}>Go to Payment</button>
      </div>
    </div>
  );
}

export default Delivery;
