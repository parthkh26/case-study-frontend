import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../pages/admin/AdminDashboard";
import Tenants from "../pages/admin/Tenants";
import CreateTenant from "../pages/admin/CreateTenant";
import AssignUser from "../pages/admin/AssignUser";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route index element={<AdminDashboard />} />
      <Route path="tenants" element={<Tenants />} />
      <Route path="/admin/create-tenant" element={<CreateTenant />} />
      <Route path="/admin/assign-user" element={<AssignUser />} />
    </Routes>
  );
};

export default AdminRoutes;