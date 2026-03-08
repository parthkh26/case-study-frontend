import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";

import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import TenantRoutes from "./TenantRoutes";
import Favourites from "../pages/user/Favourites";
import Cart from "../pages/user/Cart";
import Orders from "../pages/user/Orders";
import OrderDetails from "../pages/user/OrderDetails";
import OrderRoutes from "./OrderRoutes";

const AppRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/products/*" element={<UserRoutes />} />
        <Route path="/tenant/*" element={<TenantRoutes />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders/*" element={<OrderRoutes />} />
        

      

      {/* <Route path="*" element={<Login />} /> */}

    </Routes>
  );
};

export default AppRoutes;