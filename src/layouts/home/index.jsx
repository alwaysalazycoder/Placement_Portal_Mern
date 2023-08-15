import React from "react";
import Navbar from "../../components/navbar/index";
import Hero from "../../components/main/Hero";
import Achivements from "../../components/main/Achivements";
import Opportunity from "../../components/main/Opportunity";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Achivements />
      <Opportunity />
    </div>
  );
};

export default HomeLayout;
