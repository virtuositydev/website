import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import redWaveBg from "../../assets/hero-bg3.png";

const Hero = () => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Cloud services content (left side)
  const cloudHero = (
    <motion.div
      className="flex-1 flex flex-col justify-between p-3 sm:p-3 md:p-5 m-2 sm:m-3 md:m-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-950/90 via-red-800/85 to-red-500/80 shadow-xl backdrop-blur-md border border-red-800/50 min-h-[260px] sm:min-h-[220px] md:min-h-[280px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-xl mx-auto">
        <motion.h1
          className="text-xl sm:text-2xl lg:text-4xl font-bold mb-3 md:mb-6 text-white leading-tight"
          variants={item}
          initial="hidden"
          animate="show"
        >
          <span className="inline-block">Get Cloud Right.</span>
          <br />
          <span className="inline-block mt-1 text-white">Be Cloud Native.</span>
        </motion.h1>
        <motion.p
          className="text-sm sm:text-base md:text-lg font-light mb-4 md:mb-6 text-white/90"
          variants={item}
          initial="hidden"
          animate="show"
        >
          Accelerate your business with enterprise-grade cloud infrastructure,
          DevOps automation, and AI-driven solutions.
        </motion.p>
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="flex justify-center sm:justify-start"
        >
          <Button
            size="default"
            variant="outline"
            className="bg-white text-primary hover:bg-neutral-100 font-medium py-2 px-5 sm:py-2.5 sm:px-7 rounded-full shadow-lg transition duration-300 w-full sm:w-auto h-10 sm:h-11"
            asChild
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Services
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );

  // Ren3 partnership content (right side)
  const ren3Hero = (
    <motion.div
      className="flex-1 flex flex-col justify-between p-3 sm:p-4 md:p-6 m-2 sm:m-3 md:m-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/95 via-gray-700/90 to-gray-600/85 shadow-2xl backdrop-blur-md border border-gray-500/50 min-h-[260px] sm:min-h-[220px] md:min-h-[280px] relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Subtle accent glow effects */}
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-indigo-600/30 rounded-full filter blur-3xl opacity-70"></div>
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-700/20 rounded-full filter blur-3xl opacity-60"></div>
      <div className="max-w-xl mx-auto">
        <motion.h1
          className="text-xl sm:text-2xl lg:text-4xl font-bold mb-3 md:mb-6 text-white leading-tight"
          variants={item}
          initial="hidden"
          animate="show"
        >
          <span className="inline-block">Boost Productivity.</span>
          <br />
          <span className="inline-block mt-1 text-white">Empowered by AI.</span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg font-light mb-4 md:mb-6 text-white/90"
          variants={item}
          initial="hidden"
          animate="show"
        >
          Virtuosity Solutions partner with ReN3.ai to bring Agentic AI solution
          to accelerate enterprise productivity.
        </motion.p>
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row justify-center sm:justify-start gap-3 sm:gap-4"
        >
          <Button
            size="default"
            variant="outline"
            className="bg-white text-black hover:bg-neutral-100 font-medium py-2 px-5 sm:py-2.5 sm:px-7 rounded-full shadow-xl border border-white/70 transition duration-300 whitespace-nowrap h-10 sm:h-11"
            asChild
          >
            <motion.a
              href="/products/ren3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
            </motion.a>
          </Button>

          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 rounded-full border border-white/60 shadow-lg h-10 sm:h-11 flex-shrink-0 max-w-[170px] sm:max-w-[180px]">
            <div className="bg-white rounded-full p-1 flex-shrink-0">
              <img
                src="https://i.imghippo.com/files/oeF5911RXI.png"
                alt="Ren3 AI Logo"
                className="h-5 w-auto"
              />
            </div>
            <span className="text-xs font-medium text-black flex items-center whitespace-nowrap overflow-hidden text-ellipsis pr-1">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
              New Partnership
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section className="text-white overflow-hidden py-4 sm:py-5 pt-10 sm:pt-8 pb-2 sm:pb-4 relative min-h-[400px] sm:min-h-[420px]">
      {/* Red Wave Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${redWaveBg})`,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      {/* Subtle darkening overlay to enhance readability of content */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Animated accent lights that complement the red wave image */}
      <div className="absolute h-72 w-72 rounded-full bg-red-500/10 filter blur-3xl bottom-0 right-1/4 animate-pulse"></div>
      <div
        className="absolute h-56 w-56 rounded-full bg-red-800/10 filter blur-3xl top-10 left-10 animate-pulse"
        style={{ animationDelay: "1.2s" }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-2 sm:px-4 max-w-6xl relative z-10 py-3 md:py-4 pt-4 md:pt-5 pb-1 md:pb-2">
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5">
          {cloudHero}
          {ren3Hero}
        </div>
      </div>
    </section>
  );
};

export default Hero;
