import apiServer from "@/lib/apiServer";
import ProductList from "@/components/product/ProductList";

/**
 * Products page - Server Component
 * This demonstrates using apiServer in a server component
 */
export default async function ProductsPage({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;

  try {
    // Fetch products from backend with automatic auth handling
    const productsData = await apiServer.get(
      `products?page=${page}&limit=${limit}`
    );

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Products</h1>
        <ProductList products={productsData.data} />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch products:", error);

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
