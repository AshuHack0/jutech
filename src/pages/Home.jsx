import { useState } from "react";
import { NavBar } from "../components/common/NavBar";
import HeroSection from "../components/Home/HeroSection";
import StatsSection from "../components/Home/StatsSection";
import FeatureHighlightSection from "../components/Home/FeatureHighlightSection";
import ServiceSection from "../components/Home/ServiceSection";
import Footer from "../components/Home/Footer";
import CollaborateSection from "../components/Home/CollaborateSection";
import CTASection from "../components/Home/CTASection";
import TestimonialsCarousel from "../components/Home/TestimonialsCarousel";
import ProcessTimeline from "../components/Home/ProcessTimeline";

const Home = () => {
  const [isVisibleCTASection, setIsVisibleCTASection] = useState(false);
  return (
    <>
      <div className="px-5 md:px-[80px] select-none">
        <NavBar setIsVisibleCTASection={setIsVisibleCTASection} />
        <div className="">
          <HeroSection />
          <StatsSection />
          <FeatureHighlightSection />
          <ServiceSection />
          <ProcessTimeline />
          <TestimonialsCarousel />
          <CTASection
            setIsVisibleCTASection={setIsVisibleCTASection}
            isVisibleCTASection={isVisibleCTASection}
          />
          <CollaborateSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
