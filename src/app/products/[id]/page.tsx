import { getProductDetails } from "@/features/products/actions/get-productDetails";
import Rating from "@/features/products/components/Rating/Rating";
import { ProductI } from "@/features/products/types/products";
import CustomContainer from "@/shared/components/CustomContainer/CustomContainer";
import Image from "next/image";
import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}
const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const data: ProductI = await getProductDetails(id);
  console.log("Product details data:", data);

  return (
    <CustomContainer className="my-[40px] grid grid-cols-1  lg:grid-cols-2 gap-4">
      <div className="w-full h-[360px] relative   ">
        <Image priority src={data?.image} alt={data?.title} fill />
      </div>
      <div className="flex flex-col justify-start items-start gap-4">
        <h1 className="text-[24px] font-bold text-[#44326F]">{data?.title}</h1>
        <p className="text-[16px] font-medium text-gray-600">
          {data?.description}
        </p>

        <Rating rate={data?.rating.rate} count={data?.rating.count} />
        <p className="text-[24px]  text-[#44326F]">$ {data?.price}</p>
        <p className="text-[16px] font-medium text-gray-600">
          {data?.category}
        </p>
      </div>
    </CustomContainer>
  );
};

export default page;
