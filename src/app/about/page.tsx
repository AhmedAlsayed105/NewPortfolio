"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Status from "../Component/ui/Status";
import Testimonial from "../Component/ui/Testimonial";
import Info from "../Component/ui/Info";
import Journey from "../Component/ui/Journey";
import Skills from "../Component/ui/Skills";
import Image from "next/image";
import Blog from "../Component/ui/Blog";
export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex itemss-center"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col  xl:flex-col 2xl:flex-row items-center gap-24 w-full  h-[680px]">
          {/* img & social icon */}
          <div className=" hidden xl:flex  w-full h-fit pt-1 max-w-[430px] relative">
            <div className="relative  ">
              <Blog containerStyles="w-[460px] h-[460px] " />
              <Image
                width={300}
                height={300}
                alt="my-photo"
                src="/assets/ahmed.png"
                className="absolute top-[12px] left-[100px]"
              />
              <div
                className="absolute w-full h-[164px]  bottom-0 #0D091A
              right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/0"
              ></div>
            </div>
          </div>
          {/* scroll area */}
          <ScrollArea className="max-w-[500px] h-[580px]  ">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Ahmed</span>
              </h2>
              <p className="max-w-[540px] mb-12 ">
                I focus on crafting visually stunning, user-friendly web
                experiences that not only look great but also function
                seamlessly, ensuring every detail is carefully designed and
                executed.
              </p>
              <div className="flex flex-col items-start gap-16">
                <Status />
                <Testimonial />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
}
