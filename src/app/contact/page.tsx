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
import Link from "next/link";
import { useRef, useState } from "react";
import { FormData } from "../Types/types";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  // tostar
  const showToastMessageSuccess = () => {
    toast.success("Done sent successfully !", {
      position: "top-right",
    });
  };
  const showToastMessageErro = () => {
    toast.error("You are not connected to the Internet!", {
      position: "top-right",
    });
  };
  // form data
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const form = useRef<HTMLFormElement>(null);

  console.log(formData);
  // handelChane
  const handelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handeSubmite
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_k8l7iqs", // EmailJS
        "template_imxb39m", // EmailJS
        form.current,
        "3xRDPQDY0MsbvymF7" // EmailJS
      )
      .then(
        () => {
          showToastMessageSuccess();
          form.current?.reset();
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        () => {
          showToastMessageErro();
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0 "
    >
      <ToastContainer
        position="top-right"
        autoClose={3000} // مدة ظهور التوست بالمللي ثانية
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: "320px", height: "60px" }}
      />
      <div
        className="container mx-auto w-full  flex flex-col items-center mt-50 s
      justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible"
      >
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-8">
            {/* txte info */}
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
              <div>
                <h2 className="h2 mb-6">
                  Get In <span className=" text-accent">Touch</span>
                </h2>
                <p className="max-w-[460px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque, magnam!
                </p>
              </div>
              {/* content */}
              <div className="flex flex-col gap-4 MB-6">
                <div className="flex  flex-row gap-2 items-center ">
                  <HiOutlineMail className="text-accent" />
                  <Link href={"mailto:ahmedalsayedissa@gmail.com"}>
                    <p>ahmedalsayed@gmil.com</p>
                  </Link>
                </div>
                <div className="flex  flex-row gap-2 items-center ">
                  <HiOutlinePhone className=" text-accent" />
                  <Link href={"http://wa.me/+2001119561901"}>
                    <p>01119561901</p>
                  </Link>
                </div>
                <div className="flex  flex-row gap-2 items-center ">
                  <HiOutlineMapPin className="text-accent" />
                  <p>South Sain El tur,Egypt </p>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="flex-1">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col xl:flex-row gap-3 w-full ">
                  <div className=" w-full mb-6">
                    <Label htmlFor="firstName" className="text-accent">
                      <span className="text-white mb-2 cursor-pointer ">
                        FirstName
                      </span>{" "}
                      *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handelChange}
                      placeholder="FirstName"
                      required
                    />
                  </div>
                  <div className="w-full mb-6">
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
                      value={formData.lastName}
                      onChange={handelChange}
                      required
                    />
                  </div>
                </div>
                {/* email */}
                <div className="w-full mb-6">
                  <Label htmlFor="Email" className="text-accent">
                    <span className="text-white mb-2 cursor-pointer ">
                      Email
                    </span>{" "}
                    *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="yourEmail@gmail.com"
                    value={formData.email}
                    onChange={handelChange}
                    required
                  />
                </div>
                {/* select */}
                <div className="w-full mb-6">
                  <Label htmlFor="name" className="">
                    {"I'm interested in"}
                    <span className="text-accent">* </span>
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
                <div className="w-full mb-6">
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
                    value={formData.message}
                    onChange={handelChange}
                  />
                </div>
                {/* btn */}
                <button type="submit" className="btn btn-lg btn-accent my-6">
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
