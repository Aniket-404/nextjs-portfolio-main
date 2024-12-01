"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Text to 3D Model",
    description: "This project generates images from text and converts them into 3D models using Hugging Face's text-to-image and OpenAI's DPT models.",
    image: "/images/projects/textto3d.png",
    tag: ["All", "GenAI"],
    gitUrl: "https://github.com/Aniket-404/Text-to-3D-web-app",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "MERN Stack Sales Analytics Dashboard",
    description: "This project is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and provides insights into sales data.",
    image: "/images/projects/sales-analytics-dashboard.png",
    tag: ["All", "Data Analytics", "Web"],
    gitUrl: "https://github.com/Aniket-404/MERN-Stack-Sales-Analytics-Dashboard",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Advance Data Visualization Tool",
    description: "Python-based tool using Streamlit, Pandas, Matplotlib, and Plotly for intuitive CSV data visualization selection.",
    image: "/images/projects/visualization-tool.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aniket-404/Advance-Data-Visualization-Tool",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Phishing Prevention Extension",
    description: "Browser extension safeguarding users by detecting and preventing phishing attempts in real-time.",
    image: "/images/projects/phishing-prevention.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aniket-404/Phishing-Prevention-Extension",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Gender-Age Classification",
    description: "Empower image-based gender and age classification with CNNs.",
    image: "/images/projects/gender-age-classification.jpg",
    tag: ["All", "Data Analytics"],
    gitUrl: "https://www.kaggle.com/code/aniketk26/gender-age-classification",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Wine Quality Prediction",
    description: "Predicting wine quality using machine learning based on chemical properties and characteristics.",
    image: "/images/projects/wine-quality.jpg",
    tag: ["All", "Data Analytics"],
    gitUrl: "https://github.com/Aniket-404/Wine-Quality-Prediction",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Stock Market Prediction",
    description: "Predicting stock market trends using linear regression analysis.",
    image: "/images/projects/stock-prediction.jpg",
    tag: ["All", "Data Analytics"],
    gitUrl: "https://github.com/Aniket-404/Stock-Market-Prediction",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="GenAI"
          isSelected={tag === "GenAI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Analytics"
          isSelected={tag === "Data Analytics"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
