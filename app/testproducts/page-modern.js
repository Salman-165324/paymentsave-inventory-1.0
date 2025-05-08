import { get } from "@/lib/api";
import ProductList from "@/components/product/ProductList";
import { Suspense } from "react";

/**
 * Product list component with error boundary
 */
function ProductListWithData({ products }) {
  return <ProductList products={products} />;
}

/**
 * Products page - Modern Server Component approach
 * Uses direct fetch with Next.js enhancements
 */
export default async function ProductsPage({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;

  try {
    // Fetch products directly from backend with authentication
    // Uses Next.js enhanced fetch with auth handling
    const productsData = await get(
      `api/v1/products?page=${page}&limit=${limit}`,
      {
        // Optional: Control caching with Next.js fetch options
        cache: "no-store", // Dynamic data - don't cache
        // Alternatively, for cacheable data:
        // next: { revalidate: 60 } // Revalidate every 60 seconds
      }
    );

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Products</h1>
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductListWithData products={productsData.data} />
        </Suspense>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch products:", error);

    // Handle authentication errors specifically
    if (error.status === 401) {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Products</h1>
          <div className="bg-red-50 p-4 rounded border border-red-200 text-red-800">
            <h2 className="font-semibold">Authentication Error</h2>
            <p>Your session has expired. Please log in again.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Products</h1>
        <div className="bg-red-50 p-4 rounded border border-red-200 text-red-800">
          <h2 className="font-semibold">Error loading products</h2>
          <p>
            {error.message || "Failed to fetch products. Please try again."}
          </p>
        </div>
      </div>
    );
  }
}
