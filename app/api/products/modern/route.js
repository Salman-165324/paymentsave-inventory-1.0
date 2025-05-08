import { get } from "@/lib/api";

/**
 * Route handler for getting products
 * To be used by client components to fetch data securely
 */
export async function GET(request) {
  try {
    // Extract search params
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || 1;
    const limit = searchParams.get("limit") || 10;

    // Call the external API directly using our enhanced fetch
    const productsData = await get(
      `api/v1/products?page=${page}&limit=${limit}`,
      { cache: "no-store" } // Don't cache this data
    );

    return Response.json(productsData);
  } catch (error) {
    console.error("Failed to fetch products:", error);

    // Handle auth errors
    if (error.status === 401) {
      return Response.json(
        {
          success: false,
          message: "Session expired. Please login again.",
        },
        { status: 401 }
      );
    }

    return Response.json(
      {
        success: false,
        message: error.message || "Failed to fetch products",
      },
      { status: error.status || 500 }
    );
  }
}
