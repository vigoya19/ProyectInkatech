import React from "react";
import "./Home.css";
import Section from "../Section/Section";
import fondo from "../../assets/img/home.png";
import moveImage from "../../assets/img/imageMove.png";

function Home() {
  return (
    <div className="Home">
      <Section
        image={fondo}
        title="MOVE"
        linkText="Shop Now"
        className="large"
      />

      <Section
        image={moveImage}
        title="MOVE"
        // isVideo={true}
        className="large"
      />
      <Section
        image="https://getwallpapers.com/wallpaper/full/4/1/9/172391.jpg"
        title="HOMBRE"
        className="medium"
      />
      <Section
        image="https://1.bp.blogspot.com/-TxcAr6G2UTE/UWn5OVeECzI/AAAAAAAAAX4/KSyTIbMgZ4M/s1600/Fotolia_41313030_Subscription_XL.jpg"
        title="MUJER"
        className="medium"
      />
      <div className="double-column">
        <Section
          image="https://2.bp.blogspot.com/-TFyT0RLZutA/UiFRRPG53UI/AAAAAAAB4b4/Gd5Ol2y3KmU/s1600/paisajes-bonitos-fondos-para-pc-laptop-y-tablets-im%C3%A1genes-gratis-para-compartir-en-facebook-+(4).jpg"
          title="ACCESORIOS"
          className="large-image"
        />
        <Section
          image="https://getwallpapers.com/wallpaper/full/d/4/8/172485.jpg"
          title="MUJER"
          className="small-image"
        />
        <Section
          image="https://cdn.wallpapersafari.com/57/96/yaDRHL.jpg"
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
