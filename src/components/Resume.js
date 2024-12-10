import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section className="resume">
      <h2>My Resume</h2>
      {/* <p>
        Below is a summary of my professional experience and education. Click
        the button to download my full resume.
      </p> */}
      <a
        href="https://itv-uploads.s3.ap-south-1.amazonaws.com/resume/musini_16749b8999f1db_16860.pdf" // Replace with your actual resume URL
        target="_blank"
        rel="noopener noreferrer"
        className="download-btn"
      >
        Download Resume
      </a>
      {/* <div className="resume-details">
        <h3>Experience</h3>
        <ul>
          <li>Software Developer at ABC Corp (2021 - Present)</li>
          <li>Intern at XYZ Solutions (2020 - 2021)</li>
        </ul>
        <h3>Education</h3>
        <ul>
          <li>Bachelor of Science in Computer Science, Example University</li>
        </ul>
      </div> */}
    </section>
  );
}

export default Resume;
