import apiClient from "./apiClient";

export const addToFavourites = async (productId) => {

  await apiClient.post(`/favourites/${productId}`);

};

export const removeFromFavourites = async (productId) => {

  await apiClient.delete(`/favourites/${productId}`);

};

export const getFavourites = async () => {

  const response = await apiClient.get("/favourites");

  return response.data;

};