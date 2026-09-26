"use client";

import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (user) => {
    setFavorites((prev) => {
      const isExist = prev.some((item) => item.id === user.id);
      if (isExist) {
        return prev.filter((item) => item.id !== user.id);
      } else {
        return [...prev, user];
      }
    });
  };

  const isFavorite = (userId) => {
    return favorites.some((item) => item.id === userId);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorite harus digunakan di dalam <FavoriteProvider>");
  }
  return context;
}