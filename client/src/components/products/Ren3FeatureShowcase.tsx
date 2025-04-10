import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Import the real images from attached assets
import privateInfrastructureImg from "@assets/multi llm.png";
import multiModalImg from "@assets/audio.png";
import enterpriseRagImg from "@assets/ingestion.png";
import agenticImg from "@assets/workflow.png";
import securityImg from "@assets/image_1744190144319.png";
import analyticsImg from "@assets/image_1744190443027.png";
import accessImg from "@assets/image_1744259767870.png";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: any; // Changed from string to any to support imported images
  altText: string;
}

// Define the features with their associated screenshots
const features: Feature[] = [
  {
    id: "private-infrastructure",
    title: "Enterprise Integrations",
    description: "Integrate with Microsoft 365, SharePoint, Zoom, Zapier, and more.",
    image: privateInfrastructureImg,
    altText: "Ren3 enterprise integrations with multiple platforms"
  },
  {
    id: "multi-modal",
    title: "Audio Processing",
    description: "Convert speech to text and analyze audio with waveform visuals.",
    image: multiModalImg,
    altText: "Ren3 audio processing capabilities with waveform visualization"
  },
  {
    id: "rag",
    title: "Document Ingestion",
    description: "Securely process, extract, tag, and store documents with OCR.",
    image: enterpriseRagImg,
    altText: "Ren3 document ingestion and processing pipeline"
  },
  {
    id: "agentic",
    title: "Agentic Workflows",
    description: "Create smart workflows with extraction, checks, and approvals.",
    image: agenticImg,
    altText: "Ren3 agentic workflow creation interface"
  },
  {
    id: "security",
    title: "AI Deployment Beyond LLM Limitations",
    description: "Deploy an AI strategy that safely solves LLM and LAM inadequacies.",
    image: securityImg,
    altText: "Ren3 AI deployment beyond LLM limitations"
  },
  {
    id: "access",
    title: "AI Access for Everyone",
    description: "Boost AI access via Teams chat, voice, and avatars.",
    image: accessImg,
    altText: "Ren3 AI access features for team collaboration"
  }
];

const Ren3FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState<string>("access");
  const currentFeature = features.find(feature => feature.id === activeFeature);
  
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore ReN3 Use Cases
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how ReN3 can transform your business operations with these powerful features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Feature Selector (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Button
                    variant={activeFeature === feature.id ? "default" : "outline"}
                    size="lg"
                    onClick={() => setActiveFeature(feature.id)}
                    className={`w-full justify-between text-left h-auto py-4 px-6 mb-4 group transition-all duration-300 ${
                      activeFeature === feature.id 
                        ? "bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 text-white shadow-lg shadow-gray-500/20" 
                        : "hover:border-gray-400 hover:text-gray-700 border-gray-200"
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-lg font-semibold mb-1">{feature.title}</span>
                      <span className={`text-sm font-normal ${activeFeature === feature.id ? "text-white/80" : "text-gray-500"}`}>
                        {feature.description}
                      </span>
                    </div>
                    <ChevronRight 
                      size={20} 
                      className={`transition-transform ${activeFeature === feature.id ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} 
                    />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Screenshot Display (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 md:order-2"
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 relative h-[400px] md:h-[500px] flex items-center justify-center">
              {/* Subtle glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md bg-gray-500/5 rounded-full filter blur-3xl opacity-20" />

              {/* Image transitions */}
              <AnimatePresence mode="wait">
                {currentFeature && (
                  <motion.div
                    key={currentFeature.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 p-4 w-full h-full flex items-center justify-center"
                  >
                    <div className="relative rounded-lg overflow-hidden shadow-xl w-full max-h-[95%] transition-all duration-300">
                      {/* Display video for AI Access feature, images for others */}
                      {currentFeature.id === "access" ? (
                        <div className="bg-gray-900 p-0">
                          <video 
                            key={`video-${currentFeature.id}`}
                            src="/access-video.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="max-w-full max-h-[350px] object-contain mx-auto"
                            onError={(e) => console.error("Video error:", e)}
                          />
                        </div>
                      ) : (
                        <div className="bg-white p-6">
                          <img 
                            src={currentFeature.image} 
                            alt={currentFeature.altText} 
                            className="max-w-full max-h-[350px] object-contain mx-auto"
                          />
                        </div>
                      )}
                      
                      {/* Ren3 logo watermark */}
                      <div className="absolute bottom-2 right-3 text-gray-400 font-bold text-xs">
                        ReN3.ai
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Feature indicator dots */}
            <div className="flex justify-center gap-2 mt-6">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeFeature === feature.id
                      ? "bg-gradient-to-r from-gray-700 to-gray-500 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`View ${feature.title}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ren3FeatureShowcase;