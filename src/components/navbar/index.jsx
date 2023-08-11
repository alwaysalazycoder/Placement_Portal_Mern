import React, { useState } from "react";
import logo from "../../assets/logo/logo-1.png";
import avatar from "../../assets/avatar.avif";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full h-[10vh] text-base flex items-center justify-between  ">
        <div className="flex items-center justify-between w-fit gap-4 cursor-pointer">
          <img src={logo} alt="Logo" className="ml-4 w-10 h-10" />
          <p className="indie text-xl tracking-wide uppercase font-bold">
            codebox
          </p>
        </div>

        <ul className="gap-6  hidden md:flex">
          <li className="hover:scale-105 font-medium text-amber-500 hover:font-medium hover:text-amber-500">
            <a href="#">Home</a>
          </li>
          <li className="hover:scale-105 hover:font-medium hover:text-amber-500">
            <a href="#">Jobs</a>
          </li>
          <li className="hover:scale-105 hover:font-medium hover:text-amber-500">
            <a href="#">Practice</a>
          </li>
          <li className="hover:scale-105 hover:font-medium hover:text-amber-500">
            <a href="#">Contact Us</a>
          </li>
          <li className="hover:scale-105 hover:font-medium hover:text-amber-500">
            <a href="#">About Us</a>
          </li>
        </ul>

        <div className=" gap-2 cursor-pointer items-center justify-center px-4 md:flex hidden">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-[100px] h-10 w-10"
          />
        </div>
        <div
          className=" gap-2 cursor-pointer items-center justify-center px-4 md:hidden flex "
          onClick={() => setOpen(!open)}
        >
          <BiMenuAltRight className="w-10 h-10" />
        </div>
      </div>
      {open && (
        <motion.div
          className="absolute top-0 right-0 w-full h-[100vh] backdrop-blur-sm bg-[#2828268f] z-40 px-4 py-4"
          variants={{
            hidden: { opacity: 0, x: "-100px" },
            visible: { opacity: 1, x: "0" },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div
            className="w-full flex justify-end"
            onClick={() => setOpen(!open)}
          >
            <IoMdClose className="w-10 h-10 text-gray-200" />
          </div>

          <motion.ul className="gap-6  flex flex-col md:hidden text-white items-center mt-10 text-md mx-auto w-fit">
            <li className="hover:scale-105 font-medium text-amber-500 hover:font-medium hover:text-amber-500">
              <a href="#">Home</a>
            </li>
            <li className="hover:scale-105 hover:font-medium hover:text-amber-500">
              <a href="#">Jobs</a>
            </li>
            <li className="hover:scale-105 hover:font-medium hover:text-amber-500">
              <a href="#">Practice</a>
            </li>
            <li className="hover:scale-105 hover:font-medium hover:text-amber-500">
              <a href="#">Dashboard</a>
            </li>
            <li className="hover:scale-105 hover:font-medium hover:text-amber-500">
              <a href="#">Contact Us</a>
            </li>
            <li className="hover:scale-105 hover:font-medium hover:text-amber-500">
              <a href="#">About Us</a>
            </li>
          </motion.ul>

          <button className="mt-10 text-md border-[2px] border-amber-500 mx-auto font-medium block px-8 py-1 border-s-amber-400 text-amber-500 hover:scale-105 hover:bg-amber-500 hover:text-white transition-all">
            Login
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
