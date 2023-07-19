import React from 'react';

function DeviceDescription({ name, price, discount, ratings }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Discount: {discount}% off</p>
      <p>Ratings: {ratings}</p>
    </div>
  );
}

export default DeviceDescription;
