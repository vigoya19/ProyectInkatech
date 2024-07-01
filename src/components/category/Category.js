import React from 'react';
import './Footer.css';

const Category = () => {

    return (

        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hush Puppies</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <header>
                <div class="header-top">
                    <div class="hot-sale">HOT SALE -30% EN SANDALIAS</div>
                </div>
                <div class="header-main">
                    <img src="logo.png" alt="Hush Puppies Logo" class="logo">
                    <nav>
                        <ul>
                            <li><a href="#">Hombre</a></li>
                            <li><a href="#">Mujer</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Historia</a></li>
                            <li><a href="#">Tiendas</a></li>
                        </ul>
                    </nav>
                    <div class="header-right">
                        <div class="search-bar">
                            <input type="text" placeholder="Buscar">
                        </div>
                        <div class="cart">
                            <a href="#">Carrito (0)</a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div class="breadcrumb">
                    <a href="#">HushPuppiesCO</a> / <a href="#">Calzado</a> / <span>Zapatilla Hombre Pelikan</span>
                </div>
                <div class="product-details">
                    <div class="product-images">
                        <img src="producto_principal.png" alt="Zapatilla Hombre Pelikan">
                        <div class="thumbnails">
                            <img src="thumbnail1.png" alt="Thumbnail 1">
                            <img src="thumbnail2.png" alt="Thumbnail 2">
                            <img src="thumbnail3.png" alt="Thumbnail 3">
                            <img src="thumbnail4.png" alt="Thumbnail 4">
                        </div>
                    </div>
                    <div class="product-info">
                        <h1>Zapatilla Hombre Pelikan</h1>
                        <p class="price">$00.000</p>
                        <p class="product-code">Cod. de producto: zap-005</p>
                        <div class="color">
                            <label for="color">Color</label>
                            <div class="color-option">
                                <img src="color1.png" alt="Color 1">
                            </div>
                        </div>
                        <div class="size">
                            <label for="size">Talla</label>
                            <div class="size-options">
                                <button>5</button>
                                <button>5.5</button>
                                <button class="selected">6</button>
                                <button>6.5</button>
                                <button>7</button>
                                <button>7.5</button>
                                <button>8</button>
                                <button>8.5</button>
                                <button>9</button>
                                <button>9.5</button>
                            </div>
                            <a href="#">Guía de tallas</a>
                        </div>
                        <button class="add-to-cart">Añadir al carrito</button>
                    </div>
                </div>
                <section class="product-description">
                    <h2>Detalles de producto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus dictum mi, a aliquet ante. Fusce vitae felis ac ante aliquet viverra id nec dolor. Praesent sodales augue ligula, et euismod tortor lacinia non. Etiam tristique quam quis rutrum aliquam. Vestibulum in pharetra sem. Etiam scelerisque accumsan suscipit. Praesent fermentum orci orci, vitae dignissim turpis faucibus ac. Aenean dictum feugiat metus, id maximus mauris consectetur ac.</p>
                </section>
                <section class="product-technologies">
                    <h2>Tecnologías</h2>
                    <p>Quisque tellus odio, varius consequat interdum at, molestie viverra lacus. Donec nec tempus enim, nec pellentesque magna. Vestibulum dignissim, nunc id interdum dignissim, orci ex cursus metus, ut interdum tellus arcu at lorem.</p>
                </section>
                <section class="complete-your-look">
                    <h2>Completa tu look</h2>
                    <div class="look-items">
                        <div class="look-item">
                            <img src="look1.png" alt="Zapatilla Hombre Pelikan">
                            <p>Zapatilla Hombre Pelikan</p>
                            <p class="price">$00.000</p>
                            <button>Agregar al carrito</button>
                        </div>
                        <div class="look-item">
                            <img src="look2.png" alt="Zapatilla Hombre Matrix">
                            <p>Zapatilla Hombre Matrix</p>
                            <p class="price">$00.000</p>
                            <button>Agregar al carrito</button>
                        </div>
                        <div class="look-item">
                            <img src="look3.png" alt="Slip On Hombre Party">
                            <p>Slip On Hombre Party</p>
                            <p class="price">$00.000</p>
                            <button>Agregar al carrito</button>
                        </div>
                        <div class="look-item">
                            <img src="look4.png" alt="Slip On Hombre Camelot">
                            <p>Slip On Hombre Camelot</p>
                            <p class="price">$00.000</p>
                            <button>Agregar al carrito</button>
                        </div>
                    </div>
                </section>
                <section class="recommended-products">
                    <h2>Productos recomendados</h2>
                    <div class="recommended-items">
                        <div class="recommended-item">
                            <img src="recommended1.png" alt="Slip On Hombre Party">
                            <p>Slip On Hombre Party</p>
                            <p class="price">$00.000</p>
                            <button>Agregar al carrito</button>
                        </div>
                        <div class="recommended-item">
                            <img src="recommended2.png" alt="Sandalias Hombre Mild">
                            <p>Sandalias Hombre Mild</p>
                            <p class="price">$00.000</p>
                            <button>Agregar al carrito</button>
                        </div>
                        <div class="recommended-item">
                            <img src="recommended3.png" alt="Zapatilla Hombre Alpha">
                            <p>Zapatilla Hombre Alpha</p>
                            <p class="price">$00.000</p>
                            <button>Agregar al carrito</button>
                        </div>
                        <div class="recommended-item">
                            <img src="recommended4.png" alt="Zapatilla Hombre Luton Speed">
                            <p>Zapatilla Hombre Luton Speed</p>
                            <p class="price">$00.000</p>
                            <button>Agregar al carrito</button>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div class="footer-social">
                    <p>@HUSH PUPPIESCO</p>
                    <div class="social-icons">
                        <a href="#"><img src="facebook.png" alt="Facebook"></a>
                        <a href="#"><img src="instagram.png" alt="Instagram"></a>
                    </div>
                </div>
                <div class="footer-links">
                    <div class="footer-column">
                        <h3>Servicio al Cliente</h3>
                        <ul>
                            <li><a href="#">Contáctenos</a></li>
                            <li><a href="#">Cambios y Devoluciones</a></li>
                            <li><a href="#">Políticas de la Tienda</a></li>
                            <li><a href="#">Políticas de Datos</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Mi Cuenta</h3>
                        <ul>
                            <li><a href="#">Mis Pedidos</a></li>
                            <li><a href="#">Mis Devoluciones</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Recursos</h3>
                        <ul>
                            <li><a href="#">Tiendas</a></li>
                            <li><a href="#">Devoluciones</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Newsletter</h3>
                        <form action="#">
                            <input type="email" placeholder="E-mail">
                            <button type="submit">Suscribirse</button>
                        </form>
                    </div>
                </div>
            </footer>
        </body>
        </html>
        


    );




};