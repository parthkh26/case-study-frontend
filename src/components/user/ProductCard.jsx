import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  const imageUrl = `http://localhost:8080/images/${product.imageName}`;

  return (
    <div
      onClick={handleClick}
      className="border border-gray-200 rounded-lg p-4 cursor-pointer bg-white min-h-80 flex flex-col justify-between shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      {/* Product Image */}
      <img
        src={imageUrl}
        alt={product.name}
        className="w-full h-48 object-contain bg-gray-50 p-2 rounded"
      />

      {/* Product Name */}
      <h4 className="mt-3 text-lg font-semibold text-gray-800 line-clamp-2">
        {product.name}
      </h4>

      {/* Tenant */}
      <p className="text-gray-500 text-sm mt-1">
        Seller: {product.tenant}
      </p>

      {/* Price */}
      <p className="text-xl font-bold text-green-600 mt-2">
        ₹{product.price}
      </p>
    </div>
  );
}

export default ProductCard;