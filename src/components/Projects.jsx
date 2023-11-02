import React, { useState } from 'react';
import blogApplication from '../assets/portfolio/Summarize Articles.png';
import covidWorld from '../assets/portfolio/Captures 04-08-2023 12_24_51.png';
import restaurant from '../assets/portfolio/Photos 04-08-2023 12_27_07.png';
import etherpay from '../assets/portfolio/React App - Google Chrome 04-08-2023 12_29_26.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      src: blogApplication,
      demoUrl: 'https://youtu.be/BANqI10Pi0w',
      codeUrl: 'https://github.com/trishitaNandy/blog-application'
    },
    {
      id: 2,
      src: covidWorld,
      demoUrl: 'https://youtu.be/FN7oHR5xcB0',
      codeUrl: 'https://github.com/niteshlouvanshi122/newsapp'
    },
    {
        id: 3,
        src: restaurant,
        demoUrl: 'https://youtu.be/dFRV9sFaIUM',
        codeUrl: 'https://github.com/trishitaNandy/Restaurent-Website'
    },
    {
        id: 4,
        src: etherpay,
        demoUrl: 'https://youtu.be/-oYdbrS94kU',
        codeUrl: 'https://github.com/trishitaNandy/EtherPay-Blockchain'
    },
  ];

  const handleButtonClick = (demoUrl, codeUrl) => {
    if (demoUrl) {
      window.open(demoUrl, '_blank');
    }
    if (codeUrl) {
      window.open(codeUrl, '_blank');
    }
  };

  return (
    <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map((project) => (
            <div key={project.id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={project.src} alt='' className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center'>
                <button
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                  onClick={() => handleButtonClick(project.demoUrl, project.codeUrl)}
                >
                  Demo
                </button>
                <button
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                  onClick={() => handleButtonClick(project.codeUrl)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div>
            <p>Selected project: {selectedProject.demoUrl}</p>
            <p>Selected project: {selectedProject.codeUrl}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;