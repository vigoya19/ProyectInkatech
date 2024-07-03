import React, { createContext, useState, useContext } from "react";

const SelectedProductContext = createContext();

export const SelectedProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState({
    id: "zap-005",
    name: "Zapatilla Hombre Pelikan",
    price: "$00.000",
    image: require("./assets/img/10.jpg"),
    angles: [
      require("./assets/img/10.jpg"),
      require("./assets/img/10.jpg"),
      require("./assets/img/10.jpg"),
      require("./assets/img/1.jpg"),
    ],
    sizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5"],
  });

  return (
    <SelectedProductContext.Provider
      value={{ selectedProduct, setSelectedProduct }}
    >
      {children}
    </SelectedProductContext.Provider>
  );
};

export const useSelectedProduct = () => useContext(SelectedProductContext);
