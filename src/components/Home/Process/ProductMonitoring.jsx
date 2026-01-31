import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProductMonitoring() {
  const data = [
    { id: "01", title: "Monitor product usage and gather feedback." },
    { id: "02", title: "Address critical issues and bugs." },
    { id: "03", title: "Provide ongoing support and maintenance." },
    { id: "04", title: "Release necessary updates." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 2200);

    return () => clearInterval(timer);
  }, [isPaused]);

  const getCard = (indexOffset) => {
    const index = (currentIndex + indexOffset) % data.length;
    return data[index];
  };

  return (
    <div
      className="relative hidden md:flex md:w-full h-full bg-[#F6F6F9] rounded-[30px] overflow-hidden  items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={handleNext}
      >
        {[3, 2, 1, 0].map((offset) => {
          const card = getCard(offset);
          const isTopCard = offset === 0;

          const scale = 1 - offset * 0.05;
          const yOffset = offset * 30;
          const xOffset = offset * 30;
          const zIndex = 10 - offset;

          return (
            <motion.div
              key={`${card.id}-${currentIndex}`}
              initial={{
                y: yOffset,
                x: xOffset,
                opacity: 1,
              }}
              animate={
                isTopCard
                  ? { y: -200, x: -150, opacity: 0 }
                  : { y: yOffset, x: xOffset, opacity: 1 - offset * 0 }
              }
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute w-[413px] h-[397px] bg-white rounded-[30px] p-10 flex flex-col justify-between shadow-lg"
              style={{
                transform: `scale(${scale})`,
                zIndex: zIndex,
              }}
            >
              <div>
                <h1 className="font-normal text-black text-[39px]">
                  {card.id}
                </h1>
              </div>
              <div>
                <h1 className="font-normal text-[39px] bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] bg-clip-text text-transparent">
                  {card.title}
                </h1>
              </div>
            </motion.div>
          );
        })}
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
