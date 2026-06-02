import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { contactInfo } from "../constants";
import { EarthCanvas } from "./canvas";
import ContactInfo from "./ContactInfo";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useSound } from "../context/SoundContext";
import useButtonHoverSound from "../hooks/useButtonHoverSound";

const Contact = () => {
  const formRef = useRef();
  const { play } = useSound();
  const submitHover = useButtonHoverSound();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    play("send");

    fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        _subject: `Portfolio Contact from ${form.name}`,
        _captcha: "false",
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        if (data.success === "true" || data.success === true || data.message) {
          setSent(true);
          play("success");
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setSent(false), 5000);
        } else {
          play("error");
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((err) => {
        setLoading(false);
        play("error");
        console.error("Contact form error:", err);
        alert(`Something went wrong. Please try again or email ${contactInfo.email} directly.`);
      });
  };

  return (
    <div
      className={`xl:mt-8 flex xl:flex-row flex-col-reverse gap-6 xl:gap-8 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-5 sm:p-6 rounded-2xl border border-white/[0.06]'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <ContactInfo />

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 sm:mt-8 pt-6 border-t border-white/[0.08] flex flex-col gap-6'
        >
          <p className="text-white/80 text-[15px] font-medium">Send a message</p>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915EFF]/40 transition-colors font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915EFF]/40 transition-colors font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={4}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915EFF]/40 transition-colors font-medium resize-none'
            />
          </label>

          <div className='flex flex-wrap items-center gap-4'>
            <button
              type='submit'
              {...submitHover}
              className='bg-[#915EFF] hover:bg-[#7a4ee0] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#915EFF]/25 transition-colors'
            >
              {loading ? "Sending..." : "Send"}
            </button>
            {sent && (
              <span className='text-green-400 font-medium text-[16px] animate-pulse'>
                Message sent successfully!
              </span>
            )}
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-[0.4] w-full max-h-[240px] sm:max-h-[260px] xl:max-h-[280px] h-[200px] sm:h-[220px] xl:h-[260px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact", { compact: true });
