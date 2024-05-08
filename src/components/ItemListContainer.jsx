import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import '../styles/ItemListContainer.css';

const ItemListContainer = ({ products, addToCart }) => {
  //const [selectedCategory, setSelectedCategory] = useState('all');
  const {idCategory} =useParams();
  const [selectedCategory, setSelectedCategory] = useState(!idCategory ? 'all' : idCategory );
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleChangeCategory = (category) => {
    setSelectedCategory(category);
    switch(category) {
      case 'all':
        navigate('/category', { replace: true });
        break;
      case 'electronics':
        navigate('/category/electronics', { replace: true });
        break;
      case 'jewelery':
        navigate('/category/jewelery', { replace: true });
        break;
      case "men's clothing":
        navigate("/category/men's clothing", { replace: true });
        break;
      case "women's clothing":
          navigate("/category/women's clothing", { replace: true });
          break;
      default:
        break;
    }
  };

  const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);
  
  return (
    <div className="item-list-container">
      <h2>Productos {selectedCategory} </h2>
      <div className="categories">
        <button onClick={() => handleChangeCategory("all")}>Todos</button>
        <button onClick={() => handleChangeCategory("electronics")}>Electrónicos</button>
        <button onClick={() => handleChangeCategory("jewelery")}>Joyería</button>
        <button onClick={() => handleChangeCategory("men's clothing")}>Ropa para Hombres</button>
        <button onClick={() => handleChangeCategory("women's clothing")}>Ropa para Mujeres</button>
      </div>      
      {
      !filteredProducts ? (
        <p>No hay productos en esta categoría.</p>
      ) : (
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name}
            <img src={product.image} alt={product.title} />
            <div>{product.title}</div>
            <div>{product.category}</div>
            <div>{product.price}</div>
            <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
            <Link to={`/products/${product.id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default ItemListContainer;
