import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Insurance Charges Prediction"
          main="A FastAPI web app that predicts insurance charges based on user inputs. Utilized MLflow to compare multiple models, with XGBoost deployed for its superior performance."
          demoLink="https://insurance-prediction-demo.com"
          sourceLink="https://github.com/abhibade619/Insurance-charges-prediction-project"
        />
        <ProjectCard
          title="Airbnb Dashboard"
          main="An interactive Tableau dashboard analyzing Airbnb listings, focusing on price trends, room types, and host verification. Presented insights to enhance decision-making."
          demoLink="https://public.tableau.com/profile/abhibade619#!/vizhome/AirbnbDashboard"
          sourceLink=""
        />
        <ProjectCard
          title="Drought Monitoring Project"
          main="Analyzed 20 years of satellite imagery using Google Earth Engine to predict future drought occurrences, leveraging Python and machine learning tools."
          demoLink=""
          sourceLink="https://github.com/abhibade619/drought-monitoring"
        />
      </div>
    </div>
  );
};

export default Projects;
