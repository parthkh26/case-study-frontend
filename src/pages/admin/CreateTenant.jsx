import { useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { createTenant } from "../../services/adminService";
import { useNavigate } from "react-router-dom";

function CreateTenant() {

  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await createTenant({
        name: name,
        domain: domain
      });

      alert("Tenant created successfully");

      navigate("/admin");

    } catch (error) {

      console.error("Error creating tenant", error);

    }

  };

  return (

    <div>

      <AdminNavbar />

      <div className="min-h-screen bg-gray-200 py-12 px-4">

        <div className="max-w-md mx-auto">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Tenant</h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Enter Username</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter tenant username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Enter Domain</label>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter tenant domain"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              Create a New Tenant
            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default CreateTenant;