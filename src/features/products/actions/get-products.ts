"use server";
import apiService from "@/lib/axios";
import { mockProducts } from "../data/mock-products";

// Function to make request with Cloudflare bypass techniques
const fetchWithCloudflareBypass = async () => {
  try {
    // Method 1: Use fetch with proper headers to mimic real browser
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        Referer: "https://google.com/",
        Origin: "https://google.com",
      },
      // Add timeout
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Direct fetch failed:", error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    // Try multiple methods in order of preference

    // Method 1: Try direct fetch with Cloudflare bypass
    try {
      const data = await fetchWithCloudflareBypass();
      console.log("✅ Direct fetch succeeded");
      return data;
    } catch (directError) {
      console.log("❌ Direct fetch failed, trying apiService...");
    }

    // Method 2: Try your existing API service
    try {
      const response = await apiService({
        endPoint: "/products",
        method: "GET",
      });
      console.log("✅ API service succeeded");
      return response?.data;
    } catch (apiError) {
      console.log("❌ API service failed, trying internal route...");
    }

    // Method 3: Try internal API route (if exists)
    try {
      const response = await fetch("/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("✅ Internal API succeeded");
        return data;
      }
    } catch (internalError) {
      console.log("❌ Internal API failed");
    }

    // Method 4: Fallback to mock data
    console.log("🔄 Using fallback mock data");
    return mockProducts;
  } catch (error) {
    console.error("All methods failed, using mock data:", error);
    return mockProducts;
  }
};
