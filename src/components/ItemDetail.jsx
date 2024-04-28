import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/ItemDetail.css';

const ItemDetail = ({ product, addToCart }) => {
    const [products, setProducts] = useState([]);

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
        <Link to="/products">Volver a Productos</Link>
      </div>
    </div>
  );
};

export default ItemDetail;
