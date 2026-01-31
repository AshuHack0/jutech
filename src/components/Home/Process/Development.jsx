import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  { id: "01", title: "Develop in sprints or phases." },
  { id: "02", title: "Use version control (Git) and peer reviews." },
  { id: "03", title: "Implement unit and integration tests." },
  { id: "04", title: "Complete core features." },
];

export default function Development() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prev) => (prev + 1) % data.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const getCardStyles = (index) => {
    // Calculate position in stack relative to active card
    const diff = (index - activeIndex + data.length) % data.length;

    // Position 0 is front, others are stacked behind with increasing z-index
    return {
      zIndex: data.length - diff,
      scale: 1 - diff * 0.05, // Each card slightly smaller
      y: diff * 10, // Each card slightly lower
      opacity: diff === 0 ? 1 : 0.8 - diff * 0.15, // Front card full opacity, others faded
      rotateZ: diff === 0 ? 0 : diff * -1, // Slight rotation for stack effect
    };
  };

  return (
    <div
      className="relative hidden md:block md:w-full h-full bg-[#F6F6F9] rounded-[30px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative top-1/2 left-1/2">
        {data.map((item, index) => (
          <AnimatePresence key={item.id} mode="popLayout">
            <motion.div
              className="absolute w-[546px] h-[343px] -translate-y-1/2 -translate-x-1/2 bg-gradient-to-br from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] text-white px-[37px] py-[43px] rounded-[37px] flex flex-col justify-between"
              initial={{
                scale: 0.9,
                y: 50,
                opacity: 0,
                zIndex: -1,
              }}
              animate={getCardStyles(index)}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 1.2,
              }}
              onClick={() => setActiveIndex((prev) => (prev + 1) % data.length)}
              style={{ cursor: "pointer" }}
            >
              <h1 className="text-[40px] font-normal">{item.id}</h1>
              <p className="text-[40px] font-normal">{item.title}</p>
            </motion.div>
          </AnimatePresence>
        ))}
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
}
