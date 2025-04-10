import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { CaseStudyTab } from "@/components/ui/case-study-tab";
import { StatsCard } from "@/components/ui/stats-card";
import { Card, CardContent } from "@/components/ui/card";
import { caseStudies } from "@/lib/caseStudies";
import { motion, AnimatePresence } from "framer-motion";

// Import background images for each industry
import telecomBg from "../../assets/case-studies/telecommunications-bg.jpg";
import facilitiesBg from "../../assets/case-studies/facilities-bg.jpg";
import financialBg from "../../assets/case-studies/financial-bg.jpg";

const CaseStudiesSection = () => {
  const [activeTab, setActiveTab] = useState("fs");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeCase = caseStudies.find((study) => study.id === activeTab);

  // Function to get the background image based on the active tab
  const getBackgroundImage = () => {
    switch (activeTab) {
      case "fs":
        return financialBg;
      case "telco":
        return telecomBg;
      case "ps":
        return financialBg;
      case "fm":
        return facilitiesBg;

      default:
        return telecomBg;
    }
  };

  return (
    <section id="case-studies" className="py-20 relative">
      {/* Dynamic background image with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${getBackgroundImage()})`,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
          }}
        ></motion.div>
      </AnimatePresence>

      {/* Gradient overlay to enhance readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85 z-0"></div>

      {/* Red accent glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/20 to-transparent z-[1] opacity-40"></div>

      {/* Optional grid pattern with reduced opacity */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-[1]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 relative z-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
            In Focus: Our Clients
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">
            Discover how we've empowered our clients with cloud-native solutions
            that drive real results.
          </p>
        </motion.div>

        <motion.div
          className="mb-8 flex justify-center relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-wrap justify-center rounded-xl bg-gradient-to-b from-black/60 to-black/50 backdrop-blur-md shadow-2xl border border-white/10 overflow-hidden">
            {caseStudies.map((study, index) => (
              <CaseStudyTab
                key={study.id}
                id={study.id}
                label={study.industry}
                isActive={activeTab === study.id}
                onClick={handleTabChange}
              />
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeCase && (
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-20 md:w-4/5 mx-auto"
            >
              <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden relative z-20 ring-1 ring-black/5 ">
                <CardContent className="p-6 md:p-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/0 rounded-xl -z-10"></div>
                    {activeCase.stats.map((stat, index) => (
                      <StatsCard
                        key={index}
                        value={stat.value}
                        label={stat.label}
                        className="h-full"
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2">
                    <div className="bg-gray-50/70 p-5 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-bold mb-4 text-neutral-800 border-b-2 border-primary/30 pb-2 inline-block">
                        Background
                      </h3>
                      <p className="text-neutral-700 leading-relaxed text-justify">
                        {activeCase.background}
                      </p>
                    </div>
                    <div className="bg-gray-50/70 p-5 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-bold mb-4 text-neutral-800 border-b-2 border-primary/30 pb-2 inline-block">
                        The Journey
                      </h3>
                      <p className="text-neutral-700 leading-relaxed text-justify">
                        {activeCase.journey}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
