// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import ProjectInitiation from "./Process/ProjectInitiation";
// import Gathering from "./Process/Gathering";
// import Planning from "./Process/Planning";
// import WorkflowDiagram from "./Process/WorkflowDiagram";
// import Testing from "./Process/Testing";
// import Development from "./Process/Development";
// import Deployment from "./Process/Deployment";
// import Improvement from "./Process/Improvemets";
// import ProductMonitoring from "./Process/ProductMonitoring";

// const ProcessTimeline = () => {
//   const [activeStep, setActiveStep] = useState(1);

//   const steps = [
//     {
//       id: 1,
//       number: "01",
//       title: "Project Initiation",
//       icon: "svgs/processtimeline/1.svg",
//       goal: "Align stakeholders on project objectives.",
//       content: [
//         "Define project scope and objectives.",
//         "Identify and prioritize stakeholders.",
//         "Assess risks and mitigation strategies.",
//         "Create Project Charter.",
//       ],
//     },
//     {
//       id: 2,
//       number: "02",
//       title: "Requirements Gathering and Analysis",
//       icon: "svgs/processtimeline/2.svg",
//       goal: "Define product requirements clearly.",
//       content: [
//         "Conduct workshops and interviews.",
//         "Create a product backlog or requirements document.",
//         "Define user stories with acceptance criteria.",
//         "Prioritize features.",
//       ],
//     },
//     {
//       id: 3,
//       number: "03",
//       title: "Planning and Design",
//       icon: "svgs/processtimeline/3.svg",
//       goal: "Plan and design system architecture.",
//       content: [
//         "Develop project plan and timeline.",
//         "Design system architecture and tech stack.",
//         "Identify risks and mitigation strategies.",
//         "Allocate resources.",
//       ],
//     },
//     {
//       id: 4,
//       number: "04",
//       title: "UI/UX Design",
//       icon: "svgs/processtimeline/4.svg",
//       goal: "Design an intuitive user interface.",
//       content: [
//         "Create wireframes, UI mockups, and user flows.",
//         "Conduct user testing.",
//         "Iterate design based on feedback.",
//         "Finalize UI/UX design for development.",
//       ],
//     },
//     {
//       id: 5,
//       number: "05",
//       title: "Development and Coding",
//       icon: "svgs/processtimeline/5.svg",
//       goal: "Build the product.",
//       content: [
//         "Develop in sprints or phases.",
//         "Use version control (Git) and peer reviews.",
//         "Implement unit and integration tests.",
//         "Complete core features.",
//       ],
//     },
//     {
//       id: 6,
//       number: "06",
//       title: "Quality Assurance and Testing",
//       icon: "svgs/processtimeline/6.svg",
//       goal: "Ensure product quality.",
//       content: [
//         "Create and execute test cases.",
//         "Perform manual and automated tests.",
//         "Fix bugs and validate functionality.",
//         "Perform load and security testing.",
//       ],
//     },
//     {
//       id: 7,
//       number: "07",
//       title: "Deployment and Go Live",
//       icon: "svgs/processtimeline/7.svg",
//       goal: "Deploy the product successfully.",
//       content: [
//         "Execute deployment (blue/green or rolling).",
//         "Provide end-user training.",
//         "Monitor post-deployment.",
//         "Ensure smooth transition to production.",
//       ],
//     },
//     {
//       id: 8,
//       number: "08",
//       title: "Product Monitoring and Support",
//       icon: "svgs/processtimeline/8.svg",
//       goal: "Ensure continuous product performance.",
//       content: [
//         "Monitor product usage and gather feedback.",
//         "Address critical issues and bugs.",
//         "Provide ongoing support and maintenance.",
//         "Release necessary updates.",
//       ],
//     },
//     {
//       id: 9,
//       number: "09",
//       title: "Continuous Improvement",
//       icon: "svgs/processtimeline/9.svg",
//       goal: "Enhance the product based on feedback.",
//       content: [
//         "Collect user feedback regularly.",
//         "Prioritize and implement improvements.",
//         "Release iterative updates.",
//         "Track performance and user satisfaction.",
//       ],
//     },
//   ];

//   const handleStepClick = (stepId) => {
//     setActiveStep(stepId);
//   };

//   return (
//     <div id="process" className="w-full mx-auto p-8 bg-white font-sans">
//       <h2 className="text-center -mb-3">
//         <motion.span
//           className="bg-gradient-to-r from-[#4885EF] via-[#C560CF] to-[#DA5381] bg-clip-text text-transparent md:text-[52px] text-4xl font-normal"
//           style={{ backgroundSize: "200% 100%" }}
//           animate={{
//             backgroundPosition: ["0% center", "100% center", "0% center"],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//         >
//           Our Process
//         </motion.span>
//       </h2>
//       <h3 className="text-center md:text-[52px] text-4xl mt-6 md:mt-0 font-normal mb-12 text-black">
//         Our Proven Path to Project Success
//       </h3>
//       {/* <div className="flex flex-col md:flex-row gap-8">
//         <div className="md:w-1/3 relative">
//           <div className="absolute left-[20%] -translate-[1.6px] top-0 bottom-0 w-[2px] bg-[#ECEEF3]"></div>

//           <div className="space-y-10">
//             {steps.map((step, idx) => (
//               <div
//                 key={idx}
//                 className="relative grid grid-cols-5 cursor-pointer"
//                 onClick={() => handleStepClick(step.id)}
//               >
//                 <div
//                   className={`h-full col-span-1 flex items-center ${
//                     step.id === activeStep && "border-r-[2px] border-[#CC41E4]"
//                   }`}
//                 >
//                   <h1
//                     className={`font-medium text-[36px] px-1 mb-4 ${
//                       step.id !== activeStep && "text-[#E6E6E6]"
//                     }`}
//                   >
//                     0{idx + 1}
//                   </h1>
//                 </div>
//                 <div className="col-span-4 px-4">
//                   <div>
//                     <img src={step.icon} alt={step.title} />
//                   </div>
//                   <h4
//                     className={`mt-2 text-[20px] font-medium ${
//                       step.id === activeStep
//                         ? "bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] text-transparent bg-clip-text"
//                         : "text-[#18191C]"
//                     }`}
//                   >
//                     {step.title}
//                   </h4>
//                   {step.id === activeStep && step.goal && (
//                     <p className="text-sm text-gray-600 mt-2">
//                       <span className="font-medium text-[16px]">Goal: </span>
//                       {step.goal}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {activeStep === 1 && (
//           <ProjectInitiation
//             data={steps.find((s) => s.id === activeStep)?.content || []}
//           />
//         )}
//         {activeStep === 2 && <Gathering />}
//         {activeStep === 3 && <Planning />}
//         {activeStep === 4 && <WorkflowDiagram />}
//         {activeStep === 5 && <Development />}
//         {activeStep === 6 && <Testing />}
//         {activeStep === 7 && <Deployment />}
//         {activeStep === 8 && <ProductMonitoring />}
//         {activeStep === 9 && <Improvement />}
//       </div> */}

//       {/* <div className="flex flex-col md:flex-row gap-8 h-[1050px] w-full"> */}
//       <div className="flex flex-col md:flex-row gap-8  w-full">
//         {/* Left sidebar */}
//         <div className="md:w-1/3 relative overflow-y-auto scrollbar-hidden h-full">
//           <div className="absolute left-[20%] -translate-[1.6px] top-0 bottom-0 w-[2px] bg-[#ECEEF3]"></div>

//           <div className="space-y-10 pr-4">
//             {steps.map((step, idx) => (
//               <div
//                 key={idx}
//                 className="relative grid grid-cols-5 cursor-pointer"
//                 onClick={() => handleStepClick(step.id)}
//               >
//                 <div
//                   className={`h-full col-span-1 flex items-center ${
//                     step.id === activeStep && "border-r-[2px] border-[#CC41E4]"
//                   }`}
//                 >
//                   <h1
//                     className={`font-medium text-[36px] px-1 mb-4 ${
//                       step.id !== activeStep && "text-[#E6E6E6]"
//                     }`}
//                   >
//                     0{idx + 1}
//                   </h1>
//                 </div>
//                 <div className="col-span-4 px-4">
//                   <div>
//                     <img src={step.icon} alt={step.title} />
//                   </div>
//                   <h4
//                     className={`mt-2 text-[20px] font-medium ${
//                       step.id === activeStep
//                         ? "bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] text-transparent bg-clip-text"
//                         : "text-[#18191C]"
//                     }`}
//                   >
//                     {step.title}
//                   </h4>
//                   {step.id === activeStep && step.goal && (
//                     <p className="text-sm text-gray-600 mt-2">
//                       <span className="font-medium text-[16px]">Goal: </span>
//                       {step.goal}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right content area */}
//         <div className="  md:w-2/3 overflow-y-auto scrollbar-hidden">
//           {activeStep === 1 && (
//             <ProjectInitiation
//               data={steps.find((s) => s.id === activeStep)?.content || []}
//             />
//           )}
//           {activeStep === 2 && <Gathering />}
//           {activeStep === 3 && <Planning />}
//           {activeStep === 4 && <WorkflowDiagram />}
//           {activeStep === 5 && <Development />}
//           {activeStep === 6 && <Testing />}
//           {activeStep === 7 && <Deployment />}
//           {activeStep === 8 && <ProductMonitoring />}
//           {activeStep === 9 && <Improvement />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProcessTimeline;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectInitiation from "./Process/ProjectInitiation";
import Gathering from "./Process/Gathering";
import Planning from "./Process/Planning";
import WorkflowDiagram from "./Process/WorkflowDiagram";
import Testing from "./Process/Testing";
import Development from "./Process/Development";
import Deployment from "./Process/Deployment";
import Improvement from "./Process/Improvemets";
import ProductMonitoring from "./Process/ProductMonitoring";

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Project Initiation",
      icon: "svgs/processtimeline/1.svg",
      goal: "Align stakeholders on project objectives.",
      content: [
        "Define project scope and objectives.",
        "Identify and prioritize stakeholders.",
        "Assess risks and mitigation strategies.",
        "Create Project Charter.",
      ],
    },
    {
      id: 2,
      number: "02",
      title: "Requirements Gathering and Analysis",
      icon: "svgs/processtimeline/2.svg",
      goal: "Define product requirements clearly.",
      content: [
        "Conduct workshops and interviews.",
        "Create a product backlog or requirements document.",
        "Define user stories with acceptance criteria.",
        "Prioritize features.",
      ],
    },
    {
      id: 3,
      number: "03",
      title: "Planning and Design",
      icon: "svgs/processtimeline/3.svg",
      goal: "Plan and design system architecture.",
      content: [
        "Develop project plan and timeline.",
        "Design system architecture and tech stack.",
        "Identify risks and mitigation strategies.",
        "Allocate resources.",
      ],
    },
    {
      id: 4,
      number: "04",
      title: "UI/UX Design",
      icon: "svgs/processtimeline/4.svg",
      goal: "Design an intuitive user interface.",
      content: [
        "Create wireframes, UI mockups, and user flows.",
        "Conduct user testing.",
        "Iterate design based on feedback.",
        "Finalize UI/UX design for development.",
      ],
    },
    {
      id: 5,
      number: "05",
      title: "Development and Coding",
      icon: "svgs/processtimeline/5.svg",
      goal: "Build the product.",
      content: [
        "Develop in sprints or phases.",
        "Use version control (Git) and peer reviews.",
        "Implement unit and integration tests.",
        "Complete core features.",
      ],
    },
    {
      id: 6,
      number: "06",
      title: "Quality Assurance and Testing",
      icon: "svgs/processtimeline/6.svg",
      goal: "Ensure product quality.",
      content: [
        "Create and execute test cases.",
        "Perform manual and automated tests.",
        "Fix bugs and validate functionality.",
        "Perform load and security testing.",
      ],
    },
    {
      id: 7,
      number: "07",
      title: "Deployment and Go Live",
      icon: "svgs/processtimeline/7.svg",
      goal: "Deploy the product successfully.",
      content: [
        "Execute deployment (blue/green or rolling).",
        "Provide end-user training.",
        "Monitor post-deployment.",
        "Ensure smooth transition to production.",
      ],
    },
    {
      id: 8,
      number: "08",
      title: "Product Monitoring and Support",
      icon: "svgs/processtimeline/8.svg",
      goal: "Ensure continuous product performance.",
      content: [
        "Monitor product usage and gather feedback.",
        "Address critical issues and bugs.",
        "Provide ongoing support and maintenance.",
        "Release necessary updates.",
      ],
    },
    {
      id: 9,
      number: "09",
      title: "Continuous Improvement",
      icon: "svgs/processtimeline/9.svg",
      goal: "Enhance the product based on feedback.",
      content: [
        "Collect user feedback regularly.",
        "Prioritize and implement improvements.",
        "Release iterative updates.",
        "Track performance and user satisfaction.",
      ],
    },
  ];

  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };

  return (
    <div id="process" className="w-full mx-auto md:p-8 bg-white font-sans">
      <h2 className="text-center -mb-3">
        <motion.span
          className="bg-gradient-to-r from-[#4885EF] via-[#C560CF] to-[#DA5381] bg-clip-text text-transparent md:text-[52px] text-4xl font-normal"
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
          Our Process
        </motion.span>
      </h2>
      <h3 className="text-center md:text-[52px] text-4xl mt-6 md:mt-0 font-normal mb-12 text-black">
        Our Proven Path to Project Success
      </h3>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left sidebar with steps */}
        <div className="md:w-1/3 relative">
          <div className="absolute left-[16.5%] -translate-[1.6px] top-0 bottom-0 w-[2px] bg-[#ECEEF3]"></div>

          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative grid grid-cols-6 cursor-pointer group"
                onClick={() => handleStepClick(step.id)}
              >
                <div
                  className={`h-full col-span-1 flex pr-8 items-center ${
                    step.id === activeStep && "border-r-[2px] border-[#CC41E4]"
                  }`}
                >
                  <h1
                    className={`font-medium h-full w-full text-[30px] flex items-center justify-center ${
                      step.id !== activeStep && "text-[#E6E6E6]"
                    }`}
                  >
                    0{idx + 1}
                  </h1>
                </div>
                <div className="col-span-5 text-xl flex-1 pl-8">
                  <div className="w-fit">
                    <img
                      className="h-5 aspect-square"
                      src={step.icon}
                      alt={step.title}
                    />
                  </div>
                  <h4
                    className={`mt-2 text-md font-medium ${
                      step.id === activeStep
                        ? "bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] text-transparent bg-clip-text"
                        : "text-[#18191C]"
                    }`}
                  >
                    {step.title}
                  </h4>
                  {step.goal && (
                    <p className={`text-sm text-gray-600 mt-2 ${step.id === activeStep ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-200`}>
                      <span className="font-medium text-[16px]">Goal: </span>
                      {step.goal}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-2/3 ">
          {/* Right content area */}
          {activeStep === 1 && (
            <ProjectInitiation
              data={steps.find((s) => s.id === activeStep)?.content || []}
            />
          )}
          {activeStep === 2 && <Gathering />}
          {activeStep === 3 && <Planning />}
          {activeStep === 4 && <WorkflowDiagram />}
          {activeStep === 5 && <Development />}
          {activeStep === 6 && <Testing />}
          {activeStep === 7 && <Deployment />}
          {activeStep === 8 && <ProductMonitoring />}
          {activeStep === 9 && <Improvement />}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
