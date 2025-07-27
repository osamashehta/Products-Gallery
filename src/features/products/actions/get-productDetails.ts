"use client";
import apiService from "@/lib/axios";
export const getProductDetails = async (id: string) => {
  try {
    const response = await apiService({
      endPoint: `/products/${id}`,
      method: 'GET'
    });
    return response?.data;
  } catch (error) {
    console.error('Failed to fetch product details:', error);
  }
}