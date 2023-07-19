
import React, { useContext } from 'react';
import './tvs.css';
import { Link } from 'react-router-dom';
import tvData from './tvData';
import { CartContext } from './Context/CartContext.jsx';

function Computer() {
  const { state, dispatch } = useContext(CartContext);
  const data = tvData;

  const addToCart = (item) => {
    dispatch({ type: 'ADD', payload: item });
  };

  return (
    <div className="computer">
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
