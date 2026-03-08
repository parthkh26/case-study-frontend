import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import keycloak from "./services/keycloakService";
import { getCurrentUser } from "./services/userService";

import { useAuth } from "./context/AuthContext";

import AppRoutes from "./routes/AppRoutes";

function App() {

  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {

    keycloak.init({ onLoad: "check-sso" }).then(async (authenticated) => {

      if (authenticated) {

        try {

          const user = await getCurrentUser();

          // store user in global context
          setUser(user);

          if (user.role === "ADMIN") {
            navigate("/admin");
          } else {
            navigate("/products");
          }

        } catch (error) {

          console.error("Error fetching current user:", error);
          navigate("/login");

        }

      } else {
        navigate("/login");
      }

    });

  }, []);

  return <AppRoutes />;

}

export default App;