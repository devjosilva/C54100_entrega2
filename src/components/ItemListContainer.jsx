// ItemListContainer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ItemListContainer.css';

const ItemListContainer = ({ products, addToCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="item-list-container">
      <h2>Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            <img src={product.image} alt={product.title} />
            <div>{product.title}</div>
            <div>{product.price}</div>
            <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
            <Link to={`/products/${product.id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
