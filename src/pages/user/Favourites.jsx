import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import UserNavbar from "../../components/user/UserNavbar";
import { getFavourites, removeFromFavourites } from "../../services/favouriteService";

function Favourites() {

  const navigate = useNavigate();


  const [favourites, setFavourites] = useState([]);

  const loadFavourites = async () => {

    try {

      const data = await getFavourites();
      setFavourites(data);

    } catch (error) {

      console.error("Error loading favourites", error);

    }

  };

  useEffect(() => {
    loadFavourites();
  }, []);

  const handleRemove = async (productId) => {

    await removeFromFavourites(productId);
    loadFavourites();

  };

  return (
    <div className="min-h-screen bg-gray-50">
      <UserNavbar />

      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Favourites</h2>

        {favourites.length > 0 ? (
          <div className="space-y-4">
            {favourites.map((fav) => {
              const imageUrl = `http://localhost:8080/images/${fav.imageName}`;

              return (
                <div
                  key={fav.productId}
                  className="flex items-center gap-6 bg-white rounded-lg shadow-md hover:shadow-lg p-6 border border-gray-200 transition-shadow duration-300"
                >
                  <img
                    src={imageUrl}
                    alt={fav.productName}
                    onClick={() => navigate(`/products/${fav.productId}`)}
                    className="w-24 h-24 object-contain bg-gray-100 rounded-lg cursor-pointer hover:opacity-80 transition duration-200"
                  />

                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-800">{fav.productName}</p>
                    <p className="text-green-600 font-bold text-xl">₹{fav.price}</p>
                  </div>

                  <button 
                    onClick={() => handleRemove(fav.productId)}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl">No favourites yet</p>
            <button 
              onClick={() => navigate("/products")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );

}

export default Favourites;