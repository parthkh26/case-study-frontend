import { useState } from "react";
function CategoryFilter({ selectedCategory, onCategoryChange, onPriceFilter, onClearFilter}) {

  const categories = [
    "All",
    "Electronics",
    "T-Shirts",
    "Trousers",
    "Sports",
    "Shoes"
  ];

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const handleFilter = () => {
    if ( !minPrice || !maxPrice ) {
      alert("Please enter both min and max price");
      return;
    }
    onPriceFilter(Number(minPrice), Number(maxPrice));
  };
  const handleClear = ()=> {
    setMinPrice("");
    setMaxPrice("");
    onClearFilter();
  }

  return (
    <div className="w-full lg:w-64 flex flex-col md:flex-row lg:flex-col gap-6">
      <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Filter by Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              onCategoryChange(category === "All" ? null : category)
            }
            className={`w-full py-3 px-4 rounded-lg font-medium transition duration-300 ${
              selectedCategory === category ||
              (category === "All" && selectedCategory === null)
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      </div>

      <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
        Filter by Price
        </h3>

        <div className="space-y-3">

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full px-3 py-2 rounded-md"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full px-3 py-2  rounded-md"
        />

        <button
          onClick={handleFilter}
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Apply Filter
        </button>

        <button
          onClick={handleClear}
          className="w-full bg-gray-300 py-2 rounded-md hover:bg-gray-400"
        >
          Clear Filter
        </button>

      </div>
    </div>
    </div>
  );
}

export default CategoryFilter;