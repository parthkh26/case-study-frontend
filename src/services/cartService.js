import apiClient from "./apiClient";

export const getCart = async () => {

  const response = await apiClient.get("/cart");

  return response.data;

};

export const addToCart = async (productId, quantity) => {

  const response = await apiClient.post("/cart", {
    productId,
    quantity
  });

  return response.data;

};

export const updateCartItem = async (productId, quantity) => {
  try {
    const response = await apiClient.put(`/cart/${productId}`, {
    quantity
  });

  return response.data;

  } catch (error) {
    const message = error.response?.data?.message || "Error updating cart item";
    throw new Error(message);


  }

  

};

export const removeFromCart = async (productId) => {

  const response = await apiClient.delete(`/cart/${productId}`);

  return response.data;

};