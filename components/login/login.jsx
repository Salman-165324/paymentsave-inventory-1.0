"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { loginSchema } from "@/app/schemas/auth";

export default function LoginPage() {
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize form with Conform
  const [form, fields] = useForm({
    id: "login-form",
    onValidate: ({ formData }) => {
      return parseWithZod(formData, { schema: loginSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  // Show/hide password state
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError("");

    // Get form data and validate
    const formData = new FormData(e.currentTarget);
    const submission = parseWithZod(formData, { schema: loginSchema });

    // If client-side validation fails, don't proceed
    if (submission.status !== "success") {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission.value),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle server validation errors from Zod
        if (response.status === 400 && data.errors) {
          // Update form with server validation errors
          form.update({
            id: form.id,
            errors: data.errors,
            status: "error",
          });
          setServerError(data.message || "Validation failed");
        } else {
          // Handle API errors
          setServerError(data.message || "Authentication failed");
        }
      } else {
        // Successful login
        const redirectPath = searchParams.get("redirect");
        router.push(redirectPath || "/dashboard");
      }
    } catch (error) {
      console.error("Login request failed:", error);
      setServerError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:w-1/2 bg-gray-50">
        <div className="mb-6 px-4">
          <Image
            src="/image/color-logo.png"
            alt="Paymentsave Logo"
            width={300}
            height={100}
            priority
            className="max-w-full h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4 md:p-0">
        <div className="mb-6">
          <Image
            src="/image/color-icon-logo.png"
            alt="Paymentsave Icon"
            width={48}
            height={48}
            priority
          />
        </div>

        <div className="w-full max-w-sm px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center">
            Log in to your account
          </h2>
          <p className="mt-2 text-center text-gray-500 text-sm md:text-base">
            Welcome back! Please enter your details.
          </p>

          {serverError && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
              {serverError}
            </div>
          )}

          <form
            id={form.id}
            onSubmit={handleSubmit}
            className="mt-6 space-y-4"
            noValidate
          >
            <div>
              <label htmlFor={fields.email.id} className="block text-sm mb-1">
                Email
              </label>
              <input
                id={fields.email.id}
                type="email"
                name={fields.email.name}
                className={`w-full border rounded-md p-2 ${
                  fields.email.errors ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
                aria-invalid={Boolean(fields.email.errors)}
                aria-describedby={fields.email.errorId}
              />
              {fields.email.errors?.length > 0 && (
                <div
                  id={fields.email.errorId}
                  className="mt-1 text-sm text-red-600"
                >
                  {fields.email.errors.map((error) => (
                    <p key={error}>{error}</p>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor={fields.password.id}
                className="block text-sm mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id={fields.password.id}
                  type={showPassword ? "text" : "password"}
                  name={fields.password.name}
                  className={`w-full border rounded-md p-2 pr-10 ${
                    fields.password.errors
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your password"
                  aria-invalid={Boolean(fields.password.errors)}
                  aria-describedby={fields.password.errorId}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {fields.password.errors?.length > 0 && (
                <div
                  id={fields.password.errorId}
                  className="mt-1 text-sm text-red-600"
                >
                  {fields.password.errors.map((error) => (
                    <p key={error}>{error}</p>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={fields.remember.name}
                  className="border rounded"
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md mt-2 flex justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </div>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
