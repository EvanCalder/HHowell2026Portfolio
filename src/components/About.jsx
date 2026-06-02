import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { expertiseAreas, careerHighlights, contactInfo } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import useButtonHoverSound from "../hooks/useButtonHoverSound";

const icons = {
  ml: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5m0 14h16M8 17V9m4 8V7m4 10v-4" />
      <circle cx="8" cy="9" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="13" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  llm: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2M7 4l1 1.5M17 4l-1 1.5" opacity="0.6" />
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="7" height="7" rx="1.5" />
      <rect x="14" y="4" width="7" height="7" rx="1.5" />
      <rect x="8.5" y="13" width="7" height="7" rx="1.5" />
      <path strokeLinecap="round" d="M6.5 11v1.5M17.5 11v1.5M12 11v2" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v4c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 10v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" />
      <path d="M4 14v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" />
    </svg>
  ),
};

const iconColors = {
  ml: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  llm: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  backend: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  data: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
};

const StatCard = ({ value, label, index, hoverSound }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.08, 0.6)}
    {...hoverSound}
    className="relative overflow-hidden bg-tertiary/60 backdrop-blur-sm border border-white/[0.08] rounded-2xl px-4 py-4 sm:px-6 sm:py-5 text-center group hover:border-[#915EFF]/30 transition-colors duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <p className="relative text-[28px] sm:text-[36px] font-black text-white leading-none">{value}</p>
    <p className="relative mt-1.5 text-secondary text-[11px] sm:text-[13px] font-medium uppercase tracking-wider">{label}</p>
  </motion.div>
);

const ExpertiseCard = ({ area, index, hoverSound }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.12, 0.65)}
    {...hoverSound}
    className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-tertiary/50 backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_8px_40px_-12px_rgba(145,94,255,0.25)] ${area.border}`}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${area.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#915EFF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative z-10">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className={`flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center p-2.5 ${iconColors[area.icon]}`}>
          {icons[area.icon]}
        </div>
        <div className="flex flex-wrap gap-1.5 justify-end">
          {area.highlights.map((item) => (
            <span
              key={item}
              className="px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold text-[#c4b5fd] bg-[#915EFF]/10 border border-[#915EFF]/20 rounded-full whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <h3 className="text-white font-bold text-[15px] sm:text-[18px] leading-snug mb-2">
        {area.title}
      </h3>
      <p className="text-secondary text-[12px] sm:text-[14px] leading-[22px] sm:leading-[24px] mb-4">
        {area.description}
      </p>

      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
        {area.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-white/70 bg-black-200/80 rounded-md border border-white/[0.06]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const About = () => {
  const hoverSound = useButtonHoverSound();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 sm:gap-8">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[16px] sm:text-[17px] leading-[28px] sm:leading-[30px]"
        >
          Senior AI / ML Engineer with 10+ years building production systems across SAP, Accenture,
          Grab, and Sprout Solutions. I specialize in taking models from experiment to enterprise —
          model-serving APIs, ML pipelines, RAG workflows, and the cloud-native backends that support them.
        </motion.p>

        <motion.div
          variants={fadeIn("left", "spring", 0.15, 0.8)}
          className="bg-tertiary/60 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-5 sm:p-6"
        >
          <p className="text-[#915EFF] text-[11px] sm:text-[12px] font-semibold uppercase tracking-widest mb-3">
            At a glance
          </p>
          <ul className="space-y-2.5 text-[13px] sm:text-[14px]">
            <li className="flex gap-2 text-white/90">
              <span className="text-[#915EFF] flex-shrink-0">▸</span>
              <span>Makati, Philippines · Open to remote</span>
            </li>
            <li className="flex gap-2 text-white/90">
              <span className="text-[#915EFF] flex-shrink-0">▸</span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-white/90 hover:text-[#c4b5fd] transition-colors break-all leading-snug"
              >
                {contactInfo.email}
              </a>
            </li>
            <li className="flex gap-2 text-white/90">
              <span className="text-[#915EFF] flex-shrink-0">▸</span>
              <a
                href={`tel:${contactInfo.phoneTel}`}
                className="text-white/90 hover:text-[#c4b5fd] transition-colors"
              >
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex gap-2 text-white/90">
              <span className="text-[#915EFF] flex-shrink-0">▸</span>
              <span>De La Salle University — B.S. IT</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("", "", 0.2, 0.8)}
        className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
      >
        {careerHighlights.map((stat, index) => (
          <StatCard key={stat.label} {...stat} index={index} hoverSound={hoverSound} />
        ))}
      </motion.div>

      <motion.div variants={textVariant()} className="mt-12 sm:mt-16 mb-6 sm:mb-8">
        <p className={`${styles.sectionSubText} !normal-case tracking-normal text-[13px] sm:text-[15px]`}>
          Core expertise
        </p>
        <h3 className="text-white font-bold text-[22px] sm:text-[32px] mt-1">
          What I deliver in production.
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {expertiseAreas.map((area, index) => (
          <ExpertiseCard key={area.title} area={area} index={index} hoverSound={hoverSound} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
