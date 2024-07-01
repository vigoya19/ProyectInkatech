import React from "react";
import "./ProductRecommendations.css";
import product1 from "../../assets/img/1.jpg";
import product2 from "../../assets/img/2.jpg";
import product3 from "../../assets/img/3.jpg";
import product4 from "../../assets/img/4.jpg";

import colorRed from "../../assets/img/10.jpg";
import colorGreen from "../../assets/img/10.jpg";
import colorBlue from "../../assets/img/10.jpg";

const ProductRecommendations = () => {
  const products = [
    {
      id: 1,
      image: product1,
      name: "Zapatilla Hombre Pelikan",
      price: "$00.000",
      colors: [colorRed, colorGreen, colorBlue], // Rutas de las imágenes de los colores
    },
    {
      id: 2,
      image: product2,
      name: "Zapatilla Hombre Matrix",
      price: "$00.000",
      colors: [colorRed, colorGreen, colorBlue], // Rutas de las imágenes de los colores
    },
    {
      id: 3,
      image: product3,
      name: "Slip On Hombre Party",
      price: "$00.000",
      colors: [colorRed, colorGreen, colorBlue], // Rutas de las imágenes de los colores
    },
    {
      id: 4,
      image: product4,
      name: "Slip On Hombre Camelot",
      price: "$00.000",
      colors: [colorRed, colorGreen, colorBlue], // Rutas de las imágenes de los colores
    },
  ];

  return (
    <div className="product-recommendations">
      <h2>Completa tu Look</h2>
      <div className="recommendations-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p className="product-price">{product.price}</p>
            <div className="color-options">
              {product.colors.map((color, index) => (
                <img
                  key={index}
                  src={color}
                  alt={`Color ${index}`}
                  className="color-swatch"
                />
              ))}
            </div>
            <button className="product-button">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendations;
