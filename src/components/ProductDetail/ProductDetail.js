import React, { useState } from "react";
import "./ProductDetail.css"; // Importa tu archivo de estilos
import mainImage from "../../assets/img/10.jpg";
import angleImage1 from "../../assets/img/10.jpg";
import angleImage2 from "../../assets/img/10.jpg";
import angleImage3 from "../../assets/img/10.jpg";
import angleImage4 from "../../assets/img/10.jpg";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={mainImage} alt="Zapatilla Hombre Pelikan" />
        <div className="product-angles">
          <img src={angleImage1} alt="Angle 1" />
          <img src={angleImage2} alt="Angle 2" />
          <img src={angleImage3} alt="Angle 3" />
          <img src={angleImage4} alt="Angle 4" />
        </div>
      </div>
      <div className="product-details">
        <h1>Zapatilla Hombre Pelikan</h1>
        <p>$00.000</p>
        <p>Cod. de producto zap-005</p>
        <div>
          <label htmlFor="color">Color</label>
          <div id="color">
            <img src={mainImage} alt="Color" />
          </div>
        </div>
        <div>
          <label htmlFor="talla">Talla</label>
          <div id="talla" className="tallas">
            {["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5"].map(
              (size) => (
                <span
                  key={size}
                  className={selectedSize === size ? "selected" : ""}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </span>
              )
            )}
          </div>
        </div>
        <div className="extra-info">
          <div>
            <a href="#guide" className="size-guide">
              GUÍA DE TALLAS
            </a>
          </div>
          <button className="add-to-cart">AÑADIR AL CARRITO</button>
          <div className="heart"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
