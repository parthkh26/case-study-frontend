import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UserNavbar from "../../components/user/UserNavbar";

import { getOrderById } from "../../services/orderService";

function OrderDetails() {

  const { id } = useParams();

  const [order, setOrder] = useState(null);

  const loadOrder = async () => {

    try {

      const data = await getOrderById(id);

      setOrder(data);

    } catch (error) {

      console.error("Error loading order", error);

    }

  };

  useEffect(() => {

    loadOrder();

  }, []);

  if (!order) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <UserNavbar />

      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Order #{order.orderId}</h2>
        <div className="text-gray-700 mb-6">
          <p>Date: {order.createdAt}</p>
          <p>Status: {order.status}</p>
          <p className="font-semibold">Total Amount: ₹{order.totalAmount}</p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Items</h3>
        <div className="space-y-4">
          {order.items.map((item) => (
            <div
              key={item.productId}
              className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 border border-gray-200 transition-shadow duration-300"
            >
              <p className="text-lg font-semibold text-gray-800">{item.productName}</p>
              <p className="text-gray-600">Tenant: {item.tenantName}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-gray-600">Price: ₹{item.priceAtPurchase}</p>
              <p className="text-gray-600 font-semibold">Subtotal: ₹{item.subtotal}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default OrderDetails;