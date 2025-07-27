import { getProducts } from "@/features/products/actions/get-products";
import Filter from "@/features/products/components/Filter/Filter";
import Hero from "@/features/products/components/Hero/Hero";
import ProductCard from "@/features/products/components/ProductCard/ProductCard";
import { ProductI } from "@/features/products/types/products";
import React from "react";

// Enable ISR - page will be regenerated every hour
export const revalidate = 3600;

interface PageProps {
  searchParams?: Promise<{ [key: string]: string  | undefined }>;
}

const page = async ({ searchParams }: PageProps) => {
  const data = await getProducts();
  console.log("Products data:", data);

  // Await searchParams since it's now a Promise in Next.js 15
  const resolvedSearchParams = await searchParams;
  const { category, query } = resolvedSearchParams || {};
  console.log("query Params:", query);
  console.log("category Params:", category);

  const categories = [
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
  ];
  const gallerySwiper = categories?.map((category) =>
    data?.find((item: ProductI) => item.category === category)
  );
  const filteredProducts = data?.filter((item: ProductI) => {
    if (category && category !== "all") {
      return item.category === category;
    }
    if (query) {
      return (
        item.title.toLowerCase().includes(query?.toLowerCase() || "") ||
        item.description.toLowerCase().includes(query?.toLowerCase() || "")
      );
    }
    return data;
  });

  console.log("Gallery Swiper data:", gallerySwiper);

  if (!data) {
    return (
      <div className="flex justify-center items-center text-shadow-amber-500 text-[24px] w-full h-dvh">
        No products available
      </div>
    );
  }

  return (
    <>
      <Hero gallerySwiper={filteredProducts} />
      <Filter />
      <div className="w-full bg-[#E3E6E6]">
        <ProductCard products={filteredProducts} />
      </div>
    </>
  );
};

export default page;
