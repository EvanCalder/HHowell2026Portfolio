import { motion } from "framer-motion";

import { contactInfo } from "../constants";
import { fadeIn } from "../utils/motion";
import useButtonHoverSound from "../hooks/useButtonHoverSound";

const ContactLink = ({ icon, label, value, href, hoverSound }) => (
  <a
    href={href}
    {...hoverSound}
    className="group inline-flex items-center gap-2.5 sm:gap-3 flex-shrink-0 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 bg-tertiary/70 border border-white/[0.08] hover:border-[#915EFF]/40 transition-all duration-300 hover:shadow-[0_8px_32px_-8px_rgba(145,94,255,0.35)]"
  >
    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#915EFF]/10 border border-[#915EFF]/25 flex items-center justify-center text-[#c4b5fd] group-hover:bg-[#915EFF]/20 transition-colors">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-[#915EFF] text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest mb-0.5">
        {label}
      </p>
      <p className="text-white text-[11px] sm:text-[13px] lg:text-[14px] font-medium whitespace-nowrap group-hover:text-[#dfd9ff] transition-colors">
        {value}
      </p>
    </div>
  </a>
);

const ContactInfo = () => {
  const hoverSound = useButtonHoverSound();

  return (
    <motion.div variants={fadeIn("", "", 0.05, 0.8)} className="mt-4 sm:mt-6">
      <p className="text-secondary text-[14px] sm:text-[15px] leading-[24px] max-w-xl">
        Open to opportunities, collaborations, and technical conversations. Reach out directly
        or send a message below.
      </p>

      <div className="mt-4 flex flex-nowrap items-stretch gap-3 sm:gap-4 overflow-x-auto pb-1">
        <ContactLink
          label="Email"
          value={contactInfo.email}
          href={`mailto:${contactInfo.email}`}
          hoverSound={hoverSound}
          icon={
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />
        <ContactLink
          label="Phone"
          value={contactInfo.phone}
          href={`tel:${contactInfo.phoneTel}`}
          hoverSound={hoverSound}
          icon={
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          }
        />
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.5)}
        className="mt-3 flex items-center gap-2 text-secondary text-[12px] sm:text-[13px]"
      >
        <svg className="w-4 h-4 text-[#915EFF]/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>{contactInfo.location}</span>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
