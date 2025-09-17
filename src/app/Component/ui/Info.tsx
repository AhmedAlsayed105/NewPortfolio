import Link from "next/link";
import React from "react";
import { HiOutlinePhone, HiOutlineUser } from "react-icons/hi";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

export default function Info() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-[28px] flex items-start gap-4">
            <HiOutlineUser className="text-2xl mt-1 text-accent" />
          </div>
          <div>
            <p className="text-lg">Data of Birth</p>
            <p>10 May 2001</p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-[28px] flex items-start gap-4">
            <MdOutlineEmail className="text-2xl mt-1 text-accent" />
          </div>
          <div>
            <Link href={"mailto:ahmedalsayedissa@gmail.com"}>
              <p className="text-lg">Email Address</p>
              <p>ahmedalsayed@gmil.com</p>
            </Link>
          </div>
        </div>
      </div>
      {/*  two */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10 justify-between">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-[28px] flex items-start gap-4">
            <HiOutlinePhone className="text-2xl mt-1 text-accent" />
          </div>
          <Link href={"http://wa.me/+2001119561901"}>
            <p className="text-lg">Phone</p>
            <p>01119561901</p>
          </Link>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-[28px] flex items-start gap-4">
            <MdOutlineLocationOn className="text-2xl mt-1 text-accent" />
          </div>
          <div className="">
            <p className="text-lg">Location</p>
            <p>South Sain El tur,Egypt </p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
