"use client";
import { motion } from "framer-motion";

const data = [
  { id: "01", title: "Execute deployment (blue/green or rolling)." },
  { id: "02", title: "Provide end-user training." },
  { id: "03", title: "Monitor post-deployment." },
  { id: "04", title: "Ensure smooth transition to production." },
];

export default function Deployment() {
  return (
    <div className="relative hidden md:flex md:w-full h-full bg-[#F6F6F9] rounded-[30px] overflow-hidden  items-center justify-center">
      <div className="flex flex-col  gap-6 z-10 max-w-md w-full">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex items-center bg-white h-[126px] w-[516px] gap-6 py-[24px] px-[35px] rounded-[30px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: index * 0.4 }}
          >
            <div className="w-[77px] aspect-square rounded-full bg-gradient-to-br from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] flex items-center justify-center text-white font-normal text-[28px] shadow z-10 shrink-0">
              {item.id}
            </div>
            <p className="text-black text-[26px] font-normal">{item.title}</p>
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
