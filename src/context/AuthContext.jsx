import { createContext, useContext, useState } from "react";
import keycloak from "../services/keycloakService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const logout = () => {
    keycloak.logout({
      redirectUri: "http://localhost:5173"
    });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};