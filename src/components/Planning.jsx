import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Planning = () => {
  const [cardAnimationState, setCardAnimationState] = useState('initial');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const cardSequenceVariants = {
    initial: { x: 0, opacity: 0, scale: 0.9 },
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } },
    left: { x: -282, opacity: 1, scale: 1, transition: { duration: 0.5 } },
    right: { x: 282, opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  useEffect(() => {
    if (isInView) {
      const sequence = async () => {
        // First card comes to center
        setCardAnimationState('center');
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // First card moves left, second card comes to center
        setCardAnimationState('left');
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Second card moves left, third card comes to center
        setCardAnimationState('right');
      };
      
      sequence();
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      className="w-full py-16 flex items-center justify-center"
    >
      <div className="relative w-full max-w-[900px] h-[690px] rounded-3xl bg-[#F6F6F9] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute -bottom-5 -left-5"
          animate={isInView ? { 
            rotate: [0, 5, 0, -5, 0],
            opacity: [0.8, 1, 0.8]
          } : {}}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <img src="/gradients/gradient1.svg" alt="" />
        </motion.div>

        <div className="px-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            {/* Card 1 */}
            <motion.div 
              className="bg-white rounded-lg p-4 w-[282px] h-[192px] shadow-sm"
              variants={cardSequenceVariants}
              initial="initial"
              animate={cardAnimationState}
              whileHover={{ scale: 1.03, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)" }}
            >
              <h1 className="text-[9.5px] text-[#C4C6C5] font-medium">PLANNING</h1>
              <h1 className="text-[12px] text-[#272727] font-medium">Strategic Planning</h1>
              <div className="w-full mt-2">
                <div className="border-dotted border-l-[0.69px] border-b-[0.69px] py-[5px] border-[#EDEDED] flex items-center justify-center">
                  <div className="flex items-center gap-2 bg-[#F6F6F5] rounded-full p-[1.37px] w-fit pr-2">
                    <div className="bg-white h-4 w-4 rounded-full flex items-center justify-center">
                      <img src="/svgs/leaf.svg" alt="" />
                    </div>
                    <h1 className="font-normal text-[9.5px] text-[#545454] whitespace-nowrap">Success</h1>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-3">
              {/* Card 2 */}
              <motion.div 
                className="bg-white rounded-lg p-4 w-[282px] h-[192px] shadow-sm"
                variants={cardSequenceVariants}
                initial="initial"
                animate={cardAnimationState}
                whileHover={{ scale: 1.03, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)" }}
              >
                <h1 className="text-[9.5px] text-[#C4C6C5] font-medium">PLANNING</h1>
                <h1 className="text-[12px] text-[#272727] font-medium">Resource Planning</h1>
                <div className="w-full mt-2">
                  <div className="border-dotted border-l-[0.69px] py-1 border-[#EDEDED] items-center justify-center">
                    <div className="w-[156px] h-[127px] relative -space-y-16 mx-auto">
                      <motion.div 
                        className="h-[93px] p-[6px] shadow-md aspect-square rounded-full bg-white border-[0.79px] border-[#DCDCDC]"
                        animate={isInView ? { 
                          y: [0, -5, 0, -5, 0],
                          rotate: [0, 5, 0]
                        } : {}}
                        transition={{ 
                          duration: 8, 
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <div className="flex flex-col bg-gradient-to-br from-[#C0AEFE] border-[0.79px] border-[#4A4DEE] via-[#6D39F3] to-[#3956EB] items-center justify-center rounded-full h-full w-full">
                          <h1 className="font-medium text-[13px] text-white">Team</h1>
                          <h1 className="font-normal text-[8px] text-white">Resources</h1>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                className="bg-white rounded-lg p-4 w-[282px] h-[192px] shadow-sm"
                variants={cardSequenceVariants}
                initial="initial"
                animate={cardAnimationState}
                whileHover={{ scale: 1.03, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)" }}
              >
                <h1 className="text-[9.5px] text-[#C4C6C5] font-medium">PLANNING</h1>
                <h1 className="text-[12px] text-[#272727] font-medium">Timeline Planning</h1>
                <div className="w-full mt-2 border-t-[0.69px] border-[#EDEDED] pt-2 flex flex-col gap-2">
                  {[
                    { name: 'Phase 1', progress: 90 },
                    { name: 'Phase 2', progress: 85 },
                    { name: 'Phase 3', progress: 92 },
                    { name: 'Phase 4', progress: 88 }
                  ].map((phase, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center justify-between"
                      initial={{ width: 0, opacity: 0 }}
                      animate={isInView ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }}
                      transition={{ delay: 0.5 + (index * 0.2), duration: 0.4 }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-[16px] aspect-square bg-[#292929] rounded-full w-4 flex items-center justify-center">
                          <h1 className="text-[9px] font-medium text-white">
                            {index + 1}
                          </h1>
                        </div>
                        <div className="leading-3">
                          <h1 className="text-[#2A2A2A] text-[9.5px] font-medium">{phase.name}</h1>
                          <h2 className="text-[#C4C6C5] text-[8.2px] font-normal">Progress: {phase.progress}%</h2>
                        </div>
                      </div>

                      <div className="w-[124px] h-2 overflow-hidden bg-[#EEEEEE] rounded-full">
                        <motion.div 
                          className="h-full bg-[#7B4FF7] rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${phase.progress}%` } : { width: 0 }}
                          transition={{ delay: 1 + (index * 0.2), duration: 0.8 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planning; 