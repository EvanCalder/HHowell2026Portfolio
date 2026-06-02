import { useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { soundEngine } from "../utils/sounds";

const StarWrapper = (Component, idName, { compact = false } = {}) =>
  function HOC() {
    useEffect(() => {
      if (idName !== "work" && idName !== "contact") return;

      const el = document.getElementById(idName);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            soundEngine.onSectionMusic(idName);
          }
        },
        { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.12 }}
        className={`${compact ? "sm:px-16 px-6 py-8 sm:py-10" : styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
