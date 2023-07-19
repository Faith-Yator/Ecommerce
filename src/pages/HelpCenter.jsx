import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import './helpcenter.css';

function HelpCenter() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleCardClick = (page) => {
    navigate(page);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search logic here, and redirect to the appropriate page based on the search query
    // For example, you can have a switch statement to determine the pages based on the searchQuery
    switch (searchQuery.toLowerCase()) {
      case 'order placement':
        navigate('/PlaceOrder');
        break;
      case 'delivery':
        navigate('/deliverypage');
        break;
      case 'cancellation':
        navigate('/OrderCancellation');
        break;
      case 'payment':
        navigate('/payment');
        break;
        case 'computer':
        navigate('/computer');
        break;
        case 'refridgerator':
        navigate('/homeappliances');
        break;
        case 'networking':
        navigate('/networking');
        break;
        case 'smartphones':
        navigate('/smartphones');
        break;
        case 'tvs':
          navigate('/tvs');
          break;
          case 'printers':
            navigate('/printers');
            break;
            case 'SignIn':
            navigate('/signin');
            break;
      // Add more cases for other pages as needed
      default:
        // If the search query doesn't match any predefined page, you can handle it accordingly
        console.log('Page not found');
        alert('page not found');
    }
  };

  return (
    <div>
      <div className='help'>
        <h1> Digistic-Enterprise Help Center</h1>
        <p>How can we help you?</p>
      </div>
      <div className='helpsearch'>
        <form onSubmit={handleSearchSubmit}>
          <input
            type='text'
            placeholder='Describe your issue...'
            className='search-input'
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type='submit' className='search-btn'>
            <BiSearch />
          </button>
        </form>
      </div>
      <div className='card1'>
        <div className='card' onClick={() => handleCardClick('/PlaceOrder')}>
          <img src='.\help\placement.png' alt='Card' className='card-image' />
          <p>Order Placement</p>
        </div>
        <div className='card' onClick={() => handleCardClick('/deliverypage')}>
          <img src='.\help\delivery.png' alt='Card' className='card-image' />
          <p>Delivery</p>
        </div>
        <div className='card' onClick={() => handleCardClick('/OrderCancellation')}>
          <img src='.\help\cancellation.png' alt='Card' className='card-image' />
          <p>Cancellation</p>
        </div>
        <div className='card' onClick={() => handleCardClick('/payment')}>
          <img src='.\help\others.png' alt='Card' className='card-image' />
          <p>Payment, Account related and others</p>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
