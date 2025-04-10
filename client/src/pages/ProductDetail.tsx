import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowLeft, Download } from "lucide-react";
import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import { products } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import brochurePdf from "@assets/Virtuosity - Gen AI Brochure v0.3.pdf";
import Ren3FeatureShowcase from "@/components/products/Ren3FeatureShowcase";
import Ren3VideoSection from "@/components/products/Ren3VideoSection";

const ProductDetail = () => {
  const [, params] = useRoute("/products/:id");
  const productId = params?.id;

  const product = products.find((p) => p.id === productId);

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle brochure download
  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = brochurePdf;
    link.download = "Virtuosity-Gen-AI-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Product Not Found</h1>
        <p className="mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/products">
            <span className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Products
            </span>
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className={`${product.id === "ren3" ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600" : "bg-gradient-to-r from-secondary to-primary"} py-20 text-white overflow-hidden relative`}>
        {product.id === "ren3" && (
          <>
            <motion.div
              className="absolute top-0 left-0 w-full h-full opacity-10"
              initial={{ backgroundPosition: "0% 0%" }}
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
              }}
              transition={{ 
                duration: 25, 
                ease: "linear", 
                repeat: Infinity,
              }}
              style={{
                backgroundImage: "url('data:image/svg+xml;utf8,<svg width=\"400\" height=\"400\" viewBox=\"0 0 600 600\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(300,300)\"><path d=\"M161.6,-185.3C205.4,-137.9,233.1,-76.1,240.6,-11.5C248.1,53.1,235.3,120.5,196.5,167.1C157.7,213.8,92.8,239.6,21.8,251.7C-49.3,263.8,-126.6,262.2,-176.5,224.5C-226.4,186.8,-249,113,-261.7,40.1C-274.4,-32.9,-277.2,-105,-245.8,-159.2C-214.4,-213.4,-149,-249.8,-85.2,-261.4C-21.4,-273,41,-259.8,95.7,-235.2C150.4,-210.7,197.5,-174.7,161.6,-185.3Z\" fill=\"%23ffffff\" /></g></svg>')",
                backgroundSize: "800px 800px",
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.03 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <div className="text-white text-[350px] font-bold tracking-widest select-none">
                AI
              </div>
            </motion.div>
          </>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className={
                product.id === "ren3" ? "w-full max-w-3xl mx-auto" : "md:w-1/2"
              }
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className={product.id === "ren3" ? "flex justify-center" : ""}
              >
                {/*<Link href="/products">
                  <Button
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm text-white mb-6 hover:bg-white/20"
                  >
                    <span className="flex items-center gap-2">
                      <ArrowLeft size={16} />
                      Back to Products
                    </span>
                  </Button>
                </Link>*/}
              </div>
              <h1
                className={`text-4xl md:text-5xl font-bold mb-6 ${product.id === "ren3" ? "text-center" : ""}`}
              >
                {product.title}
              </h1>
              <p
                className={`text-xl mb-8 ${product.id === "ren3" ? "text-center" : ""}`}
              >
                {product.description}
              </p>
              {/* Buttons moved to bottom CTA section for ReN3, kept for other products */}
              {product.id !== "ren3" && (
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white hover:bg-neutral-100 font-medium text-primary"
                      asChild
                    >
                      <Link href="/">
                        <span className="flex items-center gap-2">
                          Request Information
                          <ChevronRight size={16} />
                        </span>
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>

            {/* Only show logo for non-Ren3 products */}
            {product.id !== "ren3" && (
              <motion.div
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
                  {product.logoImage ? (
                    <div className="p-8 flex justify-center items-center bg-gray-50">
                      <img
                        src={product.logoImage}
                        alt={product.title}
                        className="h-40 object-contain"
                      />
                    </div>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover"
                    />
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Ren3 Video Section - Only for Ren3 product */}
      {product.id === "ren3" && <Ren3VideoSection />}
      
      {/* Ren3 Feature Showcase - Only for Ren3 product */}
      {product.id === "ren3" && <Ren3FeatureShowcase />}

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Key Features */}
            <div className="mb-12">
              <motion.div 
                className="text-center relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Large R3 Background */}
                {product.id === "ren3" && (
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center -z-10 opacity-[0.03]"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <div className="text-[200px] md:text-[350px] font-bold tracking-tight text-gray-800">R3</div>
                  </motion.div>
                )}
                
                {/* Section Title */}
                <h2 className="text-3xl md:text-5xl font-bold mb-3 relative inline-block">
                  Key Features
                  {product.id === "ren3" && (
                    <motion.div 
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-gray-800/80 to-gray-500/20"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  )}
                </h2>
                
                {/* Section Description */}
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16 mt-6">
                  Discover the powerful capabilities of {product.title}
                </p>

                {/* Feature Cards */}
                {product.features && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {product.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className={`flex items-start p-6 rounded-xl ${
                          product.id === "ren3" 
                            ? "bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-lg shadow-gray-500/5" 
                            : "border border-gray-100 shadow-sm bg-white"
                        } transition-all group relative overflow-hidden`}
                        initial={{ opacity: 0, y: 25, scale: 0.97 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        whileHover={
                          product.id === "ren3" 
                            ? { y: -8, boxShadow: "0 15px 30px -10px rgba(75, 75, 75, 0.2)" } 
                            : {}
                        }
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 80
                        }}
                      >
                        {/* Background glow effect for Ren3 */}
                        {product.id === "ren3" && (
                          <div className="absolute -inset-[100px] bg-gray-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease-in-out -z-10"></div>
                        )}
                        
                        {/* Feature Number */}
                        <div className="mr-5 mt-1">
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                            product.id === "ren3" 
                              ? "bg-gradient-to-br from-gray-800 to-gray-600 text-white shadow-lg shadow-gray-500/30" 
                              : "bg-primary/10 text-primary"
                          }`}>
                            <span className="font-bold text-xl">{index + 1}</span>
                          </div>
                        </div>
                        
                        {/* Feature Content */}
                        <div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-gray-700 transition-colors">
                            {feature}
                          </h3>
                          
                          {/* Underline for Ren3 */}
                          {product.id === "ren3" && (
                            <motion.div 
                              className="w-16 h-0.5 bg-gradient-to-r from-gray-700/80 to-gray-500/20 mb-4"
                              initial={{ width: 0 }}
                              whileInView={{ width: "4rem" }}
                              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                            />
                          )}
                          
                          {/* Removed feature descriptions as requested */}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Business Benefits */}
            {product.benefits && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-16"
              >
                <h2 className="text-3xl font-bold mb-3 text-center">
                  Business Benefits
                </h2>
                <p className="text-gray-600 text-center mb-10">
                  How {product.title} delivers value to your organization
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {product.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className={`${product.id === "ren3" ? "bg-gradient-to-br from-white to-gray-50 border border-gray-100" : "bg-gray-50"} p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-all`}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      whileHover={product.id === "ren3" ? { y: -7, scale: 1.02 } : {}}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ 
                        duration: 0.5, 
                        delay: Math.min(index * 0.08, 0.5),
                        type: "spring",
                        stiffness: 80
                      }}
                    >
                      {product.id === "ren3" && (
                        <motion.div 
                          className="w-12 h-1 bg-gray-600/50 mx-auto mb-4"
                          initial={{ width: 0, opacity: 0 }}
                          whileInView={{ width: "3rem", opacity: 1 }}
                          transition={{ delay: index * 0.08 + 0.3, duration: 0.6 }}
                        />
                      )}
                      <p className="text-gray-800 font-medium">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {product.id !== "ren3" && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Interested in {product.title}?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                Contact our team to discuss how {product.title} can be tailored to
                your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                  asChild
                >
                  <Link href="/">
                    <span className="flex items-center gap-2">
                      Contact Us
                      <ChevronRight size={16} />
                    </span>
                  </Link>
                </Button>
                {/*<Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <span className="flex items-center gap-2">
                    View Other Products
                    <ChevronRight size={16} />
                  </span>
                </Button>*/}
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Call to Action section for Ren3 */}
      {product.id === "ren3" && (
        <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find out how we can help you get started with your Enterprise AI journey
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto">
                Our team of AI experts and cloud architects are ready to guide your organization through the adoption of enterprise-grade AI solutions, custom-tailored to your business needs.
              </p>
              
              <div className="flex flex-wrap gap-5 justify-center mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-gray-700 hover:bg-neutral-100 font-medium"
                    asChild
                  >
                    <Link href="/">
                      <span className="flex items-center gap-2">
                        Back to Home
                        <ArrowLeft size={16} />
                      </span>
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-gray-700 hover:bg-neutral-100 font-medium"
                    onClick={handleDownloadBrochure}
                  >
                    <span className="flex items-center gap-2">
                      Download Brochure
                      <Download size={16} />
                    </span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
