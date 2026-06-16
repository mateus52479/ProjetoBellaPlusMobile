import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  function addFavorite(product) {
    setFavorites((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  }

  function removeFavorite(productId) {
    setFavorites((prev) => prev.filter((p) => p.id !== productId));
  }

  function isFavorite(productId) {
    return favorites.some((p) => p.id === productId);
  }

  function addToCart(product) {
    setCart((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  }

  function isInCart(productId) {
    return cart.some((p) => p.id === productId);
  }

  return (
    <ProductContext.Provider
      value={{
        favorites,
        cart,
        addFavorite,
        removeFavorite,
        isFavorite,
        addToCart,
        removeFromCart,
        isInCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
