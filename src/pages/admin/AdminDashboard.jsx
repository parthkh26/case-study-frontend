import { useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import TenantTable from "../../components/admin/TenantTable";
import { getTenants } from "../../services/adminService";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const [tenants, setTenants] = useState([]);
  const [showTenants, setShowTenants] = useState(false);
  const navigate = useNavigate();

  const handleViewTenants = async () => {
    try {
      const data = await getTenants();
      setTenants(data);
      setShowTenants(true);
    } catch (error) {
      console.error("Error fetching tenants:", error);
    }
  };

  
  const refreshTenants = async () => {
    try {
      const data = await getTenants();
      setTenants(data);
    } catch (error) {
      console.error("Error refreshing tenants:", error);
    }
  };

  return (

    <div>

      <AdminNavbar />

      <div className="p-8">

        <h2 className="text-4xl font-bold text-center mb-12">What's on your mind?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <button 
            onClick={handleViewTenants}
            className="h-40 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-xl flex items-center justify-center"
          >
            View Tenants
          </button>

          <button 
            onClick={()=> navigate("admin/create-tenant")}
            className="h-40 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-xl flex items-center justify-center"
          >
            Create Tenant
          </button>

          <button 
            onClick={()=> navigate("admin/assign-user")}
            className="h-40 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-xl flex items-center justify-center"
          >
            Assign User To Tenant
          </button>

        </div>

        <div className="mt-12">

          {showTenants && (
            <TenantTable
              tenants={tenants}
              refreshTenants={refreshTenants}
            />
          )}

        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;