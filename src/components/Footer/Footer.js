import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <span>@HUSHPUPPIESCO</span>
                <div className="social-media">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="instagram.png" alt="Instagram" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-section">
                    <h3>Servicio al Cliente</h3>
                    <p>Contactenos</p>
                    <p>Cambios y devoluciones</p>
                    <p>Políticas de la tienda</p>
                    <p>Políticas de datos</p>
                </div>
                <div className="footer-section">
                    <h3>Mi Cuenta</h3>
                    <p>Mis pedidos</p>
                    <p>Mis devoluciones</p>
                </div>
                <div className="footer-section">
                    <h3>Recursos</h3>
                    <p>Tiendas</p>
                    <p>Devoluciones</p>
                </div>
                <div className="footer-section">
                    <h3>Newsletter</h3>
                    <p>Regístrate para ser el primero en recibir nuestras noticias</p>
                    <input type="email" placeholder="E-mail" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;