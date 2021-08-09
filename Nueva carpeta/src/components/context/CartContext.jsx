import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const getItemIndex = (id) => {
    return cartItems.findIndex((item) => item.id === id);
  };

  const addItem = (item) => {
    const itemIndex = getItemIndex(item.id);
    if (itemIndex === -1) {
      setCartItems([...cartItems, item]);
    }
    if (itemIndex >= 0) {
      updateCartItem(item, itemIndex);
    }
  };

  const updateCartItem = (item, index) => {
    const found = getItem(item.id);
    if (found) {
      found.quantity = found.quantity + item.quantity;
      const newItems = cartItems.filter((cartItem) => cartItem.id !== found.id);
      newItems.push(found);
      setCartItems(newItems);
    }
  };

  const getItem = (id) => {
    return cartItems.find((item) => item.id === id);
  };

  const getTotal = () => {
    return cartItems.reduce((acc, curr) => {
      return (acc += curr.price * curr.quantity);
    }, 0);
  };

  const removeItem = (id) => {
    const itemIndex = getItemIndex(id);
    if (itemIndex >= 0) {
      const newItems = cartItems.filter((item) => item.id !== id);
      setCartItems(newItems);
    }
  };

  const getTotalItemsInCart = () => {
    return cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItem,
        getTotal,
        removeItem,
        getTotalItemsInCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
