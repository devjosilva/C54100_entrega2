import React, { useState, useEffect, createRoot, createSignal } from 'react';
import { BrowserRouter as Router, Route, Routes,  useNavigate  } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import Cart from './pages/Cart';
import './index.css';

const App = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);

      const uniqueCategories = [...new Set(data.map(product => product.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

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
        <Navbar isUserAuthenticated={isUserAuthenticated} cartItemCount={cart.length} categories={categories} />
        <Routes>
          <Route path="/category" element={<ItemListContainer products={products} addToCart={addToCart} />} />      
          <Route path="/category/:idCategory" element={<ItemListContainer products={products} addToCart={addToCart} />} />          
          <Route path="/products/:id" element={<ItemDetail products={products} addToCart={addToCart} />} />
          {/*
          <Route path="/products" element={<ItemListContainer products={products} addToCart={addToCart} />} />
          */}
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
