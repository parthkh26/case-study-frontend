import apiClient from "./apiClient";

export const getCurrentUser = async () => {

  const response = await apiClient.get("/users/me");

  return response.data;

};