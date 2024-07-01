import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import ProductRecommendations from "./components/ProductRecomendation/ProductRecommendations";
import "./App.css";

function App() {
  return (
    // <div style={{ display: "grid" }}>
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/product"
              element={
                <div>
                  <ProductDetail />
                  <ProductDescription />
                  <ProductRecommendations />
                </div>
              }
            />
            <Route path="/category" element={<Category />} />
            <Route
              path="/product/:id"
              element={
                <>
                  <ProductDetail />
                  <ProductDescription />
                  <ProductRecommendations />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </Provider>
    // </div>
  );
}

export default App;
