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
import { SelectedProductProvider } from "./SelectedProductContext";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/product"
              element={
                <SelectedProductProvider>
                  <div>
                    <ProductDetail />
                    <ProductDescription />
                    <ProductRecommendations />
                  </div>
                </SelectedProductProvider>
              }
            />
            <Route
              path="/category"
              element={
                <div>
                  <Category />
                </div>
              }
            />
            <Route
              path="/product/:id"
              element={
                <SelectedProductProvider>
                  <>
                    <ProductDetail />
                    <ProductDescription />
                    <ProductRecommendations />
                  </>
                </SelectedProductProvider>
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
