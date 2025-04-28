export const getCategoryData = async () => {
  // Define what type of data we're fetching for error messages and logging
  const TargetData = "Product Category";
  try {
    // Construct the API endpoint URL using environment variable
    // const timestamp = Date.now(); // Commented out timestamp for cache busting
    const url = `${process.env.BASE_URL}api/v1/inventory/web/product-category/`;

    // Make the API request
    const res = await fetch(url);

    // Check if the response is successful
    if (!res.ok) {
      console.log(`HTTP Error: ${res.status}`);

      // Get response details for better error handling
      const contentType = res.headers.get("Content-Type");
      const errorBody = await res.text();

      // Handle JSON error responses
      if (contentType?.includes("application/json")) {
        try {
          // Parse the JSON error body
          const errorJson = JSON.parse(errorBody);

          // Extract meaningful error message from various possible fields
          const errorMessage =
            errorJson?.message ||
            errorJson?.error ||
            errorJson?.detail ||
            errorJson?.description ||
            `Failed to fetch ${TargetData} (Status: ${res.status})`;

          // Throw with the most descriptive error message available
          throw new Error(errorMessage);
        } catch (parseError) {
          // Handle case where the response claimed to be JSON but couldn't be parsed
          console.log(
            `Failed to parse error JSON for ${TargetData}:`,
            parseError
          );
          throw new Error(
            `Failed to fetch ${TargetData} (Status: ${res.status})`
          );
        }
      } else {
        // Handle non-JSON error responses
        console.log(`Error body for: ${TargetData}`, errorBody);
        throw new Error(
          `Failed to fetch ${TargetData} (Status: ${res.status})`
        );
      }
    }

    // Successfully got response, parse JSON data
    const data = await res.json();
    return data;
  } catch (error) {
    // Catch and log any errors in the entire fetch process
    console.error(`Request to fetch ${TargetData} failed:`, error);
    return null; // Return null instead of re-throwing to prevent app crashes
  }
};
