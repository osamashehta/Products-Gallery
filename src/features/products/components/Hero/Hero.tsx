"use client";
import { ProductI } from "../../types/products";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
interface HeroProps {
  gallerySwiper: ProductI[];
}
const Hero = ({ gallerySwiper }: HeroProps) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper w-full h-dvh bg-gradient-to-b from-white to-[#E3E6E6]"
    >
      {gallerySwiper.map((slide) => (
        <SwiperSlide key={slide.id} className="relative w-full h-full">
          <Link
            href={`/products/${slide.id}`}
            className="block w-full h-full relative"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
