import { Route, Routes } from "react-router-dom";

import Products from "../pages/user/Products";
import ProductDetails from "../pages/user/ProductDetails";
import Orders from "../pages/user/Orders";
import OrderDetails from "../pages/user/OrderDetails";
const UserRoutes = () => {
  return (
    <Routes>
      <Route index element={<Products />} />
      <Route path=":id" element={<ProductDetails />} />
    </Routes>
  );
};

export default UserRoutes;