import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = await cookies();

    // Clear auth cookies
    cookieStore.delete("access_token");
    cookieStore.delete("refresh_token");

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Logout error:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to process logout",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
