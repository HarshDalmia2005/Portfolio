import React, { useState, forwardRef } from 'react';
import { projectData } from './proj';
import ProjectCard from './ProjectCard';

const Project = ({ refer }) => {
  const [data, setData] = useState(projectData);

  return (
    <div className="mt-14 px-4 md:px-10 mx-auto" ref={refer}>
      <p className="text-3xl md:text-5xl text-white text-center font-bold mb-10 md:p-0 p-5">Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data.map((item, idx) => {
          return <ProjectCard key={idx} img={item.img} link={item.link} title={item.title} info={item.info} />;
        })}
      </div>
    </div>
  );
};

export default forwardRef(Project);
