import React, { useState, useRef, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  inProgress,
  imageContain,
  onClick,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.75)}>
      <div onClick={onClick} className='cursor-pointer'>
      <Tilt
        options={{
          max: 12,
          scale: 1,
          speed: 300,
        }}
        className='project-card bg-tertiary p-2 sm:p-5 rounded-xl sm:rounded-2xl w-full sm:h-[500px] sm:w-[360px] flex flex-col'
      >
        <div className='relative w-full h-[100px] sm:h-[230px] bg-black-200 rounded-xl sm:rounded-2xl overflow-hidden'>
          <img
            src={image}
            alt='project_image'
            className={`w-full h-full rounded-2xl ${imageContain ? 'object-contain p-2' : 'object-cover'}`}
          />

          {inProgress && (
            <div className='absolute top-3 left-3 z-10'>
              <span className='px-3 py-1 bg-[#915EFF] text-white text-[12px] font-bold rounded-full tracking-wider uppercase'>
                In Progress
              </span>
            </div>
          )}

          {source_code_link && (
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          )}
        </div>

        <div className='mt-2 sm:mt-5 flex-1 sm:overflow-hidden'>
          <h3 className='text-white font-bold text-[13px] sm:text-[24px] leading-tight'>{name}</h3>
          <p className='mt-1 sm:mt-2 text-secondary text-[10px] sm:text-[14px] sm:line-clamp-5'>{description}</p>
        </div>

        <div className='mt-1 sm:mt-4 flex flex-wrap gap-1 sm:gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[9px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const equalizeCards = () => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll('.project-card');

      cards.forEach(card => { card.style.minHeight = ''; });

      if (window.innerWidth >= 640) return;

      let maxHeight = 0;
      cards.forEach(card => {
        const h = card.getBoundingClientRect().height;
        if (h > maxHeight) maxHeight = h;
      });

      cards.forEach(card => { card.style.minHeight = `${maxHeight}px`; });
    };

    const timer = setTimeout(equalizeCards, 800);
    window.addEventListener('resize', equalizeCards);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', equalizeCards);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project reflects my
          ability to solve complex problems, work with different technologies,
          and deliver impactful solutions. Click any project to learn more.
        </motion.p>
      </div>

      <div ref={gridRef} className='mt-10 sm:mt-20 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default SectionWrapper(Works, "projects");
