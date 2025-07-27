import axios from "axios";
interface apiServiceProps {
  endPoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: unknown;
}
const apiService = async ({
  endPoint,
  method = "GET",
  data,
}: apiServiceProps) => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
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
            console.log("Bad Request:", data);
            break;
          case 401:
            console.log("Unauthorized:", data);
            break;
          case 403:
            console.error("Forbidden:", data);
            break;
          case 404:
            console.log("Not Found:", data);
            break;
          case 500:
            console.error("Server Error:", data);
            break;
          default:
            console.log(data);
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

export default apiService;
