import React from "react";
import { FaDatabase, FaSearch, FaGraduationCap } from "react-icons/fa";
import { SiSnowflake, SiTableau } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <SiSnowflake color="#47A248" size={50} /> {/* Icon for SQL/Snowflake */}
            <span className="text-white">
              <h2 className="leading-tight">Data Analyst Intern, Net Vision Resources</h2>
              <p className="text-sm leading-tight font-thin">Jan 2023 - Aug 2023</p>
              <ul className="text-sm p-2">
                <li>- Utilized SQL and Snowflake to generate reports for 30+ KPIs.</li>
                <li>- Designed and executed A/B tests, increasing user sign-ups by 15%.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaSearch color="#E50914" size={50} /> {/* Icon for Search */}
            <span className="text-white">
              <h2 className="leading-tight">Search Engine Evaluator (Freelancer)</h2>
              <p className="text-sm leading-tight font-thin">May 2021 - Dec 2022</p>
              <ul className="text-sm p-2">
                <li>- Conducted internet research to enhance Bing’s search algorithms.</li>
                <li>- Improved search result relevance by 15% through analysis.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaGraduationCap color="#FF9900" size={50} /> {/* Icon for Education/Analytics */}
            <span className="text-white">
              <h2 className="leading-tight">Summer Analytics Participant, IIT Guwahati</h2>
              <p className="text-sm leading-tight font-thin">Summer 2021</p>
              <ul className="text-sm p-2">
                <li>- Completed a Data Science boot camp organized by the Consulting and Analytics Club.</li>
                <li>- Gained hands-on experience in analytics tools and methodologies.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
