"use client";

import { motion } from "framer-motion";

export default function Work() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" },
      }}
    >
      Work
    </motion.section>
  );
}
