import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechLogos from "./TechLogos";

const techLogos = [
  "/images/JS.png",
  "/images/AWS.png",
  "/images/AZORE.png",
  "/images/NODE.png",
  "/images/CSS.png",
  "/images/GO.png",
  "/images/FLUTTER.png",
  "/images/REACT.png",
  "/images/CPP.png",
  "/images/CSHARP.png",
  "/images/ANGULAR1.png",
  "/images/DART.png",
  "/images/KOTLIN.png",
  "/images/HTML.png",
  "/images/WOO.png",
];

const techLogoss = [
  "/images/JS.png",
  "/images/AWS.png",
  "/images/AZORE.png",
  "/images/NODE.png",
  "/images/CSS.png",
  "/images/GO.png",
  "/images/FLUTTER.png",
  "/images/REACT.png",
  "/images/CPP.png",
  "/images/CSHARP.png",
  "/images/ANGULAR1.png",
  "/images/DART.png",
  "/images/KOTLIN.png",
  "/images/HTML.png",
  "/images/WOO.png",
];

const CTASection = ({ isVisibleCTASection, setIsVisibleCTASection }) => {
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (isVisibleCTASection) {
      setTimeout(() => {
        setHovering(true);
      }, 1000);
    }
  }, [isVisibleCTASection]);

  const toggleForm = () => {
    setHovering((prev) => !prev);
    setIsVisibleCTASection(false);
  };

  return (
    <section
      id="contact"
      className="bg-[#F6F6F9] relative rounded-[30px] md:pt-[105px] md:py-20 py-16 md:pl-[84px] px-4 md:px-0 mt-20 overflow-hidden"
    >
      {/* Text Section */}
      <div className=" relative md:w-[839px]">
        <h2 className="md:text-[72px] text-2xl font-normal md:leading-20">
          <motion.span
            className="bg-gradient-to-r from-[#C0AEFE] mr-2 via-[#6D39F3] to-[#3956EB] bg-clip-text text-transparent"
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
            Ready to start
          </motion.span>
          your <br />
          Project journey with us?
        </h2>
        <motion.button
          onClick={toggleForm}
          className="py-[10px] group px-[16px] mt-[32px] bg-black rounded-[8px] text-white flex items-center gap-2"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Let's Talk</span>
          <motion.span
            animate={{
              rotate: hovering ? 180 : 0,
              y: hovering ? 2 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            ↓
          </motion.span>
        </motion.button>
      </div>

      <motion.div
        className="absolute hidden md:block md:-bottom-10 bottom-0 md:right-0"
        animate={{
          opacity: hovering ? [1, 0, 1] : 1,
          scale: hovering ? [1, 0.9, 1] : 1,
        }}
        transition={{
          duration: 0.6,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        }}
      >
        {!hovering ? (
          <svg
            width="506"
            height="523"
            viewBox="0 0 506 523"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1_889)">
              <path
                d="M227 345.878C227 393.613 232.149 440.545 241.95 482.154C251.752 523.763 265.877 558.65 282.964 583.454C300.052 608.258 319.527 622.145 339.515 623.778C359.503 625.41 379.33 614.734 397.089 592.776C414.847 570.819 429.938 538.319 440.908 498.407C451.879 458.494 458.36 412.513 459.727 364.889C461.095 317.266 457.302 269.604 448.716 226.493"
                stroke="url(#paint0_linear_1_889)"
                stroke-opacity="0.4"
                stroke-width="200"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_889"
                x="0.599998"
                y="0.073143"
                width="685.8"
                height="850.289"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="63.2"
                  result="effect1_foregroundBlur_1_889"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_889"
                x1="435.437"
                y1="210.255"
                x2="172.229"
                y2="265.12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3956EB" />
                <stop offset="0.313324" stop-color="#7B4FF7" />
                <stop offset="0.780691" stop-color="#4E8DF5" />
                <stop offset="1" stop-color="#641CFF" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg
            width="506"
            height="392"
            viewBox="0 0 506 392"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1_1124)">
              <path
                d="M227 293.368C227 319.95 232.149 346.084 241.95 369.255C251.752 392.425 265.877 411.852 282.964 425.664C300.052 439.477 319.527 447.21 339.515 448.119C359.503 449.028 379.33 443.083 397.089 430.856C414.847 418.628 429.938 400.531 440.908 378.305C451.879 356.08 458.36 330.474 459.727 303.955C461.095 277.435 457.302 250.895 448.716 226.888"
                stroke="url(#paint0_linear_1_1124)"
                stroke-opacity="0.4"
                stroke-width="200"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_1124"
                x="0.599998"
                y="0.46035"
                width="685.8"
                height="674.15"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="63.2"
                  result="effect1_foregroundBlur_1_1124"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_1124"
                x1="435.437"
                y1="217.846"
                x2="194.546"
                y2="308.018"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B31AEF" />
                <stop offset="0.313324" stop-color="#F6048D" />
                <stop offset="0.780691" stop-color="#F88C54" />
                <stop offset="1" stop-color="#FF7670" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </motion.div>

      {/* ====================================== */}

      {/* ===================================================== */}

      {/* Contact Form - Using AnimatePresence for enter/exit animations */}
      <AnimatePresence>
        {hovering && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  duration: 0.5,
                },
                opacity: {
                  duration: 0.3,
                  delay: 0.2,
                },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  duration: 0.5,
                  delay: 0.2,
                },
                opacity: {
                  duration: 0.3,
                },
              },
            }}
            className="border-t-[2px] border-[#EAEAEA] flex md:flex-row flex-col items-start justify-between mt-20 md:pt-20 md:pb-20 pb-10 overflow-hidden"
          >
            <motion.div
              className="md:w-1/2 w-full md:pt-20 pt-10"
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              exit={{
                x: -50,
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              <h1 className="font-normal text-[48px]">Contact Us</h1>
              <p className="text-[20px] md:w-2/3 font-normal text-[#0C0E12] mt-[15px]">
                The Future of Your Financial Solutions and Strategies is not
                just an exciting and transformative concept it represents a
                groundbreaking.
              </p>
            </motion.div>

            <motion.div
              className="md:w-1/2 w-full  md:pr-[30px] md:p-10 md:mt-0 mt-10 space-y-6"
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              exit={{
                x: 50,
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              {["Enter Your Name", "Enter Your Email", "Contact number"].map(
                (placeholder, idx) => (
                  <motion.input
                    key={idx}
                    type={idx === 1 ? "email" : idx === 2 ? "tel" : "text"}
                    placeholder={placeholder}
                    className="bg-white rounded-[18px] w-full py-[23px] px-[31px] text-[22px] font-normal placeholder:text-[#939393]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                        delay: 0.4 + idx * 0.1,
                      },
                    }}
                    exit={{
                      y: 20,
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        delay: (2 - idx) * 0.05,
                      },
                    }}
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 0 2px rgba(105, 57, 243, 0.3)",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                )
              )}

              <motion.textarea
                placeholder="Message:"
                rows={4}
                className="bg-white rounded-[18px] w-full py-[23px] px-[31px] text-[22px] font-normal placeholder:text-[#939393] resize-none"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    delay: 0.7,
                  },
                }}
                exit={{
                  y: 20,
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                  },
                }}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 0 2px rgba(105, 57, 243, 0.3)",
                }}
                transition={{ duration: 0.2 }}
              ></motion.textarea>

              <motion.button
                className="font-normal text-[16px] flex gap-2 items-center bg-black w-full rounded-[8px] py-[10px] px-[16px] text-white justify-center"
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                variants={{
                  initial: { y: 20, opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { duration: 0.3 },
                  },
                  hover: { scale: 1.03, backgroundColor: "#333" },
                  tap: { scale: 0.97 },
                }}
              >
                Submit
                <motion.div
                  variants={{
                    hover: {
                      x: [0, 5, 0],
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    },
                  }}
                >
                  →
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tech logos */}
      <motion.div
        className={`absolute -rotate-45 flex flex-col md:gap-5 gap-2 flex-wrap items-center justify-center overflow-hidden
          md:bottom-0 sm:right-20 right-0 md:h-[596px]
          sm:-top-[300px] -top-210`}
        // ${hovering ? "-top-[1150px]" : "-top-[1200px]"}
        animate={{
          x: hovering ? 40 : 0,
          opacity: hovering ? 0.4 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Scrolling container */}
        <motion.div
          className="flex flex-col gap-5"
          animate={{ y: ["0%", "10%"] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {/* Duplicate logos exactly once for seamless scroll */}
          {[...techLogos, ...techLogos].map((logo, idx) => (
            <div key={idx} className="md:w-[90px] w-10 aspect-square">
              <div className="rounded-full w-full rotate-90 aspect-square bg-[#F5F5F5] border-[4px] border-white flex items-center justify-center md:p-4 p-1">
                <img src={logo} className="w-full" alt="" />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ---------------- */}
      <motion.div
        className={`absolute -rotate-45  flex flex-col md:gap-5 gap-2 flex-wrap items-center justify-center overflow-hidden sm:-top-40 sm:right-30 right-0 -top-190 md:h-[596px]
          `}
        // ${hovering && "-top-[1080px]"}
        animate={{
          x: hovering ? 40 : 0,
          opacity: hovering ? 0.4 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Scrolling container */}
        <motion.div
          className="flex flex-col gap-5"
          animate={{ y: ["0%", "-10%"] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {/* Duplicate logos exactly once for seamless scroll */}
          {[...techLogoss, ...techLogoss].map((logo, idx) => (
            <div key={idx} className="md:w-[90px] w-10 aspect-square">
              <div className="rounded-full w-full rotate-90 aspect-square bg-[#F5F5F5] border-[4px] border-white flex items-center justify-center md:p-4 p-1">
                <img src={logo} className="w-full" alt="" />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;

{
  /* Tech logos */
}
// <motion.div
//   className={`absolute -rotate-45 flex flex-col md:gap-5 gap-2 flex-wrap items-center justify-center overflow-hidden
//   md:bottom-0 md:right-[-400px] 2xl:-right-[900px] md:h-[596px]
//   ${hovering ? "-top-[1150px]" : "-top-[1200px]"}
//   md:-top-[300px]`}
//   animate={{
//     x: hovering ? 40 : 0,
//     opacity: hovering ? 0.4 : 1,
//   }}
//   transition={{ duration: 0.5 }}
// >
//   {/* Scrolling container */}
//   <motion.div
//     className="flex flex-col gap-5"
//     animate={{ y: ["0%", "10%"] }}
//     transition={{
//       repeat: Infinity,
//       duration: 10,
//       ease: "linear",
//     }}
//   >
//     {/* Duplicate logos exactly once for seamless scroll */}
//     {[...techLogos, ...techLogos].map((logo, idx) => (
//       <div key={idx} className="md:w-[90px] w-10 aspect-square">
//         <div className="rounded-full w-full rotate-90 aspect-square bg-[#F5F5F5] border-[4px] border-white flex items-center justify-center md:p-4 p-1">
//           <img src={logo} className="w-full" alt="" />
//         </div>
//       </div>
//     ))}
//   </motion.div>
// </motion.div>

// {/* ---------------- */}
// <motion.div
//   className={`absolute -rotate-45 flex flex-col md:gap-5 gap-2 flex-wrap items-center justify-center overflow-hidden
//   md:bottom-0 md:-right-[300px] 2xl:-right-[800px] md:h-[596px]
//   ${hovering ? "-top-[1080px]" : "-top-[1130px]"}
//   md:-top-[230px]`}
//   animate={{
//     x: hovering ? 40 : 0,
//     opacity: hovering ? 0.4 : 1,
//   }}
//   transition={{ duration: 0.5 }}
// >
//   {/* Scrolling container */}
//   <motion.div
//     className="flex flex-col gap-5"
//     animate={{ y: ["0%", "-10%"] }}
//     transition={{
//       repeat: Infinity,
//       duration: 10,
//       ease: "linear",
//     }}
//   >
//     {/* Duplicate logos exactly once for seamless scroll */}
//     {[...techLogoss, ...techLogoss].map((logo, idx) => (
//       <div key={idx} className="md:w-[90px] w-10 aspect-square">
//         <div className="rounded-full w-full rotate-90 aspect-square bg-[#F5F5F5] border-[4px] border-white flex items-center justify-center md:p-4 p-1">
//           <img src={logo} className="w-full" alt="" />
//         </div>
//       </div>
//     ))}
//   </motion.div>
// </motion.div>
