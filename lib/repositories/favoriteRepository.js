import { favorites } from "../db";

export function findAllFavorites() {
  return favorites;
}

export function findFavoriteById(id) {
  return favorites.find((f) => f.id === id);
}

export function insertFavorite(data) {
  favorites.push(data);
  return data;
}

export function deleteFavoriteById(id) {
  const index = favorites.findIndex((f) => f.id === id);
  if (index === -1) return false;

  favorites.splice(index, 1);
  return true;
}

export function updateFavoriteInDb(id, updatedData) {
  
  const index = favorites.findIndex((fav) => fav.id === id);
  
  if (index !== -1) {
    
    favorites[index] = { ...favorites[index], ...updatedData };
    return favorites[index];
  }
  
  return null;
}