import { motion } from "framer-motion";
import { useEffect } from "react";

const TechLogos = ({ techLogos, hovering }) => {
  return (
    <motion.div
      className="absolute -top-40 bottom-0 right-10 flex flex-col gap-5 flex-wrap md:h-[596px] -rotate-45 items-center justify-center overflow-hidden"
      animate={{
        x: hovering ? 40 : 0,
        opacity: hovering ? 0.4 : 1,
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Scrolling container */}
      <motion.div
        className="flex flex-col gap-5"
        animate={{ y: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {/* Repeat logos twice for seamless scroll */}
        {[...techLogos, ...techLogos].map((logo, idx) => (
          <div key={idx} className="md:w-[100px] w-10 aspect-square">
            <div className="rounded-full w-full rotate-90 aspect-square bg-[#F5F5F5] border-[4px] border-white flex items-center justify-center p-4">
              <img src={logo} className="w-full" alt="" />
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TechLogos;
