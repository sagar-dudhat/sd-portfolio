import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const roles = [
  "Freelancer",
  "Laravel Developer",
  "React Enthusiast",
  "Full-Stack Web Engineer",
  "API Integration Expert",
  "Open Source Contributor",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        deleting ? current.substring(0, charIndex - 1) : current.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => prev + (deleting ? -1 : 1));

      if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Sagar</span>
          </h1>

          <div className="text-white text-[20px] sm:text-[24px] lg:text-[28px] mt-2 font-medium min-h-[40px]">
            {text}
            <span className="text-[#915EFF]">|</span>
          </div>

          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            I build secure backend systems, <br className='sm:block hidden' />
            APIs & full-stack apps using Laravel, MySQL, and AWS.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
