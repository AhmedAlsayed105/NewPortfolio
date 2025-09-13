import { delay, motion } from 'framer-motion'
import React from 'react'

const rectangleVarients = {
	// initial:{
	// 	y:"-100%",
	// 	height : "100%"
	// },
	// animate : {
	// 	y : "0%",
	// 	height : "0%"
	// },
	// exit : {
	// 	y  :["0%","100%"],
	// 	height  :["0%","100%"]
	// }
	initial: {
		y: "-100%",   // يبدأ من تحت
		height: "100%",
	  },
	  animate: {
		y: "0%",     // يطلع لفوق لحد ما يغطي الشاشة
		height: "0%",
	  },
	  exit: {
		y: ["0%", "-100%"], // يختفي لفوق
		height: ["0","100%"],
	  },
	
}

export default function Rectangle() {
  return (
	<>
	 <motion.div
        variants={rectangleVarients}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
		  delay: 0,
		duration: 0.30,
		ease: [0.76, 0, 0.24, 1], 
        }}
        className="fixed top-full  w-screen h-screen z-30 bg-[#1b162b]" //bg-[#1b162b]
      />

      <motion.div
        variants={rectangleVarients}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
		 delay: 0.15,
          duration:0.35,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="fixed top-full  w-screen h-screen z-20 bg-[#2e2743]" //
      />
       <motion.div
        variants={rectangleVarients}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
		 delay: 0.20,
          duration:0.40,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full  w-screen h-screen z-20 bg-[#241e36]" //
      />
      <motion.div
        variants={rectangleVarients}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
		 delay: 0.30,
          duration:0.45,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full  w-screen h-screen z-10 bg-[#2e2743]"
      /> 
	</>
  )
}
