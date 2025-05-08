"use server";

import { createResource } from "@/lib/serverActions";
import { z } from "zod";
import { revalidatePath } from "next/cache";

// Validation schema for category data
const categorySchema = z.object({
  type: z.string().min(1, { message: "Product type is required" }),
  title: z.string().min(1, { message: "Category name is required" }),
  description: z.string().optional(),
});

/**
 * Server action to create a new product category
 *
 * @param {FormData|Object} data - Form data or object containing category details
 * @returns {Promise<Object>} - Result with success status and message
 */
export async function createCategory(data) {
  try {
    // Get form data values as object
    const formData =
      data instanceof FormData ? Object.fromEntries(data.entries()) : data;

    console.log("Raw form data received:", formData);

    // Transform form data to match API requirements - preserve exact case
    const apiData = {
      type: formData.productType || "", // Preserving exact case (TERMINAL or ACCESSORIES)
      title: formData.categoryName || "",
      description: formData.description || "",
    };

    console.log("API data being sent:", apiData);

    // Validate data against schema
    const validationResult = categorySchema.safeParse(apiData);

    if (!validationResult.success) {
      // Map API field errors back to form field names
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      const mappedErrors = {
        productType: fieldErrors.type || null,
        categoryName: fieldErrors.title || null,
        description: fieldErrors.description || null,
      };

      return {
        success: false,
        errors: mappedErrors,
        message: "Validation failed. Please check your inputs.",
      };
    }

    // Call the API using our reusable server action
    try {
      const response = await createResource(
        "api/v1/inventory/web/product-category/",
        validationResult.data,
        { revalidatePaths: ["/categories"] }
      );

      // Revalidate the categories page
      revalidatePath("/categories");

      return {
        success: true,
        data: response.data || response,
        message: "Category created successfully!",
      };
    } catch (apiError) {
      console.error("API call error:", apiError);

      // Handle specific API errors
      if (apiError.status === 401) {
        return {
          success: false,
          message: "Authentication failed. Please log in again.",
        };
      }

      if (apiError.status === 409) {
        return {
          success: false,
          message: "A category with this name already exists.",
        };
      }

      return {
        success: false,
        message: apiError.message || "Failed to save category to the server.",
        errors: apiError.errors || {},
      };
    }
  } catch (error) {
    console.error("Failed to create category:", error);

    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      errors: error.errors || {},
    };
  }
}
