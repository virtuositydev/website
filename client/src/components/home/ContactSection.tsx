import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-24 pt-24 bg-gray-50 relative overflow-hidden">
      {/* Top shadow gradient for transition */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-200/80 to-transparent pointer-events-none z-10"></div>
      
      {/* SVG Wave divider - top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none w-full pointer-events-none z-10">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] text-gray-50 rotate-180">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAzIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCAyLjIxLTAuMDIgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeader
            title="Contact Us"
            description="Get in touch with our team of experts to transform your business with our cloud solutions"
            className="mb-2"
          />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-10"></div>

          {/* Two-column layout with contact info and map side by side */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Information Card */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl h-full">
              <CardContent className="p-6 md:p-8 bg-gradient-to-b from-white to-gray-50 h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Get In Touch</h3>
                <div className="space-y-6">
                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Address</h4>
                      <motion.p
                        className="text-gray-600 text-sm"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        Virtuosity Solutions Sdn. Bhd.<br />
                        1, Jalan Taboh 33/22, Seksyen 33,<br />
                        40400 Shah Alam, Selangor, Malaysia.
                      </motion.p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Phone</h4>
                      <motion.a
                        href="tel:+6051247818"
                        className="text-gray-600 text-sm hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        03-5124 7818
                      </motion.a>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Email</h4>
                      <motion.a
                        href="mailto:sales@virtuosity-global.com"
                        className="text-gray-600 text-sm hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        sales@virtuosity-global.com
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            {/* Map Card */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="w-full h-full min-h-[400px]"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.272602157202!2d101.54638!3d3.0212752000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb2b8b938432b%3A0xb9098e79fd9c3f99!2sVirtuosity%20Solutions%20Sdn.%20Bhd.!5e0!3m2!1sen!2smy!4v1742982799348!5m2!1sen!2smy"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Virtuosity Solutions location"
                  className="w-full h-full border-none"
                ></iframe>
              </motion.div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
