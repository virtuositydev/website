import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Ren3ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative mb-10">
          <motion.div
            className="absolute inset-0 -z-10 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-[250px] font-bold text-ren3 tracking-widest opacity-25">AI</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <SectionHeader
              title="Contact Us About Ren3"
              description="Get in touch with our team to learn more about Ren3 AI solutions"
              className="mb-10 relative z-10"
            />
            
            <motion.div 
              className="w-24 h-1 bg-ren3 mx-auto mt-4"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "6rem", opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10"
          >
            <p className="text-lg text-gray-600">
              Ready to transform your business with Ren3's AI solutions? As an authorized distributor, Virtuosity Solutions can help you implement these cutting-edge technologies.
            </p>
          </motion.div>

          <Card className="bg-white rounded-lg shadow-lg overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full h-72"
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

            <CardContent className="p-6 border-t">
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-50"
                  initial={{ opacity: 0, y: 20, x: -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(91, 24, 199, 0.15)" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                >
                  <div className="bg-ren3/10 p-3 rounded-full mr-3 flex-shrink-0">
                    <MapPin className="text-ren3" />
                  </div>
                  <motion.div
                    className="hover:text-ren3 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Virtuosity Solutions Sdn. Bhd. 1, Jalan Taboh 33/22, Seksyen
                    33, 40400 Shah Alam, Selangor, Malaysia.
                  </motion.div>
                </motion.div>
                <motion.div
                  className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(91, 24, 199, 0.15)" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                >
                  <div className="bg-ren3/10 p-3 rounded-full mr-3 flex-shrink-0">
                    <Phone className="text-ren3" />
                  </div>
                  <motion.a
                    href="tel:+60351247818"
                    className="hover:text-ren3 transition-colors mt-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    03-5124 7818
                  </motion.a>
                </motion.div>
                <motion.div
                  className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-50"
                  initial={{ opacity: 0, y: 20, x: 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(91, 24, 199, 0.15)" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                >
                  <div className="bg-ren3/10 p-3 rounded-full mr-3 flex-shrink-0">
                    <Mail className="text-ren3" />
                  </div>
                  <motion.a
                    href="mailto:sales@virtuosity-global.com"
                    className="hover:text-ren3 transition-colors mt-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    sales@virtuosity-global.com
                  </motion.a>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Ren3ContactSection;