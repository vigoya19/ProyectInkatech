import React, { useState } from "react";
import "./ProductDetail.css";
import { useCart } from "../../CartContext";
import { useSelectedProduct } from "../../SelectedProductContext";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const { selectedProduct } = useSelectedProduct();
  const { addToCart } = useCart();

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    const product = {
      ...selectedProduct,
      size: selectedSize,
      count: 1,
    };
    addToCart(product);
  };

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={selectedProduct.image} alt={selectedProduct.name} />
        <div className="product-angles">
          {selectedProduct.angles &&
            selectedProduct.angles.map((angle, index) => (
              <img key={index} src={angle} alt={`Angle ${index + 1}`} />
            ))}
        </div>
      </div>
      <div className="product-details">
        <h1>{selectedProduct.name}</h1>
        <p>{selectedProduct.price}</p>
        <p>Cod. de producto {selectedProduct.id}</p>
        <div>
          <label htmlFor="color">Color</label>
          <div id="color">
            <img src={selectedProduct.image} alt="Color" />
          </div>
        </div>
        <div>
          <label htmlFor="talla">Talla</label>
          <div id="talla" className="tallas">
            {selectedProduct.sizes.map((size) => (
              <span
                key={size}
                className={selectedSize === size ? "selected" : ""}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </span>
            ))}
          </div>
        </div>
        <div className="extra-info">
          <div>
            <a href="#guide" className="size-guide">
              GUÍA DE TALLAS
            </a>
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            AÑADIR AL CARRITO
          </button>
          <div className="heart"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
