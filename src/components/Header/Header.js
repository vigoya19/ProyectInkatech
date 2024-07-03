import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";
import "./Header.css";
import logo from "../../assets/img/12.jpg";
import CartModal from "../ModalCart/ModalCart";

const Header = () => {
  const { state } = useCart();
  const [isCartOpen, setCartOpen] = useState(false);

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <header className="header">
      <div className="header-mainatiner">
        <div className="top-bar">
          <span>HOT SALE -30% EN SANDALIAS</span>
        </div>

        <div className="upper-header">
          <div className="upper-links">
            <Link to="/store-directory">DIRECTORIO DE TIENDAS</Link>
            <Link to="/customer-service">SERVICIO AL CLIENTE</Link>
            <Link to="/my-account">MI CUENTA</Link>
          </div>
        </div>

        <div className="main-header">
          <div className="logo">
            <img src={logo} alt="Hush Puppies" />
          </div>
          <nav className="nav-links">
            <Link to="/product">PRODUCT</Link>
            <Link to="/category">CATEGORY</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/history">HISTORY</Link>
            <Link to="/stores">STORES</Link>
          </nav>
          <div className="right-section">
            <div className="search-cart"></div>

            <button onClick={openCart} className="cart">
              <span> STORE ({state.cartItems.length})</span>
            </button>

            <div className="free-shipping">
              <span>ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000</span>
            </div>
          </div>
        </div>
      </div>
      <CartModal isOpen={isCartOpen} onClose={closeCart} />
    </header>
  );
};

export default Header;
