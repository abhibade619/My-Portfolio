import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Data Analyst
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am currently pursuing a Master’s in Analytics at Northeastern University, Boston, where I specialize in data analysis, visualization, and machine learning. With a Bachelor's degree in Civil Engineering from NIT Warangal, I bring a unique blend of technical and analytical skills to solve complex problems.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Technical Skills
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Proficient in Python, SQL, Tableau, Power BI, and AWS. Experienced in utilizing tools like NumPy, Pandas, and Scikit-learn to derive actionable insights from data.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Professional Experience
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  During my internship at Net Vision Resources, I optimized website conversion rates through A/B testing and utilized SQL and Snowflake to generate insights from 30+ KPIs. My freelancing experience as a Search Engine Evaluator enhanced my understanding of data relevance and algorithm optimization.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
