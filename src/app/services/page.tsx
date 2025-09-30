"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
//
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import { MdOutlineArrowOutward, MdArrowRightAlt } from "react-icons/md";
import { TypeServices } from "../Types/types";

const services: TypeServices = [
  {
    icon: "/assets/services/frontend.svg",
    herf: "",
    title: "Frontend Development",
  },
  {
    icon: "/assets/services/design.svg",
    herf: "",
    title: "Website Interface Design",
  },
  {
    icon: "/assets/services/seo.svg",
    herf: "",
    title: "Search Engine Optimization",
  },
];

export default function Services() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center "
    >
      <div className="container mx-auto  flex flex-col sm:justify-center gap-16  max-w-[1000px] h-screen">
        {/* Text */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8  max-w-[1000px] ">
          <h2 className="h2 max-w-[480px]  text-left xl:mb-0">
            Custom <span className="text-accent">Web Solutions</span> to Boost
            Your Business
          </h2>
          <button className="btn btn-lg btn-accent flex gap-2">
            All Services <MdArrowRightAlt />
          </button>
        </div>
        {/* Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="max-w-[1000px] h-[320px]"
        >
          {services.map((service, idx) => {
            const { icon, title } = service;
            return (
              <SwiperSlide key={idx}>
                <div className="w-full bg-secondary/90 h-[285px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-between  ">
                  <div className="flex items-center justify-between mb-12">
                    <Image src={icon} width={48} height={48} alt="ImgaSlider" />
                    <div
                      className="w-12 h-12 bg-accent rounded-full
                    flex items-center justify-center cursor-pointer text-2xl hover:rotate-45 transition-all
                    "
                    >
                      <MdOutlineArrowOutward />
                    </div>
                  </div>
                  <h5 className="text-[22px] font-medium max-w-[240px]">
                    {title}
                  </h5>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
}
