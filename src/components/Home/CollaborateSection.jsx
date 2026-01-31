// import { ArrowUpRight } from "lucide-react"
// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { motion } from "framer-motion"

// const cards = [
//   {
//     title: "Sumofame",
//     img: "/images/sumoFame.png",
//     imgHeight: "h-[57px]",
//     description: "Marketing & Content\nCreation",
//     svg: <svg width="213" height="213" viewBox="0 0 213 213" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <g filter="url(#filter0_f_1_943)">
//         <path d="M101.668 155.021C101.668 176.307 103.964 197.233 108.334 215.787C112.705 234.34 119.003 249.896 126.622 260.956C134.242 272.016 142.926 278.209 151.838 278.937C160.751 279.665 169.592 274.904 177.51 265.113C185.429 255.322 192.158 240.831 197.05 223.034C201.941 205.237 204.831 184.734 205.441 163.499C206.051 142.263 204.36 121.011 200.531 101.788" stroke="url(#paint0_linear_1_943)" stroke-opacity="0.4" stroke-width="89.1799" stroke-linecap="round" stroke-linejoin="round" />
//       </g>
//       <defs>
//         <filter id="filter0_f_1_943" x="0.716446" y="0.827286" width="305.798" height="379.143" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//           <feFlood flood-opacity="0" result="BackgroundImageFix" />
//           <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//           <feGaussianBlur stdDeviation="28.1808" result="effect1_foregroundBlur_1_943" />
//         </filter>
//         <linearGradient id="paint0_linear_1_943" x1="194.61" y1="94.5472" x2="77.2454" y2="119.011" gradientUnits="userSpaceOnUse">
//           <stop stop-color="#008AB3" />
//           <stop offset="0.313324" stop-color="#F6048D" />
//           <stop offset="0.780691" stop-color="#FE0028" stop-opacity="0.83" />
//           <stop offset="1" stop-color="#FE0028" />
//         </linearGradient>
//       </defs>
//     </svg>
//   },
//   {
//     title: "Resource Solution",
//     img: "/images/G.png",
//     imgHeight: "h-[51px]",
//     description: "Recruitment\n& Staffing",
//     svg: <svg width="213" height="213" viewBox="0 0 213 213" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <g filter="url(#filter0_f_1_1214)">
//         <path d="M101.668 155.021C101.668 176.307 103.964 197.233 108.334 215.787C112.705 234.34 119.003 249.896 126.622 260.956C134.242 272.016 142.926 278.209 151.838 278.937C160.751 279.665 169.592 274.904 177.51 265.113C185.429 255.322 192.158 240.831 197.05 223.034C201.941 205.237 204.831 184.734 205.441 163.499C206.051 142.263 204.36 121.011 200.531 101.788" stroke="#E73235" stroke-opacity="0.44" stroke-width="89.1799" stroke-linecap="round" stroke-linejoin="round" />
//       </g>
//       <defs>
//         <filter id="filter0_f_1_1214" x="0.716446" y="0.827286" width="305.798" height="379.143" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//           <feFlood flood-opacity="0" result="BackgroundImageFix" />
//           <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//           <feGaussianBlur stdDeviation="28.1808" result="effect1_foregroundBlur_1_1214" />
//         </filter>
//       </defs>
//     </svg>
//   },
//   {
//     title: "Akashkash",
//     img: "/images/Lion.png",
//     imgHeight: "h-[53px]",
//     description: "Ad Films\n& Photography",
//     svg: <svg width="213" height="213" viewBox="0 0 213 213" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <g filter="url(#filter0_f_1_1230)">
//         <path d="M101.668 155.021C101.668 176.307 103.964 197.233 108.334 215.787C112.705 234.34 119.003 249.896 126.622 260.956C134.242 272.016 142.926 278.209 151.838 278.937C160.751 279.665 169.592 274.904 177.51 265.113C185.429 255.322 192.158 240.831 197.05 223.034C201.941 205.237 204.831 184.734 205.441 163.499C206.051 142.263 204.36 121.011 200.531 101.788" stroke="#E6CC87" stroke-width="89.1799" stroke-linecap="round" stroke-linejoin="round" />
//       </g>
//       <defs>
//         <filter id="filter0_f_1_1230" x="0.716446" y="0.827286" width="305.798" height="379.143" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//           <feFlood flood-opacity="0" result="BackgroundImageFix" />
//           <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//           <feGaussianBlur stdDeviation="28.1808" result="effect1_foregroundBlur_1_1230" />
//         </filter>
//       </defs>
//     </svg>
//   },
//   {
//     title: "Consultation",
//     img: "/images/human.png",
//     imgHeight: "h-[50px]",
//     description: "Business strategy\n& digital transformation",
//     svg: <svg width="213" height="213" viewBox="0 0 213 213" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <g filter="url(#filter0_f_1_1244)">
//         <path d="M101.668 155.021C101.668 176.307 103.964 197.233 108.334 215.787C112.705 234.34 119.003 249.896 126.622 260.956C134.242 272.016 142.926 278.209 151.838 278.937C160.751 279.665 169.592 274.904 177.51 265.113C185.429 255.322 192.158 240.831 197.05 223.034C201.941 205.237 204.831 184.734 205.441 163.499C206.051 142.263 204.36 121.011 200.531 101.788" stroke="#DEC294" stroke-width="89.1799" stroke-linecap="round" stroke-linejoin="round" />
//       </g>
//       <defs>
//         <filter id="filter0_f_1_1244" x="0.716446" y="0.827286" width="305.798" height="379.143" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//           <feFlood flood-opacity="0" result="BackgroundImageFix" />
//           <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//           <feGaussianBlur stdDeviation="28.1808" result="effect1_foregroundBlur_1_1244" />
//         </filter>
//       </defs>
//     </svg>
//   },
// ];

// // Animation variants for staggered animations
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.3
//     }
//   }
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.5 }
//   }
// };

// // Text animation variants
// const textVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" }
//   }
// };

// export default function CollaborateSection() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   return (
//     <motion.section
//       className="w-full mt-20"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="">
//         <div className="w-full md:flex">
//           {/* Heading */}
//           <motion.div
//             className="md:w-1/2"
//             variants={textVariants}
//           >
//             <h2 className="md:text-[52px] text-4xl font-[400] md:leading-13">
//               We Also
//               <br />
//               <motion.span
//                 className="bg-gradient-to-r from-[#4885EF] via-[#C560CF] to-[#DA5381] bg-clip-text text-transparent inline-block"
//                 style={{ backgroundSize: "200% 100%" }}
//                 animate={{
//                   backgroundPosition: ["0% center", "100% center", "0% center"],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   ease: "easeInOut",

//                 }}
//               >
//                 Collaborate With
//               </motion.span>
//             </h2>
//           </motion.div>

//           {/* Description */}
//           <motion.div
//             className="md:w-1/2 md:flex mt-5 md:mt-0 items-center justify-end"
//             variants={textVariants}
//           >
//             <p className="text-[#0C0E12]/60 text-[20px] font-normal w-3/4">
//               Through our subsidiary companies, we deliver fully integrated business solutions, ensuring every aspect of
//               your business is expertly managed for optimal success.
//             </p>
//           </motion.div>
//         </div>

//         {/* Cards Grid */}
//         <motion.div
//           className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
//           variants={containerVariants}
//         >
//           {cards.map((card, i) => (
//             <motion.div
//               key={i}
//               variants={itemVariants}
//               onHoverStart={() => setHoveredCard(i)}
//               onHoverEnd={() => setHoveredCard(null)}
//               whileHover={{
//                 scale: 1.03,
//                 transition: { duration: 0.3 }
//               }}
//             >
//               <Link
//                 to="#"
//                 className="group w-full relative overflow-hidden aspect-square rounded-[42px] bg-[#F6F6F9] px-[33px] py-[14px] flex flex-col justify-between"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <motion.img
//                       src={card.img}
//                       alt=""
//                       className={`object-contain ${card.imgHeight} mb-2`}
//                       initial={{ opacity: 0, scale: 0 }}
//                       animate={{
//                         opacity: hoveredCard === i ? 1 : 0,
//                         scale: hoveredCard === i ? 1 : 0,
//                         y: hoveredCard === i ? 0 : -10
//                       }}
//                       transition={{ duration: 0.3 }}
//                     />
//                     <motion.h3
//                       className="text-[24px] font-medium"
//                       animate={{
//                         y: hoveredCard === i ? 0 : -5,
//                         color: hoveredCard === i ? "#6D39F3" : "#0C0E12"
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       {card.title}
//                     </motion.h3>
//                   </div>
//                   <motion.div
//                     className="bg-white rounded-full h-[86px] aspect-square text-black flex items-center justify-center"
//                     animate={{
//                       backgroundColor: hoveredCard === i ? "#000000" : "#FFFFFF",
//                       color: hoveredCard === i ? "#FFFFFF" : "#000000"
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <motion.div
//                       animate={{
//                         rotate: hoveredCard === i ? 45 : 0,
//                         scale: hoveredCard === i ? 1.2 : 1
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <ArrowUpRight size={40} />
//                     </motion.div>
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   className="flex justify-between items-end mb-6"
//                   animate={{
//                     y: hoveredCard === i ? 0 : 10,
//                     opacity: hoveredCard === i ? 1 : 0.8
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <p className="text-[20px] font-[400] text-[#0C0E12] whitespace-pre-line">
//                     {card.description}
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   className="absolute bottom-0 -right-5"
//                   initial={{ opacity: 0, scale: 0.8, y: 20 }}
//                   animate={{
//                     opacity: hoveredCard === i ? 1 : 0,
//                     scale: hoveredCard === i ? 1 : 0.8,
//                     y: hoveredCard === i ? 0 : 20
//                   }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {card.svg}
//                 </motion.div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   )
// }

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Sumofame",
    img: "/images/sumoFame.png",
    imgHeight: "h-[57px]",
    link: "https://sumofame.com",
    description: "Marketing & Content\nCreation",
    svg: (
      <svg
        width="213"
        height="213"
        viewBox="0 0 213 213"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1_943)">
          <path
            d="M101.668 155.021C101.668 176.307 103.964 197.233 108.334 215.787C112.705 234.34 119.003 249.896 126.622 260.956C134.242 272.016 142.926 278.209 151.838 278.937C160.751 279.665 169.592 274.904 177.51 265.113C185.429 255.322 192.158 240.831 197.05 223.034C201.941 205.237 204.831 184.734 205.441 163.499C206.051 142.263 204.36 121.011 200.531 101.788"
            stroke="url(#paint0_linear_1_943)"
            stroke-opacity="0.4"
            stroke-width="89.1799"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_943"
            x="0.716446"
            y="0.827286"
            width="305.798"
            height="379.143"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="28.1808"
              result="effect1_foregroundBlur_1_943"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1_943"
            x1="194.61"
            y1="94.5472"
            x2="77.2454"
            y2="119.011"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#008AB3" />
            <stop offset="0.313324" stop-color="#F6048D" />
            <stop offset="0.780691" stop-color="#FE0028" stop-opacity="0.83" />
            <stop offset="1" stop-color="#FE0028" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Resource Solution",
    img: "/images/G.png",
    imgHeight: "h-[51px]",
    link: "https://goodluck.agency",
    description: "Recruitment\n& Staffing",
    svg: (
      <svg
        width="213"
        height="213"
        viewBox="0 0 213 213"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1_1214)">
          <path
            d="M101.668 155.021C101.668 176.307 103.964 197.233 108.334 215.787C112.705 234.34 119.003 249.896 126.622 260.956C134.242 272.016 142.926 278.209 151.838 278.937C160.751 279.665 169.592 274.904 177.51 265.113C185.429 255.322 192.158 240.831 197.05 223.034C201.941 205.237 204.831 184.734 205.441 163.499C206.051 142.263 204.36 121.011 200.531 101.788"
            stroke="#E73235"
            stroke-opacity="0.44"
            stroke-width="89.1799"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_1214"
            x="0.716446"
            y="0.827286"
            width="305.798"
            height="379.143"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="28.1808"
              result="effect1_foregroundBlur_1_1214"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
  {
    title: "Akashkash",
    img: "/images/Lion.png",
    imgHeight: "h-[53px]",
    link: "https://fanollywood.com",
    description: "Ad Films\n& Photography",
    svg: (
      <svg
        width="213"
        height="213"
        viewBox="0 0 213 213"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1_1230)">
          <path
            d="M101.668 155.021C101.668 176.307 103.964 197.233 108.334 215.787C112.705 234.34 119.003 249.896 126.622 260.956C134.242 272.016 142.926 278.209 151.838 278.937C160.751 279.665 169.592 274.904 177.51 265.113C185.429 255.322 192.158 240.831 197.05 223.034C201.941 205.237 204.831 184.734 205.441 163.499C206.051 142.263 204.36 121.011 200.531 101.788"
            stroke="#E6CC87"
            stroke-width="89.1799"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_1230"
            x="0.716446"
            y="0.827286"
            width="305.798"
            height="379.143"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="28.1808"
              result="effect1_foregroundBlur_1_1230"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
  {
    title: "Consultation",
    img: "/images/human.png",
    imgHeight: "h-[50px]",
    link: "https://akashkash.com",
    description: "Business strategy\n& digital transformation",
    svg: (
      <svg
        width="213"
        height="213"
        viewBox="0 0 213 213"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1_1244)">
          <path
            d="M101.668 155.021C101.668 176.307 103.964 197.233 108.334 215.787C112.705 234.34 119.003 249.896 126.622 260.956C134.242 272.016 142.926 278.209 151.838 278.937C160.751 279.665 169.592 274.904 177.51 265.113C185.429 255.322 192.158 240.831 197.05 223.034C201.941 205.237 204.831 184.734 205.441 163.499C206.051 142.263 204.36 121.011 200.531 101.788"
            stroke="#DEC294"
            stroke-width="89.1799"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_1244"
            x="0.716446"
            y="0.827286"
            width="305.798"
            height="379.143"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="28.1808"
              result="effect1_foregroundBlur_1_1244"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
];

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CollaborateSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <motion.section
      className="w-full mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="">
        <div className="w-full md:flex">
          {/* Heading */}
          <motion.div className="md:w-1/2 " variants={textVariants}>
            <h2 className="md:text-[52px] text-4xl font-[400] md:leading-13">
              We Also
              <br />
              <motion.span
                className="bg-gradient-to-r from-[#4885EF] via-[#C560CF] to-[#DA5381] bg-clip-text text-transparent inline-block"
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
                Collaborate With
              </motion.span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            className="md:w-1/2 md:flex mt-5 md:mt-0 items-center justify-end"
            variants={textVariants}
          >
            <p className="text-[#0C0E12]/60 text-[20px] font-normal md:w-3/4">
              Through our subsidiary companies, we deliver fully integrated
              business solutions, ensuring every aspect of your business is
              expertly managed for optimal success.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
          variants={containerVariants}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
            >
              <Link
                target="_blank"
                to={card.link}
                className="group w-full relative overflow-hidden aspect-square rounded-[42px] bg-[#F6F6F9] px-[33px] py-[14px] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <motion.img
                      src={card.img}
                      alt=""
                      className={`object-contain ${card.imgHeight} mb-2`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: hoveredCard === i ? 1 : 0,
                        scale: hoveredCard === i ? 1 : 0,
                        y: hoveredCard === i ? 0 : -10,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.h3
                      className="text-[24px] font-medium"
                      animate={{
                        y: hoveredCard === i ? 0 : -5,
                        color: hoveredCard === i ? "#6D39F3" : "#0C0E12",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {card.title}
                    </motion.h3>
                  </div>
                  <motion.div
                    className="bg-white rounded-full h-[86px] aspect-square text-black flex items-center justify-center"
                    animate={{
                      backgroundColor:
                        hoveredCard === i ? "#000000" : "#FFFFFF",
                      color: hoveredCard === i ? "#FFFFFF" : "#000000",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{
                        rotate: hoveredCard === i ? 45 : 0,
                        scale: hoveredCard === i ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight size={40} />
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
                  className="flex justify-between items-end mb-6"
                  animate={{
                    y: hoveredCard === i ? 0 : 10,
                    opacity: hoveredCard === i ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[20px] font-[400] text-[#0C0E12] whitespace-pre-line">
                    {card.description}
                  </p>
                </motion.div>

                <motion.div
                  className="absolute bottom-0 -right-5"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{
                    opacity: hoveredCard === i ? 1 : 0,
                    scale: hoveredCard === i ? 1 : 0.8,
                    y: hoveredCard === i ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {card.svg}
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
