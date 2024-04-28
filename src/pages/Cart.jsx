import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const handleRemoveFromCart = (productId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto del carrito?')) {
      removeFromCart(productId);
    }
  };

  const handleClearCart = () => {
    if (window.confirm('¿Estás seguro de que deseas vaciar completamente el carrito?')) {
      clearCart();
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>Precio: {item.price}</p>
                  <button onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="subtotal">
            <p>Subtotal: ${calculateTotal()}</p>
            <button onClick={handleClearCart}>Vaciar Carrito</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
