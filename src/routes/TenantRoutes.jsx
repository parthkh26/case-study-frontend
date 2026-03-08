import { Routes, Route } from "react-router-dom";

import TenantDashboard from "../pages/tenant/TenantDashboard";
import TenantProducts from "../pages/tenant/TenantProducts";
import AddProduct from "../pages/tenant/AddProduct";
import EditProduct from "../pages/tenant/EditProduct";

function TenantRoutes() {
  return (
    <Routes>

      <Route index element={<TenantDashboard />} />

      <Route path="/:tenantDomain/products" element={<TenantProducts />} />

      <Route path="/:tenantDomain/add-product" element={<AddProduct />} />

      <Route path="/:tenantDomain/edit-product/:productId" element={<EditProduct />} />

    </Routes>
  );
}

export default TenantRoutes;