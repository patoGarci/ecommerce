import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function CartWidget() {
  const { cartItems, getTotal, getTotalItemsInCart } = useContext(CartContext);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setActive(false);
    }, 500);
  };
  return (
    <>
      <button
        className={`btn icon-btn cart-widget ${
          getTotalItemsInCart() > 0 ? '' : 'visually-hidden'
        }`}
        onClick={handleClick}
        onBlur={handleBlur}
      >
        <i className="fas fa-shopping-cart"></i>
        <span className="badge bg-danger cart-widget-badge">
          {getTotalItemsInCart()}
        </span>
      </button>
      <div className={`cart__items-container ${active ? 'active' : ''}`}>
        <ul>
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <li key={item.id}>
                <div>{item.title}</div>
                <div className="">
                  <b>{item.price}</b> x {item.quantity}
                </div>
              </li>
            ))}
        </ul>
        <div className="cart-widget-total">
          <b>total:</b> {getTotal()}
        </div>
        <div className="cart-widget-link">
          <Link to="/cart">view cart</Link>
        </div>
      </div>
    </>
  );
}
