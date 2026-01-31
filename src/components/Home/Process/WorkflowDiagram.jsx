import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WorkflowDiagram() {
  const [visibleSteps, setVisibleSteps] = useState(0);

  const workflowSteps = [
    {
      id: "01",
      text: "Create wireframes, UI mockups, and user flows.",
    },
    {
      id: "02",
      text: "Conduct user testing.",
    },
    {
      id: "03",
      text: "Iterate design based on feedback.",
    },
    {
      id: "04",
      text: "Finalize UI/UX design for development.",
    },
  ];

  useEffect(() => {
    if (visibleSteps < workflowSteps.length) {
      const timer = setTimeout(() => {
        setVisibleSteps((prev) => prev + 1);
      }, 500); // Show a new step every 0.5 seconds

      return () => clearTimeout(timer);
    }
  }, [visibleSteps, workflowSteps.length]);

  return (
    <div className="relative hidden md:flex md:w-full h-full bg-[#F6F6F9] rounded-[30px] overflow-hidden  items-center justify-center">
      <div className="z-10 flex flex-col items-center w-[425px] justify-between mx-auto gap-6 mt-5">
        {workflowSteps.map((step, index) => (
          <motion.div
            key={step.id}
            className="z-10 flex flex-col items-center w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={
              index < visibleSteps
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.5 }}
          >
            {/* Card with gradient background */}
            <div className="relative h-[125px] pt-5 flex items-center justify-center rounded-[37px] bg-gradient-to-br from-indigo-400 to-purple-600 text-white text-center shadow-lg w-full">
              {/* Circle with step number */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 -translate-y-0  flex items-center justify-center w-[78px] aspect-square rounded-full bg-gradient-to-b from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] text-white font-medium border-5 border-[#F4F4F7]">
                <span className="text-2xl">{step.id}</span>
              </div>
              <div className="font-normal text-[22px] px-4">{step.text}</div>
            </div>
            {/* Connector line (if not the last item) */}
            {index < workflowSteps.length - 1 && (
              <motion.div
                className="w-1 h-12 z-20 bg-purple-400"
                initial={{ scaleY: 0 }}
                animate={
                  index < visibleSteps - 1 ? { scaleY: 1 } : { scaleY: 0 }
                }
                transition={{ duration: 0.3, delay: 0.1 }}
              ></motion.div>
            )}
          </motion.div>
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
