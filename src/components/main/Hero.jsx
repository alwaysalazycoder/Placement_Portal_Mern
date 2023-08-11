import React from "react";
import hero from "../../assets/hero-section.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgShapeCircle } from "react-icons/cg";
import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className=" text-base w-full h-[90vh] relative md:flex-col">
      <div className="w-full h-[90vh] flex flex-col-reverse bg-white py-10 md:items-center justify-center md:flex  md:flex-row md:h-[90%]">
        <motion.div
          className="md:w-[50%] w-full px-10 font-normal "
          initial={{
            x: "-100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            delay: 1,
          }}
        >
          <p className="text-xxxxl mb-8 leading-tight">
            Bridging the{" "}
            <span className="text-amber-500 font-medium">"Gap" </span>{" "}
          </p>

          <p className=" mb-8 text-lg">
            {" "}
            Linking Talent, Colleges, and Recruiters.
          </p>

          <p>
            {" "}
            Our innovative app serves as a dynamic platform that seamlessly
            connects students, colleges, and recruiters. With a focus on
            learning essential skills and practicing interview techniques,
            students can confidently step into the professional world.{" "}
          </p>
        </motion.div>
        <motion.div
          className="md:w-[40%] w-full h-full reveal-image"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        >
          {/* <img src={hero} alt="Hero section" /> */}
        </motion.div>
      </div>

      <div className="w-full flex justify-center">
        <MdKeyboardArrowDown className="w-12 h-12 text-amber-500 animate-bounce" />
      </div>

      <div className="absolute top-[420px] left-10 animate-pulse md:block hidden">
        <CgShapeCircle className=" text-gray-500" />
        <CgShapeCircle className=" text-gray-500" />
        <CgShapeCircle className=" text-gray-500" />
      </div>
      <div className="absolute top-[120px] right-10 animate-pulse ">
        <CgShapeCircle className=" text-gray-500" />
        <CgShapeCircle className=" text-gray-500" />
        <CgShapeCircle className=" text-gray-500" />
      </div>
    </div>
  );
};

export default Hero;
