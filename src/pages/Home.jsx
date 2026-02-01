import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

const SECTION_PATHS = ["/services", "/process", "/contact"];

const Home = () => {
  const { pathname } = useLocation();
  const [isVisibleCTASection, setIsVisibleCTASection] = useState(false);

  // When path changes: scroll to section or top
  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const sectionId = pathname.slice(1); // "/process" -> "process"
    if (SECTION_PATHS.includes(pathname)) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (pathname === "/contact") setIsVisibleCTASection(true);
    }
  }, [pathname]);

  return (
    <>
      <div className="px-5 md:px-[80px] select-none">
        <NavBar />
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
