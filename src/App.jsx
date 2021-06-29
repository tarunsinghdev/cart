import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartScreen from './components/Cart/CartScreen';

import Header from './components/Header';
import ProductDetailScreen from './components/Products/ProductDetail/ProductDetailScreen';
import ProductListScreen from './components/Products/ProductList/ProductListScreen';
import AppContext from './context/app-context';

const App = () => {
  let [cartItems, setCartItems] = useState([]);
  const [saveProduct, setSaveProduct] = useState([]);

  const addToCart = (p) => {
    let flag = 0;
    const newCartItems = cartItems.map((item) => {
      if (item.id === p.id) {
        flag = 1;
        return { ...item, qty: Number(item.qty + 1) };
      } else {
        return item;
      }
    });
    if (flag) {
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, p]);
    }
  };

  const addToCartHandler = (id) => {
    const newCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, qty: Number(item.qty + 1) } : item
    );
    setCartItems(newCartItems);
  };

  const subtractFromCart = (id) => {
    const newCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, qty: Number(item.qty - 1) } : item
    );
    setCartItems(newCartItems);
  };

  const removeFromCartHandler = (id) => {
    cartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(cartItems);
  };

  const saveForLaterHandler = (item) => {
    cartItems = cartItems.filter((p) => p.id !== item.id);
    setSaveProduct([...saveProduct, item]);
    setCartItems(cartItems);
  };

  const moveToCartHandler = (item) => {
    cartItems = [...cartItems, item];
    const updateSavedProduct = saveProduct.filter((p) => p.id !== item.id);
    setSaveProduct(updateSavedProduct);
    setCartItems(cartItems);
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        subtractFromCart,
        addToCartHandler,
        removeFromCartHandler,
        saveForLaterHandler,
        moveToCartHandler,
        saveProduct,
      }}
    >
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={ProductListScreen} />
        <Route
          path="/product/:id"
          render={({ match, history }) => (
            <ProductDetailScreen
              history={history}
              match={match}
              addToCart={addToCart}
            />
          )}
        />
        <Route path="/cart" component={CartScreen} />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
