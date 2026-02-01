import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const { scrollY } = useScroll();

  return (
    <div className="md:h-[calc(100vh - 20px)] h-fit relative md:static">
      <motion.img
        src={`/svgs/Hero.svg`}
        alt=""
        role="presentation"
        className="absolute hidden md:block right-0 md:-top-50  top-0 md:left-30 left-0 -z-20"
        initial={{ top: -200, left: 120, opacity: 0 }}
        animate={{
          top: [-200, -10, -200],
          left: [120, 10, 120],
          opacity: 1,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          // ease: [0.43, 0.13, 0.23, 0.96],
          opacity: { duration: 0.2 },
          ease: "easeInOut",
        }}
      />

      <motion.div className="w-full hidden md:block object-cover absolute md:top-40 2xl:top-25 lg:top-90 xl:top-20 bottom-0 right-0 -z-10">
        <motion.svg
          viewBox="0 0 1411 646"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["0% center", "100% center", "0% center"],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <motion.path
            d="M1471.49 1C1481.7 110.205 1439.91 221.91 1351.4 321.988C1262.89 422.067 1131.64 506.023 974.239 563.242C816.84 620.461 640.364 648.371 467.129 643.444C293.894 638.517 131.68 600.973 1 535.561"
            stroke="url(#paint0_linear_1_461)"
            strokeWidth="4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              strokeDasharray: "0 1",
              strokeDashoffset: [0, -1],
            }}
            transition={
              {
                // duration: 2,
                // ease: "easeInOut",
                // repeat: Infinity,
                // repeatType: "reverse"
              }
            }
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_461"
              x1="214.5"
              y1="662.5"
              x2="1074.8"
              y2="1054.45"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.305824" stop-color="#FF7557" />
              <stop offset="0.539613" stop-color="#DE35FF" />
              <stop offset="0.704599" stop-color="#173EFF" />
              <stop offset="1" stop-color="#16F1FF" />
            </linearGradient>
          </defs>
        </motion.svg>
        {/* <svg
  viewBox="0 0 1411 646"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M1471.49 1C1481.7 110.205 1439.91 221.91 1351.4 321.988C1262.89 422.067 1131.64 506.023 974.239 563.242C816.84 620.461 640.364 648.371 467.129 643.444C293.894 638.517 131.68 600.973 1 535.561"
    stroke="url(#paint0_linear_1_461)"
    strokeWidth="4"
  />
  <defs>
    <linearGradient
      id="paint0_linear_1_461"
      x1="0"
      y1="0"
      x2="1000"
      y2="0"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0%" stopColor="white" />
      <stop offset="30%" stopColor="#FF7557" />
      <stop offset="54%" stopColor="#DE35FF" />
      <stop offset="70%" stopColor="#173EFF" />
      <stop offset="100%" stopColor="#16F1FF" />
      <animateTransform
        attributeName="gradientTransform"
        type="translate"
        values="300,0; -300,0"
        dur="3s"
        repeatCount="indefinite"
      />
    </linearGradient>
  </defs>
</svg> */}
      </motion.div>

      <div className="md:w-[1013px] md:h-[585px] h-fit md:mt-20 mt-10">
        <motion.h1
          className="font-medium text-5xl md:text-[140px] text-[#18191C] md:leading-[140px] leading-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1], // Custom easing
          }}
          style={{
            y: useTransform(scrollY, [0, 300], [0, -30]), // Parallax effect on scroll
          }}
        >
          Build Beyond{" "}
          <motion.span
            className="bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] bg-clip-text text-transparent inline-block"
            style={{ backgroundSize: "200% 100%" }}
            animate={{
              backgroundPosition: ["0% center", "100% center", "0% center"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            Limits
          </motion.span>
        </motion.h1>

        <div className="flex items-center justify-between">
          <div />
          <div className="md:w-[40%] mt-5 md:mt-10">
            <motion.p
              className="font-normal text-[18px] leading-[28px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              style={{
                y: useTransform(scrollY, [0, 300], [0, -15]), // Subtle parallax
              }}
            >
              We provide advanced software and integrated technology solutions
              to optimize operations, enhance efficiency, and drive sustainable
              growth.
            </motion.p>

<motion.button
  onClick={() =>
    window.open(
      "https://calendly.com/jutech-pte-ltd/new-meeting",
      "_blank",
      "noopener,noreferrer"
    )
  }
  className="py-[14px] cursor-pointer px-[23px] bg-white border border-[#0C0E121F] rounded-[11px] font-normal text-[23px] md:mt-[40px] mt-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  whileHover={{
    scale: 1.02,
    borderColor: "#6D39F3",
    boxShadow: "0 4px 12px rgba(109, 57, 243, 0.15)",
  }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2 }}
>
  Book a Meeting
</motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
