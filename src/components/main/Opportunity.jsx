import React from "react";
import Reveal from "../../utils/Reveal";
import { motion } from "framer-motion";
const Opportunity = () => {
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

  const animationOptions = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  let opportunities = [
    {
      key: "Practice",
      detail:
        "Sharpen your abilities and enhance your knowledge in our hands-on practice section. Get ready to learn by doing!",
      button: "Explore More",
    },
    {
      key: "Learn",
      detail:
        "Elevate your expertise in areas where you're seeking improvement through our targeted learning section. Bridge the gaps in your skillset.",
      button: "Explore More",
    },
    {
      key: "Test",
      detail:
        "Ready to put your skills to the test? Take on the challenge and showcase your expertise with our interactive skill assessment!",
      button: "Check Now",
    },
    {
      key: "Mentorships",
      detail:
        "Unlock your potential with personalized guidance in our mentorship section. ",
      button: "Book Now",
    },
  ];
  return (
    <div className='mt-[450px] md:mt-0 pt-72  w-full  h-fit text-black-200  bg-cover bg-black-400 md:bg-[url("https://firebasestorage.googleapis.com/v0/b/hostel-entry-system.appspot.com/o/layered-waves-haikei.svg?alt=media&token=04c39ad5-7e81-4a41-b714-eb52b80f9d30")]  bg-[url("https://firebasestorage.googleapis.com/v0/b/hostel-entry-system.appspot.com/o/layered-waves-haikei%20(1).svg?alt=media&token=82771e32-4226-4ddf-a438-7ec2d17cb57e")]'>
      <Reveal>
        <h1 className="md:text-xxxxl  text-[42px] md:pl-20 md:my-5 mb-4 overpass font-bold px-10">
          Explore Opportunities{" "}
        </h1>
        <h1 className="md:text-md text-md leading-snug md:pl-20 px-10">
          {" "}
          Participate, Showcase Skills & Gain CV Points through online & offline
          opportunities of your interest & make your mark!
        </h1>
      </Reveal>
      <div className="w-full md:h-[35vh] h-fit mt-20 gap-8 text-black-200 md:px-20 mx-auto  bg-[#eeeecc] grid grid-cols-1  md:grid-cols-4 ">
        {opportunities.map((item, index) => (
          <Reveal>
            <motion.div className="fill-card p-4 mx-auto" key={index}>
              <h2>{item.key}</h2>
              <p className="my-2 text-xs font-normal">{item.detail}</p>
              <button className=" hover:underline underline-offset-2 my-2 text-xs font-normal p-2 border-[2px] rounded-[20px] border-solid border-white">
                {item.button}
              </button>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Opportunity;
