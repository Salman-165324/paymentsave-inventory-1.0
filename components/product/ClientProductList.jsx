"use client";

import { useState, useEffect } from "react";
import ProductList from "@/components/product/ProductList";

/**
 * Client-side Product List Component
 * Uses route handler to fetch data
 */
export default function ClientProductList({ initialPage = 1, limit = 10 }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        // Fetch products from route handler (not directly from external API)
        const response = await fetch(
          `/api/products/modern?page=${page}&limit=${limit}`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch products");
        }

        setProducts(data.data || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [page, limit]);

  // Handle pagination
  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  if (loading) {
    return <div className="py-8 text-center">Loading products...</div>;
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded border border-red-200 text-red-800">
        <h2 className="font-semibold">Error</h2>
        <p>{error}</p>
        <button
          onClick={() => setPage(initialPage)}
          className="mt-2 px-4 py-2 bg-red-100 text-red-800 rounded hover:bg-red-200"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <ProductList products={products} />

      {/* Pagination Controls */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevPage}
          disabled={page <= 1}
          className={`px-4 py-2 rounded ${
            page <= 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-blue-100 text-blue-800 hover:bg-blue-200"
          }`}
        >
          Previous
        </button>

        <span className="self-center">Page {page}</span>

        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}
