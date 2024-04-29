import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Navbar from 'src/components/NavBar';
import ItemListContainer from 'src/components/ItemListContainer';
import ItemDetail from 'src/components/ItemDetail';
import Cart from 'src/pages/Cart';
import 'src/index.css';

const App = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar isUserAuthenticated={isUserAuthenticated} cartItemCount={cart.length} />
        <Routes>
          <Route path="/products" element={<ItemListContainer addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ItemDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
