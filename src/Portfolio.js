// src/components/Portfolio.js
import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Deployment link for HTML, CSS, BOOTSTRAP',
    link: 'https://narasimhaneeli.github.io/Narasimha.Neeli/',
  },
  {
    title: 'Project 2',
    description: 'Deployment  link for  BOOTSTRAP, JAVASCRIPT',
    link:'https://narasimhaneeli.github.io/MT-2/',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div>
      <h2>My Portfolio</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
