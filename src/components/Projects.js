import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    { title: "Ubid", description: "Private Bidding Platform for Home Services." },
    { title: "Quizz Application", description: "Conducting Quizz and Creating Quizz." },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
