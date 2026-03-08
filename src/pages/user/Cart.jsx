import { useEffect, useState } from "react";
import { placeOrder } from "../../services/orderService";
import { useNavigate } from "react-router-dom";

import UserNavbar from "../../components/user/UserNavbar";

import {
  getCart,
  updateCartItem,
  removeFromCart
} from "../../services/cartService";

function Cart() {

  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  const handlePlaceOrder = async ()=>{
    await placeOrder();
    alert("Order placed successfully!");
    navigate("/orders");
  }

  const loadCart = async () => {

    try {

      const data = await getCart();

      setCart(data);

    } catch (error) {

      console.error("Error loading cart", error);

    }

  };

  useEffect(() => {

    loadCart();

  }, []);

  const increaseQty = async (item) => {
    try {
      await updateCartItem(item.productId, item.quantity + 1);

    loadCart();

    } catch (error) {
      alert(error.message);

    }

    

  };

  const decreaseQty = async (item) => {

    if (item.quantity === 1) return;

    await updateCartItem(item.productId, item.quantity - 1);

    loadCart();

  };

  const removeItem = async (productId) => {

    await removeFromCart(productId);

    loadCart();

  };

  if (!cart) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <UserNavbar />

      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Cart</h2>

        {cart.items.length > 0 ? (
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div
                key={item.productId}
                className="flex items-center gap-6 bg-white rounded-lg shadow-md hover:shadow-lg p-6 border border-gray-200 transition-shadow duration-300"
              >
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-800">{item.productName}</p>
                  <p className="text-green-600 font-bold text-xl">₹{item.price}</p>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => decreaseQty(item)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-gray-700 font-medium">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.productId)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl">Your cart is empty</p>
            <button
              onClick={() => navigate("/products")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}

        {/* Total and Place Order */}
        {cart.items.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold">Total: ₹{cart.totalAmount}</h3>
            <button
              onClick={handlePlaceOrder}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );

}

export default Cart;