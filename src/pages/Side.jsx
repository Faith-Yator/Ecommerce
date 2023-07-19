import React, { useState } from 'react';
import './side.css';

// Components for each option in the side navbar
function PaymentTracking() {
  return <h2>Payment Tracking</h2>;
}

function OrderTracking() {
  return <h2>Order Tracking</h2>;
}

function AddItem() {
  return <h2>Add Item</h2>;
}

function DeleteItem() {
  return <h2>Delete Item</h2>;
}

function AdminPage() {
  const [selectedOption, setSelectedOption] = useState('payment'); // Default selected option

  // Function to handle option selection in the side navbar
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="admin-page">
      {/* Side Navbar */}
      <div className="side-navbar">
        <ul>
          <li className={selectedOption === 'payment' ? 'active' : ''} onClick={() => handleOptionSelect('payment')}>
            Payment Tracking
          </li>
          <li className={selectedOption === 'order' ? 'active' : ''} onClick={() => handleOptionSelect('order')}>
            Order Tracking
          </li>
          <li className={selectedOption === 'add' ? 'active' : ''} onClick={() => handleOptionSelect('add')}>
            Add Item
          </li>
          <li className={selectedOption === 'delete' ? 'active' : ''} onClick={() => handleOptionSelect('delete')}>
            Delete Item
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {selectedOption === 'payment' && <PaymentTracking />}
        {selectedOption === 'order' && <OrderTracking />}
        {selectedOption === 'add' && <AddItem />}
        {selectedOption === 'delete' && <DeleteItem />}
      </div>
    </div>
  );
}

export default AdminPage;