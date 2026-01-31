import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const stats = [
    { value: 23, label: "Major projects worked" },
    { value: 76, label: "Minor Projects" },
    { value: 17, label: "Clients served" },
    { value: 2, label: "Years in Business" },
  ];

  // Improved intersection observer settings
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Lower threshold to trigger animation earlier
    rootMargin: "-50px 0px", // Trigger slightly before fully in view
  });

  // For subtle scroll effect
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.8, 0.9],
    [0.95, 1, 1, 0.95]
  );

  const elementRef = useRef(null);
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasScrolledIntoView || !elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const threshold = viewportHeight * 0.9; 

      if (rect.top <= threshold) {
        elementRef.current.scrollIntoView({ behavior: "smooth" });
        setHasScrolledIntoView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolledIntoView]);



  return (
    <div ref={elementRef}>
    <motion.div
      id="stats"
      ref={ref}
      className="w-full md:mt-36 mt-10 py-[49px]"
      style={{ opacity }}
    >
      <div
        className="grid grid-cols-4 text-center md:text-start md:h-[93px] md:gap-[56px] w-full"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`flex-1 w-full px-2 md:px-0 h-full ${
              index === stats.length - 1 ? "" : "border-r-[1px]"
            } border-[#AEAEAE] flex flex-col`}
            initial={{ opacity: 0, y: 30 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: 0.1 * index, // Staggered delay based on index
                      ease: [0.25, 0.1, 0.25, 1], // Custom easing curve
                    },
                  }
                : {}
            }
          >
            <motion.p
              className="md:text-[52px] text-2xl font-[500] text-black"
              initial={{ scale: 0.9 }}
              animate={
                inView
                  ? {
                      scale: [0.9, 1.1, 1],
                      transition: {
                        duration: 0.7,
                        delay: 0.2 * index + 0.3,
                        times: [0, 0.6, 1],
                        ease: "easeOut",
                      },
                    }
                  : {}
              }
              // whileHover={{
              //   color: "#6D39F3",
              //   transition: { duration: 0.3 },
              // }}
            >
              {inView && (
                <CountUp
                  end={stat.value}
                  duration={1.5 + index * 0.2} // Different duration for each stat
                  delay={0.1 * index + 0.2} // Staggered delay
                  suffix="+"
                  useEasing={true}
                />
              )}
            </motion.p>

            <motion.p
              className="md:text-[24px] font-[400] text-[#434343] mt-[5px]"
              initial={{ opacity: 0, x: -5 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.2 * index + 0.6, // Start after number animation
                        ease: "easeOut",
                      },
                    }
                  : {}
              }
            >
              {stat.label}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.div>
    </div>
  );
};

export default StatsSection;
