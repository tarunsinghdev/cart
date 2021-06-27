import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartScreen from './components/Cart/CartScreen';

import Header from './components/Header';
import ProductDetailScreen from './components/Products/ProductDetail/ProductDetailScreen';
import ProductListScreen from './components/Products/ProductList/ProductListScreen';
import AppContext from './context/app-context';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <AppContext.Provider value={{ cartItems: cartItems }}>
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
