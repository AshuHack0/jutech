import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { title: "Our Services", link: "/services" },
  { title: "Our Process", link: "/process" },
  { title: "Contact Us", link: "/contact" },
];

export const NavBar = () => {
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
      {/* Logo Section — single h1 is in HeroSection for SEO */}
      <Link to="/" className="flex items-center gap-2" aria-label="JuTech home">
        <img src="/svgs/logo.svg" alt="JuTech logo" className="h-[35px] w-[35px]" />
        <span className="text-xl Plus-Jakarta-Sans font-[700] text-[28.77px]">
          JuTech
        </span>
      </Link>

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
              <Link
                to={item.link}
                className="font-[400] whitespace-nowrap text-black relative px-0 pb-1 cursor-pointer underline-animation"
              >
                {item.title}
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
