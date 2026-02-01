import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Optimized features data
const features = [
  {
    title: "Dedicated Teams",
    description:
      "Each project gets a focused team for top quality and efficiency.",
    icon: "/svgs/CheckCircle.svg",
  },
  {
    title: "Global Talent",
    description:
      "Teams across the United States, Ukraine, India, and Vietnam bring fresh ideas and deep expertise.",
    icon: "/svgs/CheckCircle.svg",
  },
  {
    title: "Certified Leadership",
    description:
      "Certified managers lead with Agile, Waterfall, and Hybrid methodologies.",
    icon: "/svgs/CheckCircle.svg",
  },
  {
    title: "Data Protection",
    description:
      "We follow GDPR and SOC 2 standards to keep your data safe and secure.",
    icon: "/svgs/CheckCircle.svg",
  },
];

// Card data
const certLeadershipItems = [
  { name: "Success", icon: "/svgs/leaf.svg", bgColor: "bg-white" },
  { name: "Growth", icon: "/svgs/crown.svg", bgColor: "bg-white" },
  { name: "Launch", icon: "/svgs/rocket.svg", bgColor: "bg-[#E8E0FF]" },
  {
    name: "Sort Strategy",
    icon: "/svgs/barchart.svg",
    bgColor: "bg-[#D6E6FF]",
  },
  { name: "Profit", icon: "/svgs/shakehand.svg", bgColor: "bg-[#FFE7CB]" },
  {
    name: "Continuous improvement",
    icon: "/svgs/extension.svg",
    bgColor: "bg-[#FEECF2]",
  },
];

const countries = [
  { name: "United States", growth: 90 },
  { name: "Russia", growth: 85 },
  { name: "India", growth: 92 },
  { name: "China", growth: 88 },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4 },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.2 },
  },
};

const FeatureHighlightSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  // Refs for each container to track viewport visibility
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  // Create animation controls
  const leftContentControls = useAnimation();
  const rightContentControls = useAnimation();

  // Check if elements are in view
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const leftContentInView = useInView(leftContentRef, {
    once: true,
    amount: 0.4,
  });
  const rightContentInView = useInView(rightContentRef, {
    once: true,
    amount: 0.4,
  });

  // Start animations when section comes into view
  useEffect(() => {
    if (leftContentInView) {
      leftContentControls.start("visible");
    }
  }, [leftContentInView, leftContentControls]);

  useEffect(() => {
    if (rightContentInView) {
      rightContentControls.start("visible");
    }
  }, [rightContentInView, rightContentControls]);

  return (
    <section
      ref={sectionRef}
      className="w-full md:py-16 flex flex-col md:flex-row items-center justify-between gap-16"
    >
      {/* Left Text Content */}
      <motion.div
        ref={leftContentRef}
        className="md:w-1/2"
        initial="hidden"
        animate={leftContentControls}
        variants={containerVariants}
      >
        {/* <motion.h2
          className="md:text-4xl font-semibold leading-tight flex flex-col"
          variants={itemVariants}
        >
          <span className="md:text-5xl text-4xl font-normal bg-gradient-to-r from-[#4885EF] via-[#C560CF] to-[#DA5381] bg-clip-text text-transparent">
            Driven beyond limit,
          </span>
          <span className="text-black md:text-5xl text-4xl font-normal">
            grounded in promise.
          </span>
        </motion.h2> */}
        <motion.h2
          className="md:text-4xl font-semibold  flex flex-col"
          variants={itemVariants}
        >
          <motion.span 
            className="md:text-5xl text-4xl font-normal bg-gradient-to-r from-[#4885EF] via-[#C560CF] to-[#DA5381] bg-clip-text text-transparent pb-2"
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
            Driven beyond limit,
          </motion.span>
          <span className="text-black md:text-5xl text-4xl font-normal">
            grounded in promise.
          </span>
        </motion.h2>

        <div className="mt-8 space-y-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <div className="h-8 w-8 flex items-center justify-center shrink-0">
                <img
                  src={feature.icon}
                  alt={`${feature.title} - checkmark icon`}
                  className="h-6 w-6 object-contain"
                />
              </div>

              <div>
                <h4 className="font-medium text-xl text-[#0C0E12]">
                  {feature.title}
                </h4>
                <p className="font-normal md:text-xl text-[#646567]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Visual Content */}
      <motion.div
        ref={rightContentRef}
        className="relative w-full md:w-1/2 h-[690px] rounded-3xl bg-[#F6F6F9] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={rightContentControls}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
          },
        }}
      >
        <motion.div
          className="absolute -bottom-5 -left-5"
          animate={
            rightContentInView
              ? {
                  rotate: [0, 5, 0, -5, 0],
                  opacity: [0.8, 1, 0.8],
                }
              : {}
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img src="/gradients/gradient1.svg" alt="Decorative gradient background" />
        </motion.div>

        <div className="px-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            {/* Card 1: Certified Leadership */}
            <motion.div
              className="bg-white rounded-lg p-4 w-[282px] h-[192px] shadow-sm"
              variants={cardVariants}
              initial="hidden"
              animate={rightContentInView ? "visible" : "hidden"}
              whileHover="hover"
            >
              <h2 className="text-[9.5px] text-[#C4C6C5] font-medium">
                FEATURES
              </h2>
              <h2 className="text-[12px] text-[#272727] font-medium">
                Certified Leadership
              </h2>

              <div className="w-full mt-2">
                <motion.div
                  className="border-dotted border-l-[0.69px] border-b-[0.69px] py-[5px] border-[#EDEDED] flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={rightContentInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2 bg-[#F6F6F5] rounded-full p-[1.37px] w-fit pr-2">
                    <div className="bg-white h-4 w-4 rounded-full flex items-center justify-center">
                      <img src="/svgs/leaf.svg" alt="Success - growth icon" />
                    </div>
                    <h2 className="font-normal text-[9.5px] text-[#545454] whitespace-nowrap">
                      Success
                    </h2>
                  </div>
                </motion.div>

                <div className="border-dotted border-l-[0.69px] border-b-[0.69px] py-[5px] border-[#EDEDED] flex items-center justify-between px-4">
                  <motion.div
                    className="flex items-center gap-2 bg-[#F6F6F5] rounded-full p-[1.37px] w-fit pr-2"
                    initial={{ opacity: 0 }}
                    animate={
                      rightContentInView ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{ delay: 0.7 }}
                  >
                    <div className="bg-white h-4 w-4 rounded-full flex items-center justify-center">
                      <img src="/svgs/crown.svg" alt="Growth - excellence icon" />
                    </div>
                    <h2 className="font-normal text-[9.5px] text-[#545454] whitespace-nowrap">
                      Growth
                    </h2>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-2 bg-[#F6F6F5] rounded-full p-[1.37px] w-fit pr-2"
                    initial={{ opacity: 0 }}
                    animate={
                      rightContentInView ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{ delay: 0.8 }}
                  >
                    <div className="bg-[#E8E0FF] h-4 w-4 rounded-full flex items-center justify-center">
                      <img src="/svgs/rocket.svg" alt="Launch - rocket icon" />
                    </div>
                    <h2 className="font-normal text-[9.5px] text-[#545454] whitespace-nowrap">
                      Launch
                    </h2>
                  </motion.div>
                </div>

                <motion.div
                  className="border-dotted border-l-[0.69px] border-b-[0.69px] py-[5px] border-[#EDEDED] flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={rightContentInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="flex items-center gap-2 bg-[#F6F6F5] rounded-full p-[1.37px] w-fit pr-2">
                    <div className="bg-[#D6E6FF] h-4 w-4 rounded-full flex items-center justify-center">
                      <img src="/svgs/barchart.svg" alt="Sort Strategy - analytics chart icon" />
                    </div>
                    <h2 className="font-normal text-[9.5px] text-[#545454] whitespace-nowrap">
                      Sort Strategy
                    </h2>
                  </div>
                </motion.div>

                <div className="border-dotted border-l-[0.69px] border-b-[0.69px] py-[5px] border-[#EDEDED] flex items-center justify-between px-4">
                  <motion.div
                    className="flex items-center gap-2 bg-[#F6F6F5] rounded-full p-[1.37px] w-fit pr-2"
                    initial={{ opacity: 0 }}
                    animate={
                      rightContentInView ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{ delay: 1.0 }}
                  >
                    <div className="bg-[#FFE7CB] h-4 w-4 rounded-full flex items-center justify-center">
                      <img src="/svgs/shakehand.svg" alt="Profit - partnership handshake icon" />
                    </div>
                    <h2 className="font-normal text-[9.5px] text-[#545454] whitespace-nowrap">
                      Profit
                    </h2>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-2 bg-[#F6F6F5] rounded-full p-[1.37px] w-fit pr-2"
                    initial={{ opacity: 0 }}
                    animate={
                      rightContentInView ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{ delay: 1.1 }}
                  >
                    <div className="bg-[#FEECF2] h-4 w-4 rounded-full flex items-center justify-center">
                      <img src="/svgs/extension.svg" alt="Continuous improvement - extension icon" />
                    </div>
                    <h2 className="font-normal text-[9.5px] text-[#545454] whitespace-nowrap">
                      Continuous improvement
                    </h2>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-3">
              {/* Card 2: Data Protection */}
              <motion.div
                className="bg-white rounded-lg p-4 w-[282px] h-[192px] shadow-sm"
                variants={cardVariants}
                initial="hidden"
                animate={rightContentInView ? "visible" : "hidden"}
                whileHover="hover"
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-[9.5px] text-[#C4C6C5] font-medium">
                  FEATURES
                </h2>
                <h2 className="text-[12px] text-[#272727] font-medium">
                  Data Protection
                </h2>

                <div className="w-full mt-2 border-dotted border-l-[0.69px] py-1 border-[#EDEDED] items-center justify-center">
                  <div className="w-[156px] h-[127px] relative -space-y-16 mx-auto">
                    <motion.div
                      className="h-[93px] p-[6px] shadow-md aspect-square rounded-full bg-white border-[0.79px] border-[#DCDCDC]"
                      animate={
                        rightContentInView
                          ? {
                              y: [0, -5, 0, -5, 0],
                              rotate: [0, 5, 0],
                            }
                          : {}
                      }
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <div className="flex flex-col bg-gradient-to-br from-[#C0AEFE] border-[0.79px] border-[#4A4DEE] via-[#6D39F3] to-[#3956EB] items-center justify-center rounded-full h-full w-full">
                        <h2 className="font-medium text-[13px] text-white">
                          SOC 2
                        </h2>
                        <h2 className="font-normal text-[8px] text-white">
                          TYPE 1
                        </h2>
                      </div>
                    </motion.div>

                    <motion.div
                      className="h-[93px] ml-16 p-[6px] shadow-md aspect-square rounded-full bg-white border-[0.79px] border-[#DCDCDC]"
                      animate={
                        rightContentInView
                          ? {
                              y: [0, 5, 0, 5, 0],
                              rotate: [0, -5, 0],
                            }
                          : {}
                      }
                      transition={{
                        duration: 9,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <div className="bg-gradient-to-br from-[#C0AEFE] border-[0.79px] border-[#4A4DEE] via-[#6D39F3] to-[#3956EB] rounded-full h-full w-full p-[6px]">
                        <div className="flex flex-col items-center justify-center border-[1.59px] border-[rgba(255,255,255,0.38)] border-dashed h-full w-full rounded-full">
                          <h2 className="font-medium text-[13px] text-white">
                            GDPR
                          </h2>
                          <h2 className="font-normal text-[8px] text-white">
                            Compliant
                          </h2>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Global Talent */}
              <motion.div
                className="bg-white rounded-lg p-4 w-[282px] h-[192px] shadow-sm"
                variants={cardVariants}
                initial="hidden"
                animate={rightContentInView ? "visible" : "hidden"}
                whileHover="hover"
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-[9.5px] text-[#C4C6C5] font-medium">
                  FEATURES
                </h2>
                <h2 className="text-[12px] text-[#272727] font-medium">
                  Global Talent
                </h2>

                <div className="w-full mt-2 border-t-[0.69px] border-[#EDEDED] pt-2 flex flex-col gap-2">
                  {countries.map((country, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between"
                      initial={{ width: 0, opacity: 0 }}
                      animate={
                        rightContentInView
                          ? { width: "100%", opacity: 1 }
                          : { width: 0, opacity: 0 }
                      }
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.4 }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-[16px] aspect-square bg-[#292929] rounded-full w-4 flex items-center justify-center">
                          <h2 className="text-[9px] font-medium text-white">
                            {index + 1}
                          </h2>
                        </div>
                        <div className="leading-3">
                          <h2 className="text-[#2A2A2A] text-[9.5px] font-medium">
                            {country.name}
                          </h2>
                          <h2 className="text-[#C4C6C5] text-[8.2px] font-normal">
                            Growth: {country.growth}%
                          </h2>
                        </div>
                      </div>

                      <div className="w-[124px] h-2 overflow-hidden bg-[#EEEEEE] rounded-full">
                        <motion.div
                          className="h-full bg-[#7B4FF7] rounded-full"
                          initial={{ width: 0 }}
                          animate={
                            rightContentInView
                              ? { width: `${country.growth}%` }
                              : { width: 0 }
                          }
                          transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeatureHighlightSection;
