import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 pb-20 bg-gray-100/50 relative">
      {/* Very subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNlNWU3ZWIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzAgMzBjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeader
            title="About Virtuosity Solutions"
            description="Our commitment to excellence in delivering modern cloud infrastructure."
            className="text-secondary"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:w-4/5 mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="bg-white rounded-lg shadow-lg h-full">
              <CardContent className="p-8">
                <motion.h3
                  className="text-2xl font-montserrat font-bold mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Who are we?
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-neutral-600 mb-4">
                    <p>
                      <strong>Virtuosity Solutions</strong>, established in 2014
                      is head quartered in Malaysia, to serve the ASEAN region
                      in delivering modern Enterprise Cloud Infrastructure and
                      driving change in How the World Develops and Runs
                      Software.
                    </p>
                    <p className="mt-4">
                      We have a team of capable Cloud Infra Architects, Software
                      Developers, AI Practitioners ready to provide Cloud
                      Infrastructure consultation services, DevOps consultation
                      / implementation.
                    </p>
                    <p className="mt-4">
                      Our expertise spans across various industries including
                      telecommunications, public sector, financial services, and
                      more.
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="bg-white rounded-lg shadow-lg h-full">
              <CardContent className="p-8">
                <motion.h3
                  className="text-2xl font-montserrat font-bold mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Our Corporate Citizenship
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <p className="text-neutral-600">
                    We take professionalism very seriously to bring
                    Peace-of-Mind and the best Partnership Experience to you. We
                    will manage and investigate all complaints and reports
                    received while keeping the identity of the complainant
                    confidential.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full"
                >
                  <Button
                    className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg w-full sm:w-auto"
                    asChild
                  >
                    <a
                      href="https://www.virtuosity-global.com/wp-content/uploads/2022/04/Virtuosity-Sdn-Bhd-ANTI_BRIBERY_AND_CORRUPTION-Policy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs sm:text-sm text-center justify-center sm:justify-start"
                    >
                      <FileText className="mr-2 flex-shrink-0" size={16} />
                      <span className="line-clamp-2 sm:line-clamp-1">
                        View & Download our Anti-Bribery & Corruption Policy
                      </span>
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      {/* Subtle gradient divider at the bottom of About section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-200/50 pointer-events-none"></div>
      
      {/* SVG Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none w-full pointer-events-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] text-gray-50">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
