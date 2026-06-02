import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { About, Contact, Experience, Hero, Navbar, Tools, Works, StarsCanvas } from "./components";
import IntroScreen from "./components/IntroScreen";

const Portfolio = () => (
  <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Hero />
    </div>
    <div className='relative z-0 css-stars-bg'>
      <About />
      <Works />
      <Experience />
      <Tools />
    </div>
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

const App = () => {
  const [entered, setEntered] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const handleEnterPortfolio = () => {
    setEntered(true);
    setShowIntro(false);
  };

  return (
    <BrowserRouter>
      <AnimatePresence initial={false}>
        {showIntro && (
          <IntroScreen key="intro" onEnter={handleEnterPortfolio} />
        )}
      </AnimatePresence>

      {entered && (
        <>
          <Navbar />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Portfolio />
          </motion.div>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
