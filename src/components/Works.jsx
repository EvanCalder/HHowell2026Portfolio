import React, { useState, useRef, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectModal from "./ProjectModal";
import ProjectCover from "./ProjectCover";
import { useSound } from "../context/SoundContext";
import useButtonHoverSound from "../hooks/useButtonHoverSound";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  inProgress,
  company,
  companyLogo,
  role,
  period,
  category,
  metric,
  coverGradient,
  enterprise,
  onClick,
}) => {
  const { play } = useSound();
  const hoverSound = useButtonHoverSound();

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.75)}>
      <div onClick={onClick} {...hoverSound} className='cursor-pointer'>
        <Tilt
          options={{
            max: 12,
            scale: 1,
            speed: 300,
          }}
          className='project-card bg-tertiary p-2 sm:p-5 rounded-xl sm:rounded-2xl w-full sm:h-[520px] sm:w-[360px] flex flex-col'
        >
          <div className='relative w-full h-[100px] sm:h-[230px] bg-black-200 rounded-xl sm:rounded-2xl overflow-hidden'>
            {image ? (
              <>
                <img
                  src={image}
                  alt={name}
                  className='w-full h-full object-cover'
                />
                {companyLogo && (
                  <div className='absolute top-2 left-2 sm:top-3 sm:left-3 flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-2.5 sm:py-1.5'>
                    <div className='bg-white rounded p-0.5 sm:p-1'>
                      <img
                        src={companyLogo}
                        alt={company}
                        className='h-3 sm:h-4 w-auto max-w-[40px] sm:max-w-[56px] object-contain'
                      />
                    </div>
                    <span className='text-white text-[9px] sm:text-[11px] font-medium'>
                      {company}
                    </span>
                  </div>
                )}
                {enterprise && (
                  <div className='absolute top-2 right-2 sm:top-3 sm:right-3'>
                    <span className='px-2 py-0.5 sm:px-2.5 sm:py-1 bg-black/60 backdrop-blur-sm text-white/90 text-[8px] sm:text-[10px] font-semibold rounded-full uppercase tracking-wide'>
                      Enterprise
                    </span>
                  </div>
                )}
              </>
            ) : (
              <ProjectCover
                companyLogo={companyLogo}
                company={company}
                category={category}
                gradient={coverGradient}
                metric={metric}
              />
            )}

            {inProgress && (
              <div className='absolute bottom-3 left-3 z-10'>
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
                  play("nav");
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
            {(company || period) && (
              <p className='text-[#915EFF] text-[9px] sm:text-[12px] font-semibold uppercase tracking-wide mb-0.5 sm:mb-1'>
                {[company, period].filter(Boolean).join(" · ")}
              </p>
            )}
            <h3 className='text-white font-bold text-[13px] sm:text-[22px] leading-tight'>{name}</h3>
            {role && (
              <p className='text-white/60 text-[9px] sm:text-[12px] mt-0.5 sm:mt-1'>{role}</p>
            )}
            <p className='mt-1 sm:mt-2 text-secondary text-[10px] sm:text-[14px] sm:line-clamp-4'>{description}</p>
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
  const { play } = useSound();

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
          Selected enterprise platforms from SAP, Accenture, Grab, and Sprout Solutions —
          spanning AI/ML services, recommendation systems, cloud-native backends, and data engineering.
          Click any project for architecture details and impact metrics.
        </motion.p>
      </div>

      <div ref={gridRef} className='mt-10 sm:mt-20 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onClick={() => {
              play("select");
              setSelectedProject(project);
            }}
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
