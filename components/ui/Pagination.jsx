'use client';

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  itemsPerPage = 5,
  onPageChange,
}) {
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const visiblePages = [];

    visiblePages.push(1); // Always show the first page

    if (currentPage > 3) {
      visiblePages.push('...');
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(currentPage + 1, totalPages - 1);
      i++
    ) {
      visiblePages.push(i);
    }

    if (currentPage < totalPages - 2) {
      visiblePages.push('...');
    }

    if (totalPages > 1) {
      visiblePages.push(totalPages); // Always show the last page
    }

    return visiblePages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-between items-center mt-6 px-4">
      <div className="text-sm text-gray-600">
        Showing {start}-{end} of {totalItems} items
      </div>

      <div className="flex items-center space-x-1">
        {/* Previous Button */}
        <button
          className="h-8 w-8 rounded-full border flex items-center justify-center bg-white hover:bg-gray-100 disabled:opacity-50"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={index}
                className="h-8 w-8 flex items-center justify-center text-gray-500"
              >
                ...
              </span>
            );
          }

          return (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium transition ${
                page === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          className="h-8 w-8 rounded-full border flex items-center justify-center bg-white hover:bg-gray-100 disabled:opacity-50"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
