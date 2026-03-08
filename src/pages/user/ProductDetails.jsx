import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import UserNavbar from "../../components/user/UserNavbar";
import { getProductById } from "../../services/productService";
import { addToCart, getCart, removeFromCart } from "../../services/cartService";
import { addToFavourites, removeFromFavourites, getFavourites } from "../../services/favouriteService";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const [isFavourite, setIsFavourite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const handleFavourite = async () => {
    if(isFavourite) {
        await removeFromFavourites(product.id);
        setIsFavourite(false);
    } else {
        await addToFavourites(product.id);
        setIsFavourite(true);
    }
  }

  const handleAddToCart = async () => {
    if(isInCart) {
        alert("Product is already in cart!");
        return;
    }
    await addToCart(product.id, 1);
    setIsInCart(true);
    alert("Product added to cart!");
  };

  useEffect(() => {

  const fetchProduct = async () => {

    try {

      const data = await getProductById(id);
      setProduct(data);

      const favourites = await getFavourites();

      const exists = favourites.some(fav => fav.productId === data.id);

      setIsFavourite(exists);

      const cart = await getCart();
      
      const inCart = cart.items.some(item => item.productId === data.id);
      setIsInCart(inCart);

    } catch (error) {

      console.error("Error loading product", error);

    }

  };

  fetchProduct();

}, [id]);

  


  if (!product) {
    return <p>Loading...</p>;
  }

  const imageUrl = `http://localhost:8080/images/${product.imageName}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <UserNavbar />

      <div className="flex flex-col lg:flex-row gap-8 p-8 max-w-7xl mx-auto">
        {/* LEFT SIDE */}
        <div className="lg:w-80">
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-80 object-contain bg-gray-100 rounded-lg shadow-md"
          />

          <div className="mt-6 space-y-4">
            <button 
              onClick={handleFavourite} 
              className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                isFavourite 
                  ? "bg-red-700 hover:bg-red-800 text-white" 
                  : "bg-red-600 hover:bg-red-700 text-white"
              }`}
            >
              {isFavourite ? "Remove from Favorites" : "Add to Favorites"}
            </button>

            <button 
              onClick={handleAddToCart} 
              className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                isInCart 
                  ? "bg-orange-700 hover:bg-orange-800 text-white" 
                  : "bg-orange-600 hover:bg-orange-700 text-white"
              }`}
            >
              {isInCart ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
          <p className="text-lg text-gray-600 mb-2"><strong>Seller:</strong> {product.tenant}</p>
          <p className="text-lg text-gray-600 mb-2"><strong>Category:</strong> {product.category}</p>
          <p className="text-2xl font-bold text-green-600 mb-4"><strong>Price:</strong> ₹{product.price}</p>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-48 space-y-4 p-6 rounded-lg shadow-md">
          <button
            onClick={() => navigate("/favourites")}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition duration-300"
          >
            Go to Favorites
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition duration-300"
          >
            Go to Cart
          </button>
        </div>
      </div>
    </div>
  );

}

export default ProductDetails;