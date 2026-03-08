import keycloak from "../../services/keycloakService";

function Login() {

  const handleLogin = () => {
    keycloak.login({
      redirectUri: "http://localhost:5173"
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to SwiftMart</h1>
        <p className="text-lg mb-8">Get started to meet all your shopping needs in one place</p>
        <button 
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
        >
          Login/Register
        </button>
      </div>
    </div>
  );
}

export default Login;