import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-6'>
      {technologies.map((technology, index) => (
        <motion.div
          key={technology.name}
          variants={fadeIn("up", "spring", index * 0.05, 0.5)}
          className='w-24 h-24 flex flex-col items-center justify-center gap-2 bg-tertiary rounded-xl border border-white/5 hover:border-[#915EFF]/30 transition-colors duration-300'
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className='w-12 h-12 object-contain'
          />
          <p className='text-secondary text-[10px] text-center leading-tight'>
            {technology.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
