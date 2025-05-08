import apiServer from "@/lib/apiServer";

/**
 * GET handler for products
 * This demonstrates using the apiServer utility in an API route
 */
export async function GET(request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || 1;
    const limit = searchParams.get("limit") || 10;

    // Call backend API with authentication handled automatically
    // This uses the BASE_URL environment variable to reach your separate backend
    const productsData = await apiServer.get(
      `api/v1/products?page=${page}&limit=${limit}`
    );

    return Response.json(productsData, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch products:", error);

    // If session expired and token refresh failed
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

/**
 * POST handler for creating a product
 */
export async function POST(request) {
  try {
    // Parse request body
    const productData = await request.json();

    // Call backend API with automatic auth handling
    // This routes to your separate backend service
    const result = await apiServer.post("api/v1/products", productData);

    return Response.json(result, { status: 201 });
  } catch (error) {
    console.error("Failed to create product:", error);

    // If session expired and token refresh failed
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
        message: error.message || "Failed to create product",
        errors: error.errors || {},
      },
      { status: error.status || 500 }
    );
  }
}
