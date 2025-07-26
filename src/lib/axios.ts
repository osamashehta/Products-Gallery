import axios from "axios";
import { toast } from "react-toastify";
interface LoaderProps {
  endPoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: unknown;
}
const Loader = async ({ endPoint, method = "GET", data }: LoaderProps) => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        const { status, data } = error.response;
        switch (status) {
          case 400:
            console.log(data);
            toast.error(data.message || "Bad request.");
            break;
          case 401:
            console.log(data);
            toast.error(
              data.message || "Unauthorized access. Please log in again."
            );
            break;
          case 403:
            console.error(data);
            toast.error(data.message || "Forbidden access");
            break;
          case 404:
            console.log(data);
            toast.error(data.message || "Resource not found.");
            break;
          case 500:
            console.error(data);
            toast.error(data.message || "Server error");
            break;
          default:
            console.log(data);
            toast.error(data.message || "An unexpected error occurred.");
        }
      }
      console.error(`${method} Error for:`, endPoint, error.message);
      return Promise.reject(error);
    }
  );

  try {
    switch (method) {
      case "GET":
        return await api.get(endPoint);
      case "POST":
        return await api.post(endPoint, data);
      case "PUT":
        return await api.put(endPoint, data);
      case "DELETE":
        return await api.delete(endPoint);
      default:
        throw new Error(`Unsupported method: ${method}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export default Loader;
