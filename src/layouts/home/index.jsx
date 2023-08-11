import React from "react";
import Navbar from "../../components/navbar/index";
import Hero from "../../components/main/Hero";
import Achivements from "../../components/main/Achivements";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Achivements/>
    </div>
  );
};

export default HomeLayout;
