import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-[calc(50%-12px)]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.5)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 12,
          scale: 1,
          speed: 300,
        }}
        className='bg-tertiary rounded-[20px] py-4 px-6 sm:py-5 sm:px-12 min-h-[160px] sm:min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-12 h-12 sm:w-16 sm:h-16 object-contain'
        />

        <h3 className='text-white text-[14px] sm:text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Computer Science graduate from Texas A&M University-Texarkana with a focus on data engineering
        and analytics. I design and build data pipelines that pull from live APIs, cache and transform
        operational data, and power real-time dashboards used daily by leadership. From Shopify order
        pipelines processed through Cloudflare Workers to automated ETL jobs that backfill historical
        datasets, I turn raw business data into the metrics that drive decisions.
      </motion.p>

      <div className='mt-10 sm:mt-20 flex flex-wrap gap-3 sm:gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
