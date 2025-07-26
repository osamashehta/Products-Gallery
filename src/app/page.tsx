import { getProducts } from "@/features/products/actions/get-products";
import Hero from "@/features/products/components/Hero/Hero";
import ProductCard from "@/features/products/components/ProductCard/ProductCard";
import { ProductI } from "@/features/products/types/products";
import React from "react";

const page = async () => {
  const data = await getProducts();
  console.log("Products data:", data);

  // Extract one product from each category
  const categories = [
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
  ];
  const gallerySwiper = categories?.map((category) =>
    data?.find((item: ProductI) => item.category === category)
  );

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
      <Hero gallerySwiper={gallerySwiper} />
      <div className="w-full bg-[#E3E6E6]">
        <ProductCard products={data} />
      </div>
    </>
  );
};

export default page;
