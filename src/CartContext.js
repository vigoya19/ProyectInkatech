import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (existingItemIndex > -1) {
        const updatedCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, count: item.count + 1 }
            : item
        );
        return { ...state, cartItems: updatedCartItems };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, count: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) =>
            item.id !== action.payload.id || item.size !== action.payload.size
        ),
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (id, size) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id, size } });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
