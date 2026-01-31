import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { title: "Our Services", link: "services" },
  { title: "Our Process", link: "process" },
  { title: "Contact Us", link: "contact" },
];

export const NavBar = ({ setIsVisibleCTASection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      className="bg-transparent w-full flex items-center justify-between py-[20px]"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -40, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src="/svgs/logo.svg" alt="Logo" className="h-[35px] w-[35px]" />
        <h1 className="text-xl Plus-Jakarta-Sans font-[700] text-[28.77px]">
          JuTech
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-[32px]">
        {links.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.4 }}
          >
            <motion.div whileHover="hover" className="relative">
              <ScrollLink
                onClick={() =>
                  item.link === "contact" && setIsVisibleCTASection(true)
                }
                to={item.link}
                duration={500}
                offset={-20}
                className="font-[400] whitespace-nowrap text-black relative px-0 pb-1 cursor-pointer underline-animation"
              >
                {item.title}
              </ScrollLink>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
