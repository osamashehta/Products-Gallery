"use client"
import { ProductI } from "../types/products";
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
interface HeroProps {
    gallerySwiper: ProductI[];
}
const Hero = ({ gallerySwiper }: HeroProps) => {
  return (
    <div>Hero</div>
  )
}

export default Hero