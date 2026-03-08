import { useEffect, useState } from "react";

import UserNavbar from "../../components/user/UserNavbar";
import SearchPanel from "../../components/user/SearchPanel";
import CategoryFilter from "../../components/user/CategoryFilter";
import ProductGrid from "../../components/user/ProductGrid";
import Pagination from "../../components/user/Pagination";

import { getProducts } from "../../services/productService";
import { filterProductsByPrice } from "../../services/productService";

function Products() {

  const [products, setProducts] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [category, setCategory] = useState(null);

  const [page, setPage] = useState(0);

  const [totalPages, setTotalPages] = useState(0);

  

  const fetchProducts = async () => {

    try {

      const data = await getProducts(
        searchQuery,
        category,
        page,
        8
      );

      setProducts(data.content);
      setTotalPages(data.totalPages);

    } catch (error) {

      console.error("Error fetching products", error);

    }

  };

  const handlePriceFilter = async (min, max) => {

  try {

    const data = await filterProductsByPrice(min, max, 0, 8);

    setPage(0);
    setProducts(data.content);
    setTotalPages(data.totalPages);

  } catch (error) {

    console.error("Error filtering products", error);

  }

};


  useEffect(() => {

    fetchProducts();

  }, [searchQuery, category, page]);


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <UserNavbar />

      {/* Search Panel */}
      <SearchPanel onSearch={(query) => {
        setSearchQuery(query);
        setPage(0);
      }} />

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Left Sidebar */}
        <div className="lg:w-64 p-4">
          <CategoryFilter
            selectedCategory={category}
            onCategoryChange={(cat) => {
              setCategory(cat);
              setPage(0);
            }}
            onPriceFilter={handlePriceFilter}
          />
        </div>

        {/* Products Section */}
        <div className="flex-1 p-4">
          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500 text-xl">No products available</p>
            </div>
          )}
        </div>
      </div>

      {/* Pagination at bottom */}
      {totalPages > 1 && (
        <div className="p-4">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </div>
      )}
    </div>
  );

}

export default Products;