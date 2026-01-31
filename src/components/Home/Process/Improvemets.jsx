import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Improvement() {
  const data = [
    { id: "01", title: "Collect user feedback regularly." },
    { id: "02", title: "Prioritize and implement improvements." },
    { id: "03", title: "Release iterative updates." },
    { id: "04", title: "Track performance and user satisfaction." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.length, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const getCard = (offset) => {
    const index = (currentIndex + offset + data.length) % data.length;
    return data[index];
  };

  return (
    <div
      className="relative hidden md:flex md:w-full h-full bg-[#F6F6F9] rounded-[30px] overflow-hidden  items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
        {[-1, 0, 1].map((offset) => {
          const card = getCard(offset);
          const isActive = offset === 0;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8, x: offset * 500 }}
              animate={{
                opacity: isActive ? 1 : 0.4,
                scale: isActive ? 1 : 0.9,
                x: offset * 460,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-[413px] h-[397px] bg-white rounded-[37px] px-[43px] py-[37px] flex flex-col justify-between shadow-md cursor-pointer"
              style={{ zIndex: isActive ? 10 : 1 }}
              onClick={handleNext}
            >
              <div>
                <h1 className="font-normal text-black text-[40px]">
                  {card.id}
                </h1>
              </div>
              <div>
                <h1 className="font-normal text-[40px] bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] bg-clip-text text-transparent">
                  {card.title}
                </h1>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Gradient background */}
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
