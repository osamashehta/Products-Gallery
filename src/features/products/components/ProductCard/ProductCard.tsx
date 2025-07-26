import CustomContainer from "@/shared/components/CustomContainer/CustomContainer";
import React from "react";
import { ProductI } from "@/features/products/types/products";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
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
            <div className="flex items-center justify-between w-full ">
              <h4 className="text-[16px] font-semibold text-[rgb(67 49 110)] my-3">
                {product.title}
              </h4>
              <div className="rating shrink-0 flex items-center gap-1 text-[14px] font-medium text-[#9a8b38]">
                ({product.rating.rate}{" "}
                <Star fill="#FFD700" color="#FFD700" size={14} />)
              </div>
            </div>
          </Link>
        ))}
      </div>
    </CustomContainer>
  );
};

export default ProductCard;
