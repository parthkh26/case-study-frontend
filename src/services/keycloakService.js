import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8081",
  realm: "e-commerce",
  clientId: "react-client"
});

export default keycloak;