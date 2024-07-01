// ProductDescription.js
import React from "react";
import "./ProductDescription.css"; // Importa el archivo de estilos

const ProductDescription = () => {
  return (
    <div className="product-description">
      <h2>DETALLES DE PRODUCTO</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus
        dictum mi, a aliquet ante. Fusce vitae felis ac ante aliquet viverra id
        nec dolor. Praesent sodales augue ligula, ut euismod tortor lacinia non.
        Etiam tristique quam quis rutrum aliquam. Vestibulum in pharetra sem.
        Etiam scelerisque accumsan suscipit. Praesent fermentum orci orci, vitae
        dignissim turpis faucibus ac. Aenean dictum feugiat metus, id maximus
        mauris consectetur ac.
      </p>
      <h2>TECNOLOGÍAS</h2>
      <p>
        Quisque tellus odio, varius consequat interdum at, molestie viverra
        lacus. Donec nec tempus enim, nec pellentesque magna. Vestibulum
        dignissim, nunc id interdum dignissim, orci ex cursus metus, ut interdum
        tellus arcu et lorem.
      </p>

      <div className="related-products">
        {/* Aquí puedes agregar imágenes de productos relacionados */}
      </div>
    </div>
  );
};

export default ProductDescription;
