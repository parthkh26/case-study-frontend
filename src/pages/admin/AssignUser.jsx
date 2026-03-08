import { useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { assignUserToTenant } from "../../services/adminService";
import { useNavigate } from "react-router-dom";

function AssignUser() {

  const [tenantDomain, setTenantDomain] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleAssign = async (e) => {

    e.preventDefault();

    try {

      await assignUserToTenant(tenantDomain, username);

      alert("User assigned to tenant successfully");
      navigate("/admin");

    } catch (error) {

      console.error("Error assigning user", error);

    }

  };

  return (

    <div>

      <AdminNavbar />

      <div className="min-h-screen bg-gray-200 py-12 px-4">

        <div className="max-w-md mx-auto">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Assign User to Tenant</h2>

          <form onSubmit={handleAssign} className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tenant Domain</label>
              <input
                type="text"
                value={tenantDomain}
                onChange={(e) => setTenantDomain(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter tenant domain"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">User Name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter username"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              Assign User
            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default AssignUser;