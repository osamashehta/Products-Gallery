import CustomContainer from "@/shared/components/CustomContainer/CustomContainer";
import React from "react";
import { ProductI } from "@/features/products/types/products";
import Image from "next/image";
import Link from "next/link";
interface ProductCardProps {
  products: ProductI[];
}
const ProductCard = ({ products }: ProductCardProps) => {
  return (
    <CustomContainer className="py-[60px] w-full">
      <h3 className="text-[18px] font-bold text-[rgb(67 49 110)] my-2">
        {" "}
        Latest Products{" "}
      </h3>
      <div className="w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="min-h-[365px] rounded-[14px] bg-white  p-3"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-[300px]"
            />
            <h4 className="text-[16px] font-semibold text-[rgb(67 49 110)] my-3">
              {product.title}
            </h4>
          </Link>
        ))}
      </div>
    </CustomContainer>
  );
};

export default ProductCard;
