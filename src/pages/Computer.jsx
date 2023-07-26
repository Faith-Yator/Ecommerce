import React, { useContext } from 'react';
import './computer.css';
import { Link } from 'react-router-dom';
import computerData from './computerData';
import { CartContext } from './Context/CartContext.jsx';

function Computer() {
  const { state, dispatch } = useContext(CartContext);
  const data = computerData;

  const addToCart = (item) => {
    dispatch({ type: 'ADD', payload: item });
  };
  const totalQuantity = state.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="computer">
      <h1>Computers</h1>
      <button className="cart-status">Items in cart: {totalQuantity}</button>

      <div className="card-container">
        {data.map((item) => {
          item.quantity = 1;
          return (
            <div className="cards" key={item.id}>
              <div className="img">
                <img src={item.image} alt={`Item ${item.id}`} />
              </div>
              <div className="title">
                <h2>{item.title}</h2>
              </div>
              <div className="price">
                <h2>{item.price}</h2>
              </div>
              <div className="description">
                <pre>{item.description}</pre>
              </div>
              <div className="next">
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Computer;
