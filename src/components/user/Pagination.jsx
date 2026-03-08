function Pagination({ currentPage, totalPages, onPageChange }) {

  const pages = [...Array(totalPages).keys()];

  return (
    <div className="flex justify-center items-center mt-8 gap-2">
      {/* Previous Button */}
      <button
        disabled={currentPage === 0}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed text-gray-700 rounded-lg transition duration-300"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg transition duration-300 ${
            currentPage === page
              ? "bg-blue-600 text-white font-bold"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
        >
          {page + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages - 1}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed text-gray-700 rounded-lg transition duration-300"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;