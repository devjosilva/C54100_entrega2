import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({addToCart}) => {
  return (
    <div>
      <h2>Página de Productos</h2>
      <p>Bienvenido a nuestra página de productos.</p>
      <Link to="/products">Ver productos</Link>
    </div>
  );
};

export default Products;