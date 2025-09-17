"use client";
import { motion } from "framer-motion";
import Blog from "./Component/ui/Blog";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward, MdFileDownload } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import Link from "next/link";
import Pattern from "./Component/ui/Pattern";
import Socials from "./Component/ui/Socials";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      {/*Start Blog Text */}
      <Pattern />
      <div className="flex relative  flex-col xl:flex-row items-center justify-between gap-1 w-fit ">
        <div className=" xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left ">
          <h1 className="h1 flex-1 mb-[28px]">
            Hi! I&apos;m Ahmed
            <br />
            <TypeAnimation
              sequence={["web Developer", 4000, "Front end ", 4000]}
              wrapper="span"
              speed={40}
              className="text-accent "
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w[400px] container  mb-[44px]">
            I build visually captivating, user-friendly websites and web apps
            that transform your ideas into seamless, engaging digital
            experiences.
          </p>
          <Link href="/assets/AhmedAlsayed-FrontEnd.pdf">
            <button className="btn btn-lg btn-teriary mb-16 py-2">
              <div className="flex items-center gap-3 bg-accent p-[10px] rounded-full ">
                <span>Download CV</span>
                <MdFileDownload className="text-xl" />
              </div>
            </button>
          </Link>
          {/* start contact Info */}
          <div className="flex flex-col md:flex-row  gap-2 mb-6">
            <Link
              href={"http://wa.me/+2001119561901"}
              className="flex gap-3 items-center"
            >
              <LuPhoneCall className="xl text-accent" />
              <span>01119561901</span>
            </Link>
            <Link
              href={"mailto:ahmedalsayedissa@gmail.com"}
              className="flex gap-3  items-center"
            >
              <CgMail className="xl text-accent  " />
              <span>ahmedalsayed@gmail.com</span>
            </Link>
          </div>
          {/* Socials  */}
          <Socials
            containerStyle="xl:hidden z-50 flex 2xl:flex-col gap-6 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-[-40px] 2xl:transform 2xl:translate-x-1/2 2xl:-translate-y-1/2  "
            iconStyle="bg-accent text-white hover:bg-accent-hover transition w-[30px] h-[30px] xl:w-[38px] xl:h-[38px] 
            text-[22px] flex items-center justify-center rounded-full corsor-pointer "
          />
          {/* Socials  */}
          {/* end contact Info */}
        </div>
        {/*End Blog Text */}
        {/*Start Blog Image */}
        <div className="hidden xl:block  flex-1 relative z-20">
          <Blog containerStyles="w-[460px] h-[460px]" />
          <Image
            width={300}
            height={300}
            alt="my-photo"
            src="/assets/ahmed.png"
            className="absolute top-[12px] left-[100px]"
          />
          <div
            className="absolute w-full h-[164px] bottom-0 #0D091A
            right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/0"
          ></div>
        </div>
        {/*End Blog Image */}
      </div>
    </motion.section>
  );
}
