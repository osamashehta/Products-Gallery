import { getProducts } from "@/features/products/actions/get-products";
import Filter from "@/features/products/components/Filter/Filter";
import Hero from "@/features/products/components/Hero/Hero";
import ProductCard from "@/features/products/components/ProductCard/ProductCard";
import { ProductI } from "@/features/products/types/products";
import React from "react";
interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}
const page = async ({ searchParams }: PageProps) => {
  const data = await getProducts();
  console.log("Products data:", data);
  const { category, query } = await searchParams || {};
  console.log("query Params:",query);
  console.log("category Params:",category);

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
      const queryStr = Array.isArray(query) ? query[0] : query;
      return (
        item.title.toLowerCase().includes(queryStr?.toLowerCase() || "") ||
        item.description.toLowerCase().includes(queryStr?.toLowerCase() || "")
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
        <ProductCard products={data} />
      </div>
    </>
  );
};

export default page;
