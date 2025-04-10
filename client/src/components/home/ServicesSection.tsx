import { SectionHeader } from "@/components/ui/section-header";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/services";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-16 pt-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCAyLjIxLTAuMDIgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      {/* Red accent circle - top left */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      {/* Blue accent circle - bottom right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <SectionHeader
            title="Cloud Solutions Tailored for Your Business"
            description="Discover our comprehensive suite of enterprise services designed to transform your organization's cloud infrastructure and capabilities."
          />
        </motion.div>

        {/* Services Grid - Max 2 cards per row with wider width */}
        <div className="mt-16 flex justify-center ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full lg:w-4/5">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
