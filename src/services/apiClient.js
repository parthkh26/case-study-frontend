import axios from "axios";
import keycloak from "./keycloakService";

const apiClient = axios.create({
  baseURL: "http://localhost:8080"
});

apiClient.interceptors.request.use(async (config) => {

  try {

    // refresh token if about to expire
    await keycloak.updateToken(30);

    config.headers.Authorization = `Bearer ${keycloak.token}`;

  } catch (error) {

    console.error("Failed to refresh token", error);

  }

  return config;

});

export default apiClient;