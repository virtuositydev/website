import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, User, Tag } from "lucide-react";
import { useEffect } from "react";

const BlogPost = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.article 
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="relative">
            <motion.img 
              src="https://i.imghippo.com/files/oeF5911RXI.png"
              alt="Virtuosity Global and Ren3 Partnership" 
              className="w-full h-64 object-cover object-center"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <motion.h1 
                  className="text-3xl md:text-4xl font-bold"
                  variants={item}
                >
                  Virtuosity Global + Ren3: Bringing AI Innovation to You
                </motion.h1>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <motion.div variants={item} className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>March 27, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Virtuosity Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} />
                <span>AI, Partnerships, Innovation</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="prose prose-lg max-w-none"
              variants={item}
            >
              <p>
                We are thrilled to announce our strategic partnership with Ren3, a leading provider of 
                cutting-edge AI solutions. This collaboration marks a significant milestone in our 
                journey to deliver innovative and transformative solutions to our clients.
              </p>
              
              <h2>Why We Partnered with Ren3</h2>
              <p>
                At Virtuosity Global, we continuously seek to enhance our service offerings with the 
                latest technological advancements. Our partnership with Ren3 is driven by a shared 
                vision of leveraging AI to solve complex business challenges and unlock new 
                opportunities for growth and efficiency.
              </p>
              <p>
                Ren3's AI platform stands out with its agentic capabilities, security features, and 
                proven track record across multiple industries. By integrating their technology with 
                our existing cloud and automation solutions, we can deliver even more value to our clients.
              </p>
              
              <h2>Benefits of Ren3 AI for Businesses</h2>
              <p>
                The integration of Ren3's AI technology into our service offerings brings numerous 
                benefits to businesses:
              </p>
              <ul>
                <li>
                  <strong>Enhanced Automation:</strong> Automate complex workflows with intelligent AI 
                  agents that can understand, learn, and adapt.
                </li>
                <li>
                  <strong>Data-Driven Insights:</strong> Gain deeper insights from your data with 
                  advanced analytics and pattern recognition.
                </li>
                <li>
                  <strong>Improved Decision Making:</strong> Make better strategic decisions with 
                  AI-powered recommendations and forecasting.
                </li>
                <li>
                  <strong>Cost Optimization:</strong> Reduce operational costs through intelligent 
                  resource allocation and process optimization.
                </li>
                <li>
                  <strong>Competitive Advantage:</strong> Stay ahead of the competition by leveraging 
                  cutting-edge AI technology.
                </li>
              </ul>
              
              <h2>How to Get Started</h2>
              <p>
                Getting started with Ren3 AI is simple. Our team will work closely with you to understand 
                your specific needs and challenges, and then develop a customized implementation plan 
                that seamlessly integrates AI into your existing systems and processes.
              </p>
              <p>
                The journey typically includes:
              </p>
              <ol>
                <li>Initial consultation to assess your needs and objectives</li>
                <li>Tailored solution design based on your specific requirements</li>
                <li>Seamless implementation with minimal disruption to your operations</li>
                <li>Comprehensive training for your team</li>
                <li>Ongoing support and optimization</li>
              </ol>
              
              <p>
                We believe that AI should be accessible to businesses of all sizes, and our partnership 
                with Ren3 allows us to make this a reality. Whether you're looking to enhance your 
                cloud infrastructure, streamline your DevOps processes, or modernize your applications, 
                our AI-powered solutions can help you achieve your goals more efficiently.
              </p>
              
              <p>
                To learn more about how Virtuosity Global and Ren3 can help transform your business, 
                visit our new Products page or contact us to schedule a consultation.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <a href="/products" className="flex items-center gap-2">
                    Explore Ren3 AI Products
                    <ChevronRight size={16} />
                  </a>
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  <a href="/#contact" className="flex items-center gap-2">
                    Schedule a Consultation
                    <ChevronRight size={16} />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost;