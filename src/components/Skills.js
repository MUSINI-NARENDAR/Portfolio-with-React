import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "Python",
    "Django",
    "SQL",
    "CSS",
    "HTML",
    "Git/GitHub",
  ];

  return (
    <section className="skills">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
