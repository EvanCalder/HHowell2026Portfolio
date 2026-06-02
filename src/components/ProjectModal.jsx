import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { github } from "../assets";
import { useSound } from "../context/SoundContext";
import useButtonHoverSound from "../hooks/useButtonHoverSound";

const ProjectModal = ({ project, onClose }) => {
  const { play } = useSound();
  const closeHover = useButtonHoverSound();

  useEffect(() => {
    if (project) play("open");
  }, [project, play]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        play("close");
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose, play]);

  const handleClose = () => {
    play("close");
    onClose();
  };

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
        onClick={handleClose}
      >
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-tertiary rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            {...closeHover}
            className="absolute top-4 right-4 text-white text-2xl w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center z-20 transition-colors"
          >
            &times;
          </button>

          {project.image && (
            <div className="relative w-full aspect-video bg-black-100 rounded-t-2xl overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              {project.companyLogo && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-white rounded-lg p-2 shadow-lg">
                      <img
                        src={project.companyLogo}
                        alt={project.company}
                        className="h-7 sm:h-9 w-auto max-w-[80px] object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-white font-bold text-[16px] sm:text-[20px]">{project.name}</p>
                      <p className="text-white/70 text-[12px] sm:text-[14px]">
                        {[project.company, project.role, project.period].filter(Boolean).join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {project.videoUrl && (
            <div className="w-full aspect-video bg-black-100 overflow-hidden">
              <iframe
                src={project.videoUrl}
                title={`${project.name} video`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          <div className="p-6">
            {!project.image && (
              <div className="flex items-center gap-3 mb-4">
                {project.companyLogo && (
                  <div className="bg-white rounded-lg p-2">
                    <img
                      src={project.companyLogo}
                      alt={project.company}
                      className="h-8 w-auto max-w-[72px] object-contain"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-white font-bold text-[28px]">{project.name}</h2>
                  <p className="text-secondary text-[14px]">
                    {[project.company, project.role, project.period].filter(Boolean).join(" · ")}
                  </p>
                </div>
              </div>
            )}

            {project.image && !project.companyLogo && (
              <h2 className="text-white font-bold text-[28px]">{project.name}</h2>
            )}

            <div className="mt-3 flex flex-wrap gap-2">
              {project.enterprise && (
                <span className="px-3 py-1 bg-[#915EFF]/20 text-[#c4b5fd] text-[12px] font-semibold rounded-full border border-[#915EFF]/30">
                  Enterprise Project
                </span>
              )}
              {project.metric && (
                <span className="px-3 py-1 bg-green-500/10 text-green-300 text-[12px] font-semibold rounded-full border border-green-500/20">
                  {project.metric}
                </span>
              )}
              {project.category && (
                <span className="px-3 py-1 bg-white/5 text-secondary text-[12px] font-medium rounded-full border border-white/10">
                  {project.category}
                </span>
              )}
            </div>

            <p className="mt-4 text-secondary text-[15px] leading-[26px] whitespace-pre-line">
              {project.detailedDescription || project.description}
            </p>

            {project.dataIntegration && (
              <div className="mt-5 p-4 bg-black-200 rounded-xl border border-white/10">
                <h3 className="text-white font-semibold text-[16px] mb-2">Architecture & Integration</h3>
                <p className="text-secondary text-[14px] leading-[22px] whitespace-pre-line">
                  {project.dataIntegration}
                </p>
              </div>
            )}

            {project.techStack && project.techStack.length > 0 && (
              <div className="mt-5">
                <h3 className="text-white font-semibold text-[16px] mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-black-200 text-secondary text-[13px] rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              {project.source_code_link && (
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-black-200 text-white rounded-xl hover:bg-black-100 transition-colors text-[14px]"
                >
                  <img src={github} alt="github" className="w-5 h-5" />
                  Source Code
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#915EFF] text-white rounded-xl hover:bg-[#7a4ee0] transition-colors text-[14px]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {project.liveDemoLabel || "Live Demo"}
                </a>
              )}
            </div>
          </div>

          {project.images && project.images.length > 1 && (
            <div className="px-6 pb-6 flex flex-col gap-5">
              <h3 className="text-white font-semibold text-[16px]">Screenshots</h3>
              {project.images.slice(1).map((item, i) => {
                const src = item.src || item;
                const caption = item.caption || null;
                return (
                  <div key={i}>
                    <img
                      src={src}
                      alt={`${project.name} screenshot ${i + 2}`}
                      className="w-full rounded-xl border border-white/10"
                    />
                    {caption && (
                      <p className="mt-2 text-secondary text-[13px] leading-[20px] opacity-80">
                        {caption}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;
