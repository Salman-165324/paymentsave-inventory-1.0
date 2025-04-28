import { Target } from "lucide-react";

export const getCategoryData = async () => {
  const TargetData = "Product Category";
  try {
    // Add timestamp to URL to ensure it's always a fresh request
    //   const timestamp = Date.now();
    const url = `${process.env.BASE_URL}api/v1/inventory/web/product-category/`;

    const res = await fetch(url);

    if (!res.ok) {
      console.log(`HTTP Error: ${res.status}`);

      const contentType = res.headers.get("Content-Type");
      const errorBody = await res.text();

      if (contentType?.includes("application/json")) {
        try {
          const errorJson = JSON.parse(errorBody);
          const errorMessage =
            errorJson?.message ||
            errorJson?.error ||
            errorJson?.detail ||
            errorJson?.description ||
            `Failed to fetch ${TargetData} (Status: ${res.status})`;
          throw new Error(errorMessage);
        } catch (parseError) {
          console.log(`Failed to parse error JSON for ${TargetData}:`, parseError);
          throw new Error(
            `Failed to fetch ${TargetData} (Status: ${res.status})`
          );
        }
      } else {
        console.log(`Error body for: ${TargetData}`, errorBody);
        throw new Error(
          `Failed to fetch ${TargetData} (Status: ${res.status})`
        );
      }
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Request to fetch ${TargetData} failed:`, error);
    return null; // Return null instead of re-throwing
  }
};
