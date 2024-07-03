import React from "react";
import "../ModalCart/ModalCart.css";
import { useCart } from "../../CartContext";

const CartModal = ({ isOpen, onClose }) => {
  const { state, removeFromCart } = useCart();
  const { cartItems } = state;

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.count, 0);
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total + parseFloat(item.price.replace("$", "")) * item.count,
        0
      )
      .toFixed(2);
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Carrito de Compras</h2>
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <p>Talla: {item.size}</p>
                    <p>Cantidad: {item.count}</p>
                    <button onClick={() => removeFromCart(item.id, item.size)}>
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <p>Total de artículos: {getTotalItems()}</p>
              <p>Precio total: ${getTotalPrice()}</p>
              <button className="checkout-button">Proceder a la compra</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
