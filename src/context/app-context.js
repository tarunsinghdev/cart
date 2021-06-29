import React from 'react';

const AppContext = React.createContext({
  cartItems: [],
  saveProducts: [],
  addToCartHandler: null,
  removeFromCartHandler: null,
  saveForLaterHandler: null,
  moveToCartHandler: null,
});
export default AppContext;
