import React, { createContext, useReducer, useContext } from 'react';

export const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const tempState = state.filter((item) => item.id === action.payload.id);
      if (tempState.length > 0) {
        return state;
      } else {
        return [...state, action.payload];
      }
    case 'INCREASE':
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    case 'DECREASE':
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    case 'REMOVE':
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
