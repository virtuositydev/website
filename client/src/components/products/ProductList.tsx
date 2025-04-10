import { motion } from "framer-motion";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import { SectionHeader } from "@/components/ui/section-header";

const ProductList = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <SectionHeader
            title="Featured Solutions"
            description="Explore our curated selection of enterprise-grade solutions powered by cutting-edge technology partnerships."
          />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;