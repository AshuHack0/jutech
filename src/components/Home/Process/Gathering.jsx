import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Gathering() {
  const [svgIndex, setSvgIndex] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Conduct workshops and interviews",
      position: "top-[0px] left-16 rotate-[6.82deg]",
    },
    {
      number: "02",
      title: "Create a product backlog or requirements document",
      position: "top-[260px] right-16 rotate-[-9.9deg]",
    },
    {
      number: "03",
      title: "Define user stories with acceptance criteria",
      position: "top-[520px] left-16 rotate-[6.82deg]",
    },
    {
      number: "04",
      title: "Prioritize features",
      position: "top-[700px] right-16 rotate-[-9.9deg]",
    },
  ];

  // Animation controls
  const controls = useAnimation();
  const lineControls = useAnimation();
  const svgControls = useAnimation();

  // Reference for the container element
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Start animations when component comes into view
  useEffect(() => {
    if (inView) {
      // Animate cards sequentially with slower timing
      controls.start((i) => ({
        opacity: [0, 0, 1],
        x: [i % 2 === 0 ? -30 : 30, i % 2 === 0 ? -15 : 15, 0],
        transition: {
          delay: i * 1.2,
          duration: 1,
          times: [0, 0.5, 1],
          ease: "easeOut",
        },
      }));

      // Animate lines sequentially with delay
      lineControls.start((i) => ({
        scaleY: [0, 1],
        opacity: [0, 1],
        transition: {
          delay: i * 1.2 + 0.6,
          duration: 0.8,
          ease: "easeOut",
        },
      }));

      // Wait for first card animation to complete before starting SVG animation
      const startSvgAnimation = async () => {
        // Wait for first card animation (1.2s)
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Start SVG path animation
        svgControls.start({
          pathLength: [0, 1],
          opacity: [0, 1],
          transition: {
            duration: 4.8,
            ease: "easeInOut",
          },
        });
      };

      startSvgAnimation();
    }
  }, [controls, lineControls, svgControls, inView]);

  return (
    <div
      ref={ref}
      className="relative hidden md:w-full h-full bg-[#F6F6F9] rounded-[30px] overflow-hidden  md:flex flex-col items-center justify-center"
    >
      <div className="relative w-full h-5/6">
        {/* Process cards */}
        {steps.map((step, index) => (
          <div key={index}>
            <motion.div
              className={`absolute ${step.position} z-10 w-[336px] bg-white shadow-xl rounded-[30px] px-[25px] py-[25px]`}
              initial={{ opacity: 1, x: index % 2 === 0 ? -30 : 30 }}
              custom={index}
              animate={controls}
            >
              <motion.div
                className="font-normal text-[28px] text-center mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 1,
                    duration: 0.5,
                  },
                }}
              >
                {step.number}
              </motion.div>
              <motion.div
                className="py-[25px] px-[34px] rounded-[26px] font-normal text-[20px]"
                initial={{
                  background: "#E5E5E5",
                  color: "#666666",
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  background: [
                    "#E5E5E5",
                    "#D4C4FF",
                    "#B8A3FF",
                    "linear-gradient(to right, #C0AEFE, #6D39F3, #3956EB)",
                  ],
                  color: ["#666666", "#666666", "#666666", "white"],
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index,
                  duration: 1.2,
                  times: [0],
                  ease: "easeInOut",
                }}
              >
                {step.title}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div
        className={`absolute top-64 overflow-hidden left-44`}
        initial={{ opacity: 0, scaleY: 0, originY: 0 }}
        custom={svgIndex}
        animate={lineControls}
      >
        <svg
          width="367"
          height={"621"}
          viewBox="0 0 367 621"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M65.4995 1.5C138.833 26 299.3 93.5 354.5 167.5C255.5 186.333 46.4995 253.4 2.49951 371C114 392.5 342.6 472.4 365 620"
            stroke="#DEDEDE"
            strokeWidth="3"
            stroke-dasharray="10 10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={svgControls}
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute -bottom-10 right-0 left-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.img
          src="\gradients\gradient2.svg"
          className="w-full"
          alt=""
          animate={{
            y: [30, -30, 30],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </motion.div>
    </div>
  );
}
