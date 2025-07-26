import { getProducts } from "@/features/products/actions/get-products";
import Hero from "@/features/products/components/Hero/Hero";
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
  const gallerySwiper = categories.map((category) =>
    data?.find((item: ProductI) => item.category === category)
  );

  console.log("Gallery Swiper data:", gallerySwiper);

  return (
    <>
      <Hero gallerySwiper={gallerySwiper} />
    </>
  );
};

export default page;
