import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Stock Prediction App"
          main="This project uses a pre-trained LSTM (Long Short-Term Memory) model to predict stock prices. Built with Streamlit, it allows users to analyze historical stock data fetched from Yahoo Finance, visualize key trends using Moving Averages (MA_10 and MA_20), and predict future prices for the next 30 business days."
          demoLink=""
          sourceLink="https://github.com/abhibade619/stockprediction"
        />
        <ProjectCard
          title="Insurance Charges Prediction"
          main="A FastAPI web app that predicts insurance charges based on user inputs. Utilized MLflow to compare multiple models, with XGBoost deployed for its superior performance."
          demoLink="https://insurance-prediction-demo.com"
          sourceLink="https://github.com/abhibade619/Insurance-charges-prediction-project"
        />
        <ProjectCard
          title="Airbnb Dashboard"
          main="An interactive Tableau dashboard analyzing Airbnb listings, focusing on price trends, room types, and host verification. Presented insights to enhance decision-making."
          demoLink="https://public.tableau.com/app/profile/abhishek.bade/viz/aly6070_dashboard/Dashboard1"
          sourceLink="https://public.tableau.com/app/profile/abhishek.bade/viz/aly6070_dashboard/Dashboard1"
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
