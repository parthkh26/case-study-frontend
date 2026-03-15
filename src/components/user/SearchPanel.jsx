import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPanel({ onSearch }) {

  const [query, setQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(query);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-gray-800 text-white shadow-md border-b border-gray-700">
      {/* Search Box */}
      <div className="flex flex-col md:flex-row items-center space-x-4 flex-1 mr-8">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full ml-3 md:w-auto flex-1 px-4 py-2 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-600 text-white placeholder-gray-400"
        />
        <button
          onClick={handleSearch}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg mt-4"
        >
          Search
        </button>
      </div>

      {/* More Dropdown */}
      <div className="relative">
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg mt-4"
        >
          More
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border">
            <button 
              onClick={() => handleNavigate("/favourites")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200"
            >
              Favorites
            </button>
            <button 
              onClick={() => handleNavigate("/cart")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200"
            >
              Cart
            </button>
            <button 
              onClick={() => handleNavigate("/orders")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200"
            >
              Orders
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPanel;