// ItemDetail.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import '../styles/ItemDetail.css';

const ItemDetail = ({ products, addToCart }) => {
  const { id } = useParams();

  if (!products.length) {
    return <h2>Cargando...</h2>;
  }

  const product = products.find(product => product.id === parseInt(id));
  
  if (!product) {
    return <h2>Producto no encontrado.</h2>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.title} />
      <div className="details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <button onClick={handleAddToCart}><FaShoppingCart /> Añadir al Carrito</button>
        <Link to="/category">Volver a Productos</Link>
      </div>
    </div>
  );
};

export default ItemDetail;
