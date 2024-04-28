import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ItemListContainer.css';

const ItemListContainer = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, selectedCategory]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const filterProducts = () => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  };

  const handleChangeCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="item-list-container">
      <h2>Productos</h2>
      <div className="categories">
        <button onClick={() => handleChangeCategory('all')}>Todos</button>
        <button onClick={() => handleChangeCategory('electronics')}>Electrónicos</button>
        <button onClick={() => handleChangeCategory('jewelery')}>Joyería</button>
        <button onClick={() => handleChangeCategory('men clothing')}>Ropa para Hombres</button>
        <button onClick={() => handleChangeCategory('women clothing')}>Ropa para Mujeres</button>
      </div>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <div>{product.title}</div>
            <div>{product.price}</div>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            
            <Link to={`/products/${product} `} >Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
