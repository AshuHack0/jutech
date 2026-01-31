import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Planning() {
  const data = [
    { id: "01", title: "Develop project plan and timeline." },
    { id: "02", title: "Design system architecture and tech stack." },
    { id: "03", title: "Identify risks and mitigation strategies." },
    { id: "04", title: "Allocate resources." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % data.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [data.length, isHovered]);

  const getCard = (offset) => {
    const index = (currentIndex + offset + data.length) % data.length;
    return data[index];
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const handleCardClick = (offset) => {
    if (offset === 0) {
      handleNext();
    } else {
      setCurrentIndex((prev) => (prev + offset + data.length) % data.length);
    }
  };

  return (
    <div
      className="relative hidden md:flex md:w-full h-full bg-[#F6F6F9] rounded-[30px] overflow-hidden  items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden z-10">
        {[-1, 0, 1].map((offset) => {
          const card = getCard(offset);
          const isActive = offset === 0;
          const marginTopClass = isActive ? "" : "mt-10";

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8, x: offset * 500 }}
              animate={{
                opacity: isActive ? 1 : 0.8,
                scale: isActive ? 1 : 0.9,
                x: offset * 460,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
                duration: 0.5,
              }}
              className={`absolute ${marginTopClass} ${
                isActive
                  ? "bg-gradient-to-b from-[#C0AEFE] via-[#6D39F3] to-[#3956EB]"
                  : "bg-white"
              } w-[413px] h-[500px] rounded-[37px] px-[43px] py-[37px] flex flex-col justify-between shadow-md cursor-pointer`}
              style={{ zIndex: isActive ? 10 : 1 }}
              onClick={() => handleCardClick(offset)}
            >
              <div>
                <h1
                  className={`font-normal text-[40px] ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  {card.id}
                </h1>
              </div>
              <div>
                <h1
                  className={`font-normal text-[40px] ${
                    isActive
                      ? "text-white"
                      : "bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] bg-clip-text text-transparent"
                  }`}
                >
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
