import React from "react";
import "./Home.css";
import Section from "../Section/Section";

function Home() {
  return (
    <div className="Home">
      <Section
        image="https://via.placeholder.com/1200x400?text=Imagen1"
        title="MOVE"
        linkText="Shop Now"
        className="large"
      />
      <Section
        image="https://via.placeholder.com/600x300?text=Imagen2"
        title="HOMBRE"
        className="medium"
      />
      <Section
        image="https://via.placeholder.com/600x300?text=Imagen3"
        title="MUJER"
        className="medium"
      />
      <Section
        image="https://via.placeholder.com/1200x400?text=Imagen4"
        title="MOVE"
        isVideo={true}
        className="large"
      />

      <div className="double-column">
        <Section
          image="https://via.placeholder.com/300x600?text=Imagen5"
          title="ACCESORIOS"
          className="large-image"
        />
        <Section
          image="https://via.placeholder.com/300x150?text=Imagen6"
          title="MUJER"
          className="small-image"
        />
        <Section
          image="https://via.placeholder.com/300x150?text=Imagen7"
          title="HOMBRE"
          className="small-image"
        />
      </div>
      <div className="row">
        <img src="https://via.placeholder.com/150?text=Imagen8" alt="Imagen8" />
        <img src="https://via.placeholder.com/150?text=Imagen9" alt="Imagen9" />
        <img
          src="https://via.placeholder.com/150?text=Imagen10"
          alt="Imagen10"
        />
        <img
          src="https://via.placeholder.com/150?text=Imagen11"
          alt="Imagen11"
        />
        <img
          src="https://via.placeholder.com/150?text=Imagen12"
          alt="Imagen12"
        />
        <img
          src="https://via.placeholder.com/150?text=Imagen13"
          alt="Imagen13"
        />
      </div>
    </div>
  );
}

export default Home;
