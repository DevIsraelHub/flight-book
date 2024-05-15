// "use client";

// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper as SwiperType } from "swiper";
// import { Autoplay, Navigation } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/pagination';

// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { heroImages, siteConfig } from "@/constant";
// import Image from "next/image";


// const HeroCarousel = () => {
//   const swiperRef = useRef<SwiperType>();

//   return (
//     <div className="relative w-full h-[calc(100vh-80px)] lg:h-full flex items-center overflow-hidden overflow-x-auto flex-nowrap justify-between">
//       <div className="absolute w-full h-full top-0 bg-black/50 z-[2]" />
//       <Swiper
//         className="w-full h-full"
//         slidesPerView={1}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         navigation={true}
//         modules={[Autoplay, Navigation]}
//       >
//         {
//           heroImages.map((item, index) => (
//             <SwiperSlide key={index} className="w-full h-screen">
//               <Image
//                 src={item.image}
//                 width={4000}
//                 height={3000}
//                 // fill
//                 className="w-full h-full object-cover -z-10"
//                 alt={`${siteConfig} hero image`}
//               />
//             </SwiperSlide>
//           ))
//         }
//         {/* <div className="absolute top-[50%] z-10 flex items-center justify-center gap-x-3 pt-4">
//           <Button
//             size="icon"
//             onClick={() => swiperRef.current?.slidePrev()}
//           >
//             <ChevronLeft />
//           </Button>
//           <Button
//             size="icon"
//             onClick={() => swiperRef.current?.slideNext()}
//           >
//             <ChevronRight />
//           </Button>
//         </div> */}
//       </Swiper>
//     </div>
//   )
// }

// export default HeroCarousel