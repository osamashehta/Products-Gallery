"use client";
import CustomContainer from "@/shared/components/CustomContainer/CustomContainer";
import { useRouter } from "next/navigation";
import React from "react";

const Filter = () => {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("all");
  const router = useRouter();
  const handleFilter = () => {
    if (query) {
      router.push(`/?query=${query}`);
    }

    if (category && category !== "all") {
      router.push(`/?category=${category}`);
    }
  };
  return (
    <CustomContainer className="    my-[80px] grid grid-cols-6 gap-10 w-full ">
      <div className="search  h-[55px] col-span-6 lg:col-span-4 bg-[#F2F2F2] rounded-[9px]">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-full h-full px-4 focus:outline-none "
        />
      </div>
      <div className="filter h-[55px] col-span-6 lg:col-span-2 bg-[#F2F2F2] rounded-[9px] flex items-center justify-between px-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-transparent border-none focus:outline-none"
        >
          <option value="all">All</option>
          <option value="women&apos;s clothing">women's clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">jewelery</option>
          <option value="men&apos;s clothing">men's clothing</option>
        </select>
        <button
          onClick={() => handleFilter()}
          className="bg-[#0070f3] text-white rounded-md px-4 py-2 cursor-pointer hover:bg-[#005bb5] transition-colors duration-300"
        >
          Apply
        </button>
      </div>
    </CustomContainer>
  );
};

export default Filter;
