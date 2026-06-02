import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useSound } from "../context/SoundContext";
import useButtonHoverSound from "../hooks/useButtonHoverSound";
import SoundToggle from "./SoundToggle";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { play } = useSound();
  const hoverSound = useButtonHoverSound();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (nav) => {
    setActive(nav.title);
    play("nav");
  };

  const handleLogoClick = () => {
    setActive("");
    window.scrollTo(0, 0);
    play("nav");
  };

  const handleMenuToggle = () => {
    setToggle(!toggle);
    play("menu");
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
        scrolled
          ? "bg-primary/98 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.35)] border-b border-white/[0.06]"
          : "bg-primary/85 backdrop-blur-sm border-b border-white/[0.04]"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={handleLogoClick}
          {...hoverSound}
        >
          <img src={logo} alt='logo' className='w-14 h-14 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Timothy &nbsp;
            <span className='sm:block hidden'> | Calder</span>
          </p>
        </Link>

        <div className='hidden sm:flex items-center gap-6'>
          <ul className='list-none flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                {...hoverSound}
                onClick={() => handleNavClick(nav)}
              >
                {nav.external ? (
                  <a href="/Timothy_Calder_Resume.docx" target="_blank" rel="noopener noreferrer">{nav.title}</a>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
          <SoundToggle />
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center gap-3'>
          <SoundToggle />
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={handleMenuToggle}
            {...hoverSound}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  {...hoverSound}
                  onClick={() => {
                    setToggle(false);
                    handleNavClick(nav);
                  }}
                >
                  {nav.external ? (
                    <a href="/Timothy_Calder_Resume.docx" target="_blank" rel="noopener noreferrer">{nav.title}</a>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
