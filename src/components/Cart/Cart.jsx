import React, { useContext } from 'react';
import './Cart.scss';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, removeItem, getTotal, clear } = useContext(CartContext);
  return (
    <div className="Cart">
      {(!cartItems || !cartItems.length) && (
        <div className="empty-cart">
          <i className="fas fa-shopping-cart"></i>
          <div className="my-4">Empty Cart</div>
          <Link className="btn btn-primary" to="/">
            Begin Shopping
          </Link>
        </div>
      )}
      {cartItems && !!cartItems.length && (
        <ul>
          {cartItems.map((item) => {
            return (
              <li key={item.id} className="cart-item">
                <div className="cart-item-picture">
                  <img src={item.pictureUrl} alt={item.title} />
                </div>
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-price">{item.price}</div>
                <div className="cart-item-quantity">{item.quantity}</div>
                <div className="cart-item-delete">
                  <button className="btn" onClick={() => removeItem(item.id)}>
                    <div className="fas fa-trash-alt"></div>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <b>total: $ {getTotal()}</b>
      <button onClick={() => {clear()}}>Delete</button>
    </div>
  );
};
