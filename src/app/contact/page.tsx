"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0 "
    >
      <div
        className="container mx-auto w-full  flex flex-col items-center
      justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible"
      >
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-4">
            {/* txte info */}
            <div>info text</div>
            {/* form */}
            <div className="flex-1">
              <form>
                <div className="flex flex-col xl:flex-row gap-6 w-full ">
                  <div className=" w-full mb-3">
                    <Label htmlFor="firstName" className="text-accent">
                      <span className="text-white mb-2 cursor-pointer ">
                        FirstName
                      </span>{" "}
                      *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="FirstName"
                      required
                    />
                  </div>
                  <div className="w-full mb-3">
                    <Label htmlFor="lastName" className="text-accent">
                      <span className="text-white mb-2 cursor-pointer ">
                        LastName
                      </span>{" "}
                      *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="LastName"
                      required
                    />
                  </div>
                </div>
                {/* email */}
                <div className="w-full mb-3">
                  <Label htmlFor="Email" className="text-accent">
                    <span className="text-white mb-2 cursor-pointer ">
                      Email
                    </span>{" "}
                    *
                  </Label>
                  <Input
                    id="Email"
                    name="Email"
                    placeholder="yourEmail@gmail.com"
                    required
                  />
                </div>
                {/* select */}
                <div className="w-full">
                  <Label htmlFor="name" className="">
                    I'm interested in <span className="text-accent">* </span>
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="service"
                      className="w-full !h-12 bg-white/5 border-white/10 px-4"
                    >
                      <SelectValue placeholder="Choose her" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="webdev">Web Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* text area */}
                <div className="w-full">
                  <Label htmlFor="name" className="text-accent">
                    <span className="text-white mb-2 cursor-pointer ">
                      Message
                    </span>
                    *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    className="min-h-[160px] bg-white/5 border-white/10
                    focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4
                    selection:bg-accent placeholder:text-white/50
                    "
                  ></Textarea>
                </div>
                {/* btn */}
                <button className="btn btn-lg btn-accent my-6">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Send message</span>
                    <HiOutlineArrowLongRight className="text-xl" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
