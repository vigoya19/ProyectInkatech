import React from "react";
import "./ProductRecommendations.css";
import { useCart } from "../../CartContext";
import { useSelectedProduct } from "../../SelectedProductContext";
import images from "../../assets/images";

const products = [
  {
    id: "zap-006",
    name: "Slip On Hombre Camelot",
    price: "$200.000",
    image: images.product1,
    sizes: ["5", "6", "7"],
    angles: [images.angle1, images.angle2, images.angle3],
  },
  {
    id: "zap-007",
    name: "Zapatilla Hombre Pelikan",
    price: "$250.000",
    image: images.product2,
    sizes: ["5.5", "6.5", "8"],
    angles: [images.angle1, images.angle2, images.angle3],
  },
  {
    id: "zap-008",
    name: "Zapatilla Hombre Matrix",
    price: "$300.000",
    image: images.product3,
    sizes: ["7", "8", "9"],
    angles: [images.angle1, images.angle2, images.angle3],
  },
  {
    id: "zap-009",
    name: "Slip On Hombre Party",
    price: "$350.000",
    image: images.product4,
    sizes: ["5", "6", "7.5"],
    angles: [images.angle1, images.angle2, images.angle3],
  },
  {
    id: "zap-010",
    name: "Sandalias Hombre Mild",
    price: "$150.000",
    image: images.product5,
    sizes: ["5", "6", "7.5"],
    angles: [images.angle1, images.angle2, images.angle3],
  },
  {
    id: "zap-011",
    name: "Zapatilla Hombre Alpha",
    price: "$400.000",
    image: images.product6,
    sizes: ["5", "6", "7.5"],
    angles: [images.angle1, images.angle2, images.angle3],
  },
  {
    id: "zap-012",
    name: "Zapatilla Hombre Luton Speed",
    price: "$450.000",
    image: images.product7,
    sizes: ["5", "6", "7.5"],
    angles: [images.angle1, images.angle2, images.angle3],
  },
  {
    id: "zap-013",
    name: "Slip On Hombre Caravan",
    price: "$200.000",
    image: images.product8,
    sizes: ["5", "6", "7.5"],
    angles: [images.angle1, images.angle2, images.angle3],
  },
  {
    id: "zap-014",
    name: "Slip On Hombre Riley Racket",
    price: "$300.000",
    image: images.product9,
    sizes: ["5", "6", "7.5"],
    angles: [images.angle1, images.angle2, images.angle3],
  },
];

const ProductRecommendations = () => {
  const { addToCart } = useCart();
  const { setSelectedProduct } = useSelectedProduct();

  return (
    <div className="product-recommendations">
      <h2>Completa tu Look</h2>
      <div className="recommendations-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            setSelectedProduct={setSelectedProduct}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

const ProductItem = ({ product, setSelectedProduct, addToCart }) => (
  <div className="product-item" onClick={() => setSelectedProduct(product)}>
    <img src={product.image} alt={product.name} />
    <p>{product.name}</p>
    <p className="product-price">{product.price}</p>
    <div className="size-options">
      {product.sizes.map((size, index) => (
        <span key={index} className="size-option">
          {size}
        </span>
      ))}
    </div>
    <div className="product-angles">
      {product.angles &&
        product.angles.map((angle, index) => (
          <img key={index} src={angle} alt={`Angle ${index + 1}`} />
        ))}
    </div>
    <button
      className="product-button"
      onClick={(e) => {
        e.stopPropagation();
        addToCart(product);
      }}
    >
      Agregar al carrito
    </button>
  </div>
);

export default ProductRecommendations;
