"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, transform } from "framer-motion";

const data = [
  { id: "01", title: "Create and execute test cases." },
  { id: "02", title: "Perform manual and automated tests." },
  { id: "03", title: "Fix bugs and validate functionality." },
  { id: "04", title: "Perform load and security testing." },
];

const VISIBLE_CARDS = 3; // Number of cards to show in the stack

const cardVariants = {
  initial: (i) => ({
    opacity: 1,
    y: 20 * i,
    scale: 1 - 0.05 * i,
    zIndex: data.length - i,
    boxShadow: `0px ${8 + 4 * i}px ${24 + 8 * i}px 0px rgba(0,0,0,0.15)`,
  }),
  exit: {
    opacity: 0,
    y: -400,
    rotate: 40,
    transition: { duration: 0.8 },
  },
  animate: (i) => ({
    opacity: 1,
    y: 20 * i,
    scale: 1 - 0.05 * i,
    zIndex: data.length - i,
    boxShadow: `0px ${8 + 4 * i}px ${24 + 8 * i}px 0px rgba(0,0,0,0.15)`,
    transition: { type: "spring", bounce: 0.2, duration: 1.2 },
  }),
};

export default function Testing() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % data.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [current, isHovered]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % data.length);
  };

  return (
    <div className="relative hidden md:flex md:w-full h-full bg-[#F6F6F9] rounded-[30px] overflow-hidden  items-center justify-center">
      <div
        className="relative w-[546px] h-[343px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleNext}
        style={{ cursor: "pointer" }}
      >
        <AnimatePresence initial={false}>
          {data.slice(current, current + VISIBLE_CARDS).map((item, idx) => (
            <motion.div
              key={item.id}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] text-white rounded-[24px] px-6 py-8 shadow-2xl flex flex-col justify-between"
              custom={idx}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ zIndex: data.length - idx }}
              layoutId={item.id}
            >
              <h1 className="text-[40px] font-normal text-white">{item.id}</h1>
              <p className="text-[40px] font-normal text-white">{item.title}</p>
            </motion.div>
          ))}
        </AnimatePresence>
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
