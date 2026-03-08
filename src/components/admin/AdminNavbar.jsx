import keycloak from "../../services/keycloakService";

function AdminNavbar() {

  const handleLogout = () => {
    keycloak.logout({
      redirectUri: "http://localhost:5173"
    });
  };

  return (
    <div className="flex justify-between items-center px-6 py-8 bg-gray-800 text-white shadow-md">
      <div>
        <h2 className="text-4xl font-bold text-blue-400 mb-4">SwiftMart</h2>
        <p className="text-2xl font-bold text-gray-300">Welcome Admin</p>
      </div>
      <button 
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300"
      >
        Logout
      </button>
    </div>
  );
}

export default AdminNavbar;