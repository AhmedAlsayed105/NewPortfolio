"use client";

import { CiMenuFries } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLink from "./NavLink";
import Logo from "../Header/Logo";
import { MdFileDownload } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Socials from "../ui/Socials";

export default function NavMobile() {
  const pathName = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  // كل ما يتغير المسار → يقفل الـ Sheet
  useEffect(() => {
    setOpen(false);
  }, [pathName]);
  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="lg:hidden text-[35px] cursor-pointer text-white ">
          <CiMenuFries className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent
          className="w-[300px] sm:w-[350px]
                  bg-primary border-none 
                    flex-col justify-between items-center 
                    pt-16 pb-20 "
          side="left"
        >
          <SheetHeader className="flex items-center">
            <Logo />

            <NavLink containerStyles="flex flex-col gap-8 max-w-[100px] mb-10" />

            <Link href="/assets/AhmedAlsayed_Front_end (1).pdf">
              <button className="btn btn-lg btn-teriary mb-16">
                <div className="flex items-center gap-3 bg-accent p-[10px] rounded-full ">
                  <span>Download CV</span>
                  <MdFileDownload className="text-xl" />
                </div>
              </button>
            </Link>
          </SheetHeader>
          <Socials
            containerStyle="xl:hidden z-50 flex 2xl:flex-col gap-6 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-[-40px] 2xl:transform 2xl:translate-x-1/2 2xl:-translate-y-1/2  "
            iconStyle="bg-accent text-white hover:bg-accent-hover transition w-[38px] h-[38px] 
           text-[22px] flex items-center justify-center rounded-full corsor-pointer "
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}
