import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Download } from "lucide-react";
import { useEffect } from "react";
import ProductList from "@/components/products/ProductList";
import { products } from "@/lib/products";
import brochurePdf from "@assets/Virtuosity - Gen AI Brochure v0.3.pdf";

const Products = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadBrochure = () => {
    // Create an anchor element and trigger download
    const link = document.createElement("a");
    link.href = brochurePdf;
    link.download = "Virtuosity-AI-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-primary/90 py-12 sm:py-16 md:py-20 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Enterprise Solutions & Products
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mb-6 sm:mb-8 md:mb-10 mx-auto max-w-3xl">
              Discover our range of advanced technology solutions and strategic
              partnerships designed to transform your business operations and
              drive competitive advantage.
            </p>
            <motion.div className="flex flex-wrap justify-center gap-4"></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products List Section */}
      <ProductList />

      {/* Partnership Benefits Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
              Why Partner with Virtuosity?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end implementation and support for all our
              product offerings, ensuring a seamless integration with your
              existing infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <motion.div
              className="p-4 sm:p-5 md:p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-6 sm:h-6"
                >
                  <path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
                  <path d="M12 15v7" />
                  <path d="m9 19 3 3 3-3" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                Certified Expertise
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Our team consists of certified professionals with extensive
                experience in implementing and managing enterprise-grade
                solutions.
              </p>
            </motion.div>

            <motion.div
              className="p-4 sm:p-5 md:p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-6 sm:h-6"
                >
                  <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Custom Solution</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                We tailor each implementation to meet your specific business
                requirements and challenges, ensuring maximum ROI.
              </p>
            </motion.div>

            <motion.div
              className="p-4 sm:p-5 md:p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-6 sm:h-6"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">24/7 Support</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Continuous support and maintenance services ensure your
                solutions are always running optimally with minimal downtime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-tr from-slate-900 via-slate-800 to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10">
              Get in touch with us to discuss how our services and solution can
              address your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="default"
                variant="outline"
                className="bg-white text-primary hover:bg-neutral-100 font-medium py-2 px-4"
              >
                <span className="flex items-center gap-1 sm:gap-2">
                  Contact Us Today
                  <ChevronRight size={14} className="sm:w-4 sm:h-4" />
                </span>
              </Button>
              <Button
                size="default"
                className="bg-secondary hover:bg-secondary/90 text-white py-2 px-4"
                asChild
              >
                <a href="/#services">
                  <span className="flex items-center gap-1 sm:gap-2">
                    Explore Our Services
                    <ChevronRight size={14} className="sm:w-4 sm:h-4" />
                  </span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Products;
