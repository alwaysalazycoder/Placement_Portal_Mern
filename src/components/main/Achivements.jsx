import { animate } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Reveal from "../../utils/Reveal";
const Achivements = () => {
  let companiesCount = useRef(null);
  let successCount = useRef();
  let usersCount = useRef();

  const animationCompaniesCount = () => {
    animate(0, 360, {
      duration: 1,
      onUpdate: (v) => (companiesCount.current.textContent = v.toFixed()),
    });
  };
  const animationUsersCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (usersCount.current.textContent = v.toFixed()),
    });
  };
  const animationSuccessCount = () => {
    animate(0, 90, {
      duration: 1,
      onUpdate: (v) => (successCount.current.textContent = v.toFixed()),
    });
  };

  return (
    <div className='pt-44 w-full md:px-10 h-[110vh] text-white bg-cover bg-black-400 bg-[url("https://firebasestorage.googleapis.com/v0/b/hostel-entry-system.appspot.com/o/wave-haikei%20(1).svg?alt=media&token=d54835c9-f0d9-4cd7-9216-3e0f8d6d4be3")]  md:bg-[url("https://firebasestorage.googleapis.com/v0/b/hostel-entry-system.appspot.com/o/wave-haikei.svg?alt=media&token=d3987a48-4687-4ac4-95a0-094f60dae8e6")] '>
      <Reveal>
        <h1 className="md:text-xxxxl text-[42px] md:pl-20 md:my-10 mb-4 overpass font-bold px-10">
          Elevate your experience :{" "}
        </h1>
        <h1 className="md:text-xxxl text-xl leading-snug md:pl-20 px-10">
          {" "}
          "Here's Why We're Your Top Choice!"
        </h1>
      </Reveal>
      <Reveal></Reveal>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-16 md:w-[85%] w-full mx-auto h-fit  md:h-[50%] mt-28 tracking-tight bg-black-200 pb-20 px-12">
        <Reveal>
          <div className="">
            <button
              type="button"
              className="uppercase py-2 px-4  text-xs font-medium text-gray-600 focus:outline-none bg-black-200 rounded-full border-[3px] border-gray-600 tracking-wide cursor-pointer"
            >
              Companies
            </button>

            <p>
              <motion.span
                className="text-[120px] yellow-orange font-semibold mt-2  tracking-tighter"
                ref={companiesCount}
                whileInView={animationCompaniesCount}
              ></motion.span>
              <span className=" text-[120px] yellow-orange font-semibold mt-2  tracking-tighter">
                +
              </span>
            </p>

            <p className=" mt-4 text-md">
              {" "}
              Over 360+ companies has listed their opening on our platform.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="">
            <button
              type="button"
              className="uppercase py-2 px-4  text-xs font-medium text-gray-600 focus:outline-none bg-black-200 rounded-full border-[3px] border-gray-600 tracking-wide cursor-pointer"
            >
              Users
            </button>

            <p>
              <motion.span
                className="text-[120px] yellow-orange font-semibold mt-2  tracking-tighter"
                ref={usersCount}
                whileInView={animationUsersCount}
              ></motion.span>
              <span className=" text-[120px] yellow-orange font-semibold mt-2  tracking-tighter">
                k+
              </span>
            </p>

            <p className=" mt-4 text-md">
              {" "}
              Over 0.1 million students has been registered over our platform.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="">
            <button
              type="button"
              className="uppercase py-2 px-4  text-xs font-medium text-gray-600 focus:outline-none bg-black-200 rounded-full border-[3px] border-gray-600 tracking-wide cursor-pointer"
            >
              Success Ratio
            </button>

            <p>
              <motion.span
                className="text-[120px] yellow-orange font-semibold mt-2  tracking-tighter"
                ref={successCount}
                whileInView={animationSuccessCount}
              ></motion.span>
              <span className=" text-[120px] yellow-orange font-semibold mt-2  tracking-tighter">
                %
              </span>
            </p>
            <p className=" mt-4 text-md">
              {" "}
              Over 360+ students have an average packgage of more than 14+ LPA
              on our platform.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Achivements;
