import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = {
  "Software Development": {
    languages: ["JS", "CPP", "CSHARP", "PYTHON", "JAVA", "TYPESCRIPT", "GO"],
    techStack: ["NODE", "PHP", "ASPDOTNET", "DJANGO", "FLASK", "GO"],
    databases: ["SQL", "NOSQL", "CLOUD"],
    description:
      "The Future of Your Financial Solutions and Strategies is not just an exciting and transformative concept it represents a groundbreaking.",
    svg: "development",
  },
  "Website Development": {
    "E-Commerce": ["W", "WOO", "UN"],
    Frontend: ["HTML", "CSS", "REACT", "ANGULAR1", "VIEW", "TAILWIND"],
    Backend: ["NODE", "PHP", "ASPDOTNET", "PYTHON"],
    description:
      "W Fully tailored CMS solutions & responsive Design with SEO Optimization",
    svg: "development1",
  },
  "Mobile App Development": {
    "Cross-Platform (ios & android)": ["FLUTTER", "DART"],
    Native: ["KOTLIN", "JAVA", "SWIFT", "C"],
    description:
      "The Future of Your Financial Solutions and Strategies is not just an exciting and transformative concept it represents a groundbreaking. ",
    svg: "development2",
  },
  "Cloud Solutions": {
    Platforms: ["AWS", "AZORE"],
    "We also work with": [
      "WINDOWS",
      "LINUX",
      "OPENSHIFT",
      "JENKINS",
      "GITHUB",
      "OKTA",
      "AUTH0",
    ],
    description: "Services: Setup, Migration, Scaling",
    svg: "cloudSloutions",
  },
};

export default function ServicesSection() {
  const [activeService, setActiveService] = useState("Software Development");
  const [previousService, setPreviousService] = useState(null);

  const [isHovered, setIsHovered] = useState(null);

  const [buttonStates, setButtonStates] = useState(
    Object.keys(services).reduce((acc, service) => {
      acc[service] = service === "Software Development" ? 100 : 0;
      return acc;
    }, {})
  );

  const activeData = services[activeService];

  // Track previous service for direction-aware animations
  useEffect(() => {
    if (activeService !== previousService) {
      setPreviousService(activeService);

      // Reset all button gradients to 0 except active one
      setButtonStates((prev) => {
        const newStates = { ...prev };
        Object.keys(newStates).forEach((key) => {
          newStates[key] = key === activeService ? 100 : 0;
        });
        return newStates;
      });
    }
  }, [activeService, previousService]);

  // Get index of current and previous service for direction detection
  const getDirection = () => {
    const servicesArray = Object.keys(services);
    const currentIndex = servicesArray.indexOf(activeService);
    const previousIndex = servicesArray.indexOf(previousService);

    if (previousIndex === -1 || currentIndex === previousIndex) return 1;
    return currentIndex > previousIndex ? 1 : -1;
  };

  const handleServiceClick = (service) => {
    setActiveService(service);
  };

  return (
    <motion.div
      id="services"
      className="w-full py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="md:flex items-center justify-between"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="md:w-1/2 leading-16"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.h1
            className="font-[400] md:text-[52px] text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#4885EF] via-[#C560CF] to-[#DA5381]"
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
            Services We Offer
          </motion.h1>
          <motion.h1
            className="font-[400] md:text-[52px] text-xl mt-2 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Expert Skill Sets & Solutions
          </motion.h1>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex items-center justify-end"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.p
            className="md:w-3/4 mt-4 md:mt-0 leading-7 font-[400] md:text-[20px] text-md text-[#0C0E12]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Our team brings a wealth of experience and cutting-edge expertise to
            deliver tailored solutions that drive innovation, efficiency, and
            growth for your business.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-10 w-full mt-[60px]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {/* Left Panel */}
        <motion.div
          className="border border-[#EAEAEA] flex flex-col w-auto rounded-[25px] px-[40px] py-[50px] space-y-[59px]"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.h1
            className="font-[400] text-[28px] mb-[65px]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Service Type
          </motion.h1>

          {Object.keys(services).map((service, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleServiceClick(service)}
              onMouseEnter={() => setIsHovered(idx)}
              onMouseLeave={() => setIsHovered(null)}
              className="relative w-full whitespace-nowrap md:text-[24px] font-[400] text-start p-1 pb-[6px] cursor-pointer"
            >
              <motion.span
                className="flex items-center gap-3"
                animate={{
                  color: activeService === service ? "#000000" : "#646567",
                  fontWeight: activeService === service ? 500 : 400,
                  transition: { duration: 0.5 },
                }}
              >
                <img
                  className={`${activeService !== service && "opacity-50"} ${
                    services[service].svg === "development2" ? "scale-70" : ""
                  }`}
                  width={24}
                  src={`/svgs/${services[service].svg}.svg`}
                  alt=""
                />
                {service}
              </motion.span>

              {/* Background track */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#EAEAEA]"></div>

              {/* Default state underline (only visible when not active and not hovered) */}
              {!isHovered && activeService !== service && (
                <motion.div
                  className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-l from-[#4885EF] via-[#C560CF] to-[#DA5381]"
                  style={{ width: `${buttonStates[service]}%` }}
                />
              )}

              {/* Hover/active underline with transform animation */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-l from-[#4885EF] via-[#C560CF] to-[#DA5381]"
                initial={{
                  transform:
                    service === "Software Development"
                      ? "scaleX(1)"
                      : "scaleX(0)",
                  transformOrigin: "left",
                }}
                animate={{
                  transform:
                    activeService === service ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: activeService === service ? "left" : "right",
                  transition: {
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Right Panel with AnimatePresence for smooth transitions */}
        <motion.div
          className="border md:col-span-2 border-[#EAEAEA] rounded-[25px] w-flex px-[40px] py-[50px] space-y-[40px] overflow-hidden"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <AnimatePresence mode="wait" custom={getDirection()}>
            <motion.div
              key={activeService}
              custom={getDirection()}
              initial={{
                opacity: 0,
                x: getDirection() > 0 ? 50 : -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: getDirection() > 0 ? -50 : 50,
                transition: { duration: 0.3 },
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2
                  className="text-[24px] flex items-center gap-3 font-medium bg-gradient-to-r from-[#6D39F3] via-[#3956EB] to-[#6D39F3] bg-clip-text text-transparent"
                  style={{ backgroundSize: "200% 100%" }}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    backgroundPosition: [
                      "0% center",
                      "100% center",
                      "0% center",
                    ],
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }}
                >
                  <img
                    className="fill-black"
                    width={24}
                    src={`/svgs/${services[activeService].svg}.svg`}
                    alt=""
                  />
                  {activeService}
                </motion.h2>
                <motion.p
                  className="text-[#0C0E12]/60 text-[18px] font-normal leading-7 mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {activeData.description}
                </motion.p>
              </motion.div>

              {/* Dynamic Content with staggered animations */}
              <motion.div
                className="space-y-5 mt-[40px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {Object.entries(activeData).map(([key, value], idx) => {
                  if (key === "description" || key === "svg") return null;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + idx * 0.1,
                      }}
                    >
                      <h3 className="text-[16px] font-normal mb-2 capitalize">
                        {key}
                      </h3>
                      <div className="flex flex-wrap gap-5">
                        {value.map((item, i) => (
                          <motion.div
                            key={i}
                            className="w-[60px] aspect-square rounded-full bg-[#F5F5F5] p-3 flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 15,
                              delay: 0.1,
                            }}
                            whileHover={{
                              scale: 1.1,
                              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                              transition: { duration: 0.1 },
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.img
                              src={`/images/${item}.png`}
                              alt=""
                              whileHover={
                                {
                                  // rotate: [0, -5, 5, 0],
                                  // transition: {
                                  //   duration: 0.2,
                                  //   repeat: Infinity,
                                  //   repeatType: "reverse",
                                  // },
                                }
                              }
                              className="bg-[#F5F5F5] scale-125"
                              width={24}
                              height={24}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
