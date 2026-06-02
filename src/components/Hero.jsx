import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import { PipelineCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-[380px] sm:h-screen mx-auto overflow-visible`}>
      <div
        className={`absolute inset-0 top-[80px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Timothy</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Senior AI / ML Engineer building scalable <br className='sm:block hidden' />
            platforms, APIs, and intelligent systems
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <div className='absolute left-0 right-0 top-[170px] bottom-0 sm:left-0 sm:right-0 sm:top-[180px] sm:bottom-[-80px]'>
        <PipelineCanvas />
      </div>
    </section>
  );
};

export default Hero;
