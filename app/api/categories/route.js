import { post } from "@/lib/api";

/**
 * POST handler for creating a new product category
 */
export async function POST(request) {
  try {
    // Parse request body
    const categoryData = await request.json();

    // Call backend API with automatic auth handling
    const result = await post(
      "api/v1/inventory/web/product-category/",
      categoryData
    );

    return Response.json(result, { status: 201 });
  } catch (error) {
    console.error("Failed to create category:", error);

    // Handle authentication errors
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
        message: error.message || "Failed to create category",
        errors: error.errors || {},
      },
      { status: error.status || 500 }
    );
  }
}
