import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const getItemIndex = (dataId) => {
    return cartItems.findIndex((item) => item.dataId === dataId);
  };

  const addItem = (item) => {
    console.log(item)
    const itemIndex = getItemIndex(item.dataId);
    if (itemIndex === -1) {
      setCartItems([...cartItems, item]);
    }
    if (itemIndex >= 0) {
      updateCartItem(item, itemIndex);
    }
  };

  const updateCartItem = (item, index) => {
    const found = getItem(item.dataId);
    if (found) {
      found.quantity = found.quantity + item.quantity;
      const newItems = cartItems.filter((cartItem) => cartItem.dataId !== found.dataId);
      newItems.push(found);
      setCartItems(newItems);
    }
  };

  const getItem = (dataId) => {
    return cartItems.find((item) => item.dataId === dataId);
  };

  const getTotal = () => {
    return cartItems.reduce((acc, curr) => {
      return (acc += curr.price * curr.quantity);
    }, 0);
  };

  const removeItem = (dataId) => {
    console.log("cartContex")
    console.log(dataId)
    const itemIndex = getItemIndex(dataId);
    if (itemIndex >= 0) {
      const newItems = cartItems.filter((item) => item.dataId !== dataId);
      setCartItems(newItems);
    }
  };

  const getTotalItemsInCart = () => {
    return cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  };

  const clear = (dataId) => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItem,
        getTotal,
        removeItem,
        getTotalItemsInCart,
        clear,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
