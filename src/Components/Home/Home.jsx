import React from "react";
import avatarImg from "../../assets/home.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          Hi, I’m Abhishek Bade
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          A passionate Data Analyst with expertise in data visualization, machine learning, and building impactful solutions. Currently pursuing my Master’s in Analytics at Northeastern University.
        </p>
        <a href="#contact">
          <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </a>
      </div>
      <div>
        <img className="" src={avatarImg} alt="Abhishek Bade" />
      </div>
    </div>
  );
};

export default Home;

