export type ProductCategory = "men's clothing" | "jewelery" | "electronics" | "women's clothing";
export interface ProductI {
  id: string;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
