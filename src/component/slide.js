import React from "react";
import myImage from './bg.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slide() {
  return (
    <>
       <br/>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mt-[3.9vh] lg:mt-6 mySwiper h-[20vh] lg:h-auto  md:h-auto  sm:h-auto w-full"
      >
        <SwiperSlide><img
        src={myImage}
        className="block w-full lg:h-[88vh]"
        alt="..." /></SwiperSlide>
        <SwiperSlide><img
        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
        className="block w-full lg:h-[88vh]"
        alt="..." /></SwiperSlide>
        <SwiperSlide><img
        src={myImage}
        className="block w-full lg:h-[88vh]"
        alt="..." /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
