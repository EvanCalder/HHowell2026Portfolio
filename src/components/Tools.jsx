import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { tools, technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Tools = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h3 className={styles.sectionHeadText}>Tools & Platforms.</h3>
      </motion.div>

      {/* Tech icon row */}
      <motion.div
        variants={fadeIn("up", "spring", 0, 0.5)}
        className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-5"
      >
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="w-12 h-12 sm:w-16 sm:h-16 flex flex-col items-center justify-center gap-0.5 sm:gap-1"
          >
            <img src={tech.icon} alt={tech.name} className="w-7 h-7 sm:w-10 sm:h-10 object-contain" />
            <p className="text-secondary text-[7px] sm:text-[9px] text-center">{tech.name}</p>
          </div>
        ))}
      </motion.div>

      <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-6">
        {tools.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            variants={fadeIn("up", "spring", groupIndex * 0.1, 0.5)}
            className="bg-tertiary rounded-2xl p-3 sm:p-5 sm:min-w-[250px] sm:flex-1"
          >
            <h4 className="text-white font-semibold text-[13px] sm:text-[16px] mb-2 sm:mb-3">
              {group.category}
            </h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black-200 text-secondary text-[10px] sm:text-[13px] rounded-full border border-white/10 hover:border-[#915EFF]/50 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tools, "");
