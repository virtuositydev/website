import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ChevronDown,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { type Service, type Technology } from "@/lib/services";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

// Service icons mapping
const serviceIcons: Record<string, JSX.Element> = {
  "hybrid-cloud": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9"></path>
      <path d="M12 20v2"></path>
      <path d="M16 20v-2"></path>
      <path d="M8 20v-1"></path>
    </svg>
  ),
  devops: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
      <path d="M7 7h10"></path>
      <path d="M10 11h4"></path>
      <path d="M7 15h10"></path>
    </svg>
  ),
  microservices: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="3" y="3" rx="2"></rect>
      <rect width="8" height="8" x="13" y="3" rx="2"></rect>
      <rect width="8" height="8" x="3" y="13" rx="2"></rect>
      <rect width="8" height="8" x="13" y="13" rx="2"></rect>
    </svg>
  ),
  ai: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2H2v10h10V2z"></path>
      <path d="M22 12h-4v4h-4v4h8v-8z"></path>
      <path d="M16 12V6h-4V2"></path>
      <path d="M12 12H2v10h10V12z"></path>
      <path d="M12 12V6"></path>
    </svg>
  ),
};

const ServiceCard = ({ service, index = 0 }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  // Generate a gradient class based on the service ID using the new color palette
  const getGradientClass = (id: string) => {
    switch (id) {
      case "hybrid-cloud":
        // Light turquoise (first color in palette)
        return "from-[#7DD3D1]/15 to-[#5ABEBF]/15";
      case "devops":
        // Teal (second color in palette)
        return "from-[#287271]/15 to-[#1D7476]/15";
      case "microservices":
        // Red (third color in palette)
        return "from-[#94180E]/15 to-[#B21C0B]/15";
      case "ai":
        // Coral (fourth color in palette)
        return "from-[#F58059]/15 to-[#F97243]/15";
      default:
        return "from-primary/15 to-secondary/15";
    }
  };

  // Get more vibrant icon background color based on the service ID using the color palette
  const getIconColorClass = (id: string) => {
    switch (id) {
      case "hybrid-cloud":
        // Light turquoise (first color in palette)
        return "bg-[#7DD3D1] text-white";
      case "devops":
        // Teal (second color in palette)
        return "bg-[#287271] text-white";
      case "microservices":
        // Red (third color in palette)
        return "bg-[#94180E] text-white";
      case "ai":
        // Coral (fourth color in palette)
        return "bg-[#F58059] text-white";
      default:
        return "bg-primary text-white";
    }
  };

  // Get the appropriate icon for the service
  const getServiceIcon = (id: string) => {
    return serviceIcons[id] || serviceIcons["hybrid-cloud"];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-none">
        <div
          className={`h-2 w-full bg-gradient-to-r ${getGradientClass(service.id)}`}
        ></div>
        <CardContent className="p-0">
          {/* Card Header with Icon */}
          <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 flex items-start gap-3 sm:gap-4">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${getIconColorClass(service.id)}`}
            >
              {getServiceIcon(service.id)}
            </div>
            <div className="flex-1">
              <motion.h3
                className="text-base sm:text-lg font-bold mb-1 sm:mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                {service.title}
              </motion.h3>

              <motion.p
                className="text-xs sm:text-sm text-neutral-600 leading-tight sm:leading-normal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                {service.description}
              </motion.p>
            </div>
          </div>

          {/* Technology Logos */}
          <motion.div
            className="px-4 sm:px-6 py-4 border-t border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="rounded-xl bg-gray-50/80 p-4 sm:p-5 border border-gray-200 shadow-inner overflow-hidden">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-items-center">
                {service.technologies &&
                  service.technologies.map((tech, i) => (
                                          <motion.div
                      key={i}
                      className="flex flex-col items-center w-[75px] sm:w-[90px]"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (i % 8) * 0.05 }}
                      whileHover={{ scale: 1.15, y: -3 }}
                    >
                      <a
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center"
                      >
                      <div className="w-full aspect-square max-w-[4.5rem] mx-auto bg-white rounded-lg shadow hover:shadow-lg border border-gray-200 transition-all duration-300 flex items-center justify-center p-2.5">
                        <img
                          src={tech.logoUrl || ""}
                          alt={tech.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>

                      </a>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>

          {/* Action Button - Learn More */}
          <motion.div
            className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-100 bg-gray-50/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleDetails}
                className="flex-1 justify-between text-primary hover:text-white hover:bg-primary px-3 sm:px-4 py-1.5 sm:py-2 h-auto font-medium border-primary/30 transition-all duration-300"
              >
                <span>{isExpanded ? "Hide Details" : "Learn More"}</span>
                {isExpanded ? (
                  <ChevronDown size={14} className="ml-2" />
                ) : (
                  <ChevronRight size={14} className="ml-2" />
                )}
              </Button>

              {service.extraLink && (
                <Button
                  variant="outline"
                  size="sm"
                  className="justify-between text-primary hover:text-white hover:bg-primary px-3 sm:px-4 py-1.5 sm:py-2 h-auto font-medium border-primary/30 transition-all duration-300"
                  asChild
                >
                  <a
                    href={service.extraLink.url}
                    className="flex items-center justify-between"
                  >
                    <ExternalLink size={14} />
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </CardContent>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="border-t border-gray-100 bg-gray-50/80"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 sm:p-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <div className="space-y-2.5">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                      >
                        <div className="min-w-4 w-4 h-4 sm:min-w-5 sm:w-5 sm:h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="sm:w-3 sm:h-3"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-700 leading-tight sm:leading-normal font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {service.extraLink && (
                    <motion.div
                      className="mt-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      <Button
                        variant="outline"
                        className="bg-white border-primary text-primary hover:bg-primary/5 transition-colors"
                        asChild
                      >
                        <motion.a
                          href={service.extraLink.url}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="inline-flex items-center gap-2"
                        >
                          {service.extraLink.text}
                          <ChevronRight size={16} />
                        </motion.a>
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;