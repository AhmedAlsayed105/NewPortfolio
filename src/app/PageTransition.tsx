"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
type Iprop = {
  children: ReactNode;
};
export default function PageTransition({ children }: Iprop) {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        //  exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" }}}
        className="min-h-screen w-full  top-20  container absolute right-0 sm:left-0  "
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
