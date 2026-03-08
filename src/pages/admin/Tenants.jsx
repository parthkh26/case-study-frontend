import { useEffect, useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import TenantTable from "../../components/admin/TenantTable";
import { getTenants } from "../../services/adminService";

function Tenants() {

  const [tenants, setTenants] = useState([]);

  const fetchTenants = async () => {

    try {

      const data = await getTenants();
      setTenants(data);

    } catch (error) {

      console.error("Error fetching tenants:", error);

    }

  };

  useEffect(() => {

    fetchTenants();

  }, []);

  return (

    <div>

      <AdminNavbar />

      <div style={{ padding: "20px" }}>

        <h2>All Tenants</h2>

        <TenantTable tenants={tenants} refreshTenants={fetchTenants} />

      </div>

    </div>

  );

}

export default Tenants;