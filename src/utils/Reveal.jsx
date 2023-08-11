import React from "react";
import { delay, motion } from "framer-motion";

const Reveal = ({ children }) => {
  return (
    <div className="relative w-fit h-fit overflow-hidden">
      <motion.div variants={{
        hidden:{opacity:0,y:75},
        visible:{opacity:1,y:0},
      }}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5,delay:0.25}}
      
      >{children}</motion.div>
    </div>
  );
};

export default Reveal;
