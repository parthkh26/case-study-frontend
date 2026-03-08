import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import UserNavbar from "../../components/user/UserNavbar";

import { getOrders } from "../../services/orderService";

function Orders() {

  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  const loadOrders = async () => {

    try {

      const data = await getOrders();

      setOrders(data);

    } catch (error) {

      console.error("Error loading orders", error);

    }

  };

  useEffect(() => {

    loadOrders();

  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <UserNavbar />

      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Orders</h2>

        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.orderId}
                className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 border border-gray-200 transition-shadow duration-300"
              >
                <p className="text-lg font-semibold text-gray-800">Order #{order.orderId}</p>
                <div className="mt-2 space-y-1 text-gray-700">
                  <p>Date: {order.createdAt}</p>
                  <p>Status: {order.status}</p>
                  <p>Total Items: {order.totalQuantity}</p>
                  <p>Total Amount: ₹{order.totalAmount}</p>
                </div>
                <button
                  onClick={() => navigate(`/orders/${order.orderId}`)}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl">You have no orders yet</p>
            <button
              onClick={() => navigate("/products")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
            >
              Shop Now
            </button>
          </div>
        )}
      </div>
    </div>
  );

}

export default Orders;