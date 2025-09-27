"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { TypeProject } from "../Types/types";

const projects: TypeProject = [
  {
    id: 1,
    category: "Next Js",
    title: "Portfile",
    description: "Next + Tailwind landing page",
    // image: "assets/project/",
    image: "/assets/project/Big2-ecommerc.png",
    link: "https://ahmed-alsayed.vercel.app/",
    github: "",
    tech: ["Next Js", "Tailwind css", "Frmamer Motion", "Ui shadcn."],
  },
  {
    id: 2,
    category: "React Js",
    title: "Big-Ecommerce",
    description: "React + Tailwind + Material Ui",
    image: "/assets/project/Big2-ecommerc.png",
    link: "https://big-ecommerce-cb675.web.app/",
    github: "https://github.com/AhmedAlsayed105/Big-e-comerice",
    tech: ["React", "Tailwind css", "Frmamer Motion"],
  },
  {
    id: 3,
    category: "React Js",
    title: "Smail-Ecommerce",
    description: "React + Tailwind landing page",
    image: "/assets/project/p-10.png",
    link: "https://ecomerc-eighthourd.web.app/",
    github: "https://github.com/AhmedAlsayed105/ecommerc-8hours",
    tech: ["React", "Tailwind css", "Material Ui"],
  },
  {
    id: 4,
    category: "JavaScript",
    title: "landing Page",
    description: "Html Css JavaScript",
    image: "/assets/project/Big2-ecommerc.png",
    link: "https://ahmedalsayed105.github.io/special-Design/",
    github: "https://github.com/AhmedAlsayed105/special-Design",
    tech: ["Html", "css", "JavaScript"],
  },
  {
    id: 5,
    category: "JavaScript",
    title: "Product_management",
    description: "Html Css JavaScript",
    image: "/assets/project/p-4.png",
    link: "https://ahmedalsayed105.github.io/Product_management/",
    github: "https://github.com/AhmedAlsayed105/Product_management",
    tech: ["Html", "Css", "JavaScript"],
  },
  {
    id: 6,
    category: "JavaScript",
    title: "youtub-clone",
    description: "React + Tailwind landing page",
    image: "/assets/project/p-11.png",
    link: "https://youtub-clone-1f141.web.app/",
    github: "https://github.com/AhmedAlsayed105/Youtub_colone",
    tech: ["Html", "Css", "JavaScript", "TypeScript"],
  },
  {
    id: 7,
    category: "React Js",
    title: "landing Page",
    description: "React + Tailwind landing page",
    image: "/assets/project/p-9.png",
    link: "https://ahmedalsayed105.github.io/Fylo-React/",
    github: "https://github.com/AhmedAlsayed105/Fylo-React",
    tech: ["React", "Tailwind css"],
  },
  {
    id: 8,
    category: "Html Css",
    title: "landing Page",
    description: "Html Css ",
    image: "/assets/project/p-6.png",
    link: "https://ahmedalsayed105.github.io/Templat_3/",
    github: "https://github.com/AhmedAlsayed105/Templat_3",
    tech: ["Html", "Css"],
  },
  {
    id: 9,
    category: "Html Css",
    title: "Html Css",
    description: "Html Css landing page",
    image: "/assets/project/p-7.png",
    link: "https://ahmedalsayed105.github.io/Templat_2/",
    github: "https://github.com/AhmedAlsayed105/Templat_2",
    tech: ["Html", "Css"],
  },
];

const categories = ["Html Css", "JavaScript", "React Js", "Next Js"];

export default function Work() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" },
      }}
      className="  flex items-center lg:py-8 xl:py-8"
    >
      <div className="container mx-auto w-full   flex flex-col justify-center ">
        {/* heading
         */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>
        {/* tabs */}

        <Tabs
          defaultValue="frontend"
          className="w-full flex flex-col gap-2 sm:gap-6 xl:gap-12"
        >
          <TabsList
            className="flex flex-wrap justify-center items-center gap-4
           mb-50 sm:mb-18 xl:mb-0 
           
          "
          >
            {categories.map((category, idx) => {
              return (
                <TabsTrigger
                  key={idx}
                  value={category}
                  className="capitalize  border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category === "JavaScript" ? "JavaScript" : category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabcontent */}
          <div>
            {categories.map((category, idx) => {
              return (
                <TabsContent key={idx} value={category}>
                  <Swiper>
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        console.log(project.image);
                        return (
                          <SwiperSlide key={project.id} className="   ">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              {/* project Info */}
                              <div className="w-full  max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                {/* title */}
                                <h3>{project.title}</h3>
                                {/* teach */}
                                <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                  <p className="my-2 ">Technologies Used</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, idx) => {
                                      return (
                                        <li
                                          key={idx}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-[18px] px-[10px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/* butns */}
                                <div>
                                  <Link href={project.link}>
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      Live Project
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              {/* project Img */}
                              <div
                                className="w-full h-[200px] md:h-[300px] xl:h-[350px]
                              relative bg-pink-50/10 order-1 
                              xl:order-none rounded-lg overflow-hidden"
                              >
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}
