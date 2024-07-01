import React from "react";
import "./Header.css";
import logo from "../../assets/img/12.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <span>HOT SALE -30% EN SANDALIAS</span>
      </div>

      <div className="upper-header">
        <div className="upper-links">
          <a href="#directorio">DIRECTORIO DE TIENDAS</a>
          <a href="#servicio">SERVICIO AL CLIENTE</a>
          <a href="#cuenta">MI CUENTA</a>
        </div>
        {/* <div className="search-cart"> */}
        {/* <div className="search-container">
                        <input type="text" placeholder="Buscar" className="search-input" />
                        <button className="search-button">Buscar</button>
                    </div> */}
        {/* <a href="#carrito" className="cart">
            CARRITO 0
          </a> */}
        {/* </div> */}
      </div>

      <div className="main-header">
        <div className="logo">
          <img src={logo} alt="Hush Puppies" />
        </div>
        <nav className="nav-links">
          <a href="#hombre">HOMBRE</a>
          <a href="#mujer">MUJER</a>
          <a href="#blog">BLOG</a>
          <a href="#historia">HISTORIA</a>
          <a href="#tiendas">TIENDAS</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
