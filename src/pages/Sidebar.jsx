import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './sidebar.css';
import { SidebarData } from '../Data/Data';
import { FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const navigate = useNavigate(); // Get the navigate function

  const handleSidebarItemClick = (item) => {
    setSelected(SidebarData.indexOf(item)); // Set the selected index based on the clicked item
    if (item.heading === 'Product') {
      navigate(`/product`);
    } else if (item.heading === 'Orders') {
      navigate(`/table`);
    } else if (item.heading === 'Customer') {
      navigate(`/customerreview`);
    } else if (item.heading === 'Analytics') {
      navigate(`/cards`);
    } else {
      // Handle other sidebar items here, or leave it empty if they don't navigate anywhere
    }
  };

  const handleSignOut = () => {
    // Handle sign-out logic here, such as clearing authentication tokens or user data
    // For now, let's just redirect to the home route
    navigate('/');
  };

  return (
    <>
      <div className='bars' style={expanded ? { left: '60%' } : { left: '5%' }}></div>
      <div className='sidebar'>
        <div className='logo'>
          <img src=".\public\computers\1 (4).jpg" alt="" />
          <span>DIGISTIC ELECTONICS</span>
        </div>
        {/* menu */}
        <div className='menu'>
          {SidebarData.map((item, index) => (
            <div
              className={selected === index ? 'menuitem active' : 'menuitem'}
              key={index}
              onClick={() => handleSidebarItemClick(item)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          ))}
          <div className='menuitem' onClick={handleSignOut}>
            <FaSignOutAlt />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
