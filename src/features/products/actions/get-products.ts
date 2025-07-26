"use server"
import apiService from "@/lib/axios";
export const getProducts = async () => {
  try {
    const response = await apiService({
      endPoint: '/products',
      method: 'GET'
    });
    return response?.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
};