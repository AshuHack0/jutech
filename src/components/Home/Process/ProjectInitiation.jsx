import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectInitiation = ({ data }) => {
  // Set up intersection observer for each timeline item
  const controls = useAnimation();
  const [containerRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  // Start animations when container comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative hidden md:w-full  bg-[#F6F6F9] rounded-[30px] overflow-hidden px-[85px] h-full md:flex items-center justify-center"
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 via-purple-50/30 to-pink-50/30 h-fit" />

      {/* Vertical timeline */}
      <div className="relative z-10 my-auto">
        {/* Base timeline line */}
        <div className="absolute left-6 top-10 bottom-10 w-[3px] bg-[#DEDEDE]" />

        {/* Animated timeline progress line */}
        <motion.div
          className="absolute left-6 top-10 w-[3px] bg-gradient-to-b from-[#C0AEFE] via-[#6D39F3] to-[#3956EB]"
          initial={{ height: "0%" }}
          animate={{ height: inView ? "80%" : "0%" }}
          transition={{ duration: 2.8, ease: "easeInOut" }}
        />

        {/* Content items */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center relative"
              variants={itemVariants}
            >
              {/* Timeline circle */}
              <motion.div
                className="absolute left-6 transform -translate-x-1/2"
                initial={{ scale: 0 }}
                animate={{ scale: inView ? 1 : 0 }}
                transition={{
                  delay: index * 0.6,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className="rounded-full p-[3px] bg-gradient-to-tr from-[#4885EF] via-[#C560CF] to-[#DA5381]">
                  <div className="w-[81px] aspect-square rounded-full bg-white flex items-center justify-center">
                    <div className="w-[32px] aspect-square rounded-full bg-purple-500"></div>
                  </div>
                </div>
              </motion.div>

              {/* Content card */}
              <motion.div
                className="ml-28 bg-white rounded-[30px] shadow-2xl py-[37px] px-[35px] w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  x: inView ? 0 : 50,
                }}
                transition={{
                  delay: index * 0.6 + 0.3,
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <span className="text-[24px] bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] bg-clip-text text-transparent font-normal">
                  {item}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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
};

export default ProjectInitiation;
