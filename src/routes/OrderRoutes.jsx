import { Route, Routes } from "react-router-dom";

import Products from "../pages/user/Products";
import ProductDetails from "../pages/user/ProductDetails";
import Orders from "../pages/user/Orders";
import OrderDetails from "../pages/user/OrderDetails";
const OrderRoutes = () => {
  return (
    <Routes>
      <Route index element={<Orders />} />
      <Route path=":id" element={<OrderDetails />} />
    </Routes>
  );
};

export default OrderRoutes;