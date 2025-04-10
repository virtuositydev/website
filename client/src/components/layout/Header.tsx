import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { AlignJustify, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import VirtuosityLogo from "@/assets/virtuosity-logo.png";

interface NavLink {
  name: string;
  path: string;
  external?: boolean;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Highlights", path: "/#case-studies" },
    { name: "About Us", path: "/#about" },
    { name: "Contact", path: "/#contact" },
    { name: "Blog", path: "https://www.pivotal.my", external: true },
  ];

  const isActive = (path: string) => {
    // For hash links in the home page
    if (path.includes("#")) {
      return location.includes(path.replace("#", ""));
    }
    // For regular paths, we need exact matching
    return path === "/" ? location === "/" : location === path;
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
    isExternal?: boolean,
  ) => {
    if (isExternal) {
      window.open(path, "_blank");
      closeMenu();
      return;
    }
    e.preventDefault();
    if (path.includes("#")) {
      const targetId = path.split("#")[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
      setLocation(path);
    } else {
      setLocation(path);
    }
    closeMenu();
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <Link href="/" className="flex items-center gap-3">
            <motion.img
              src={VirtuosityLogo}
              alt="Virtuosity Solutions Logo"
              className="h-12 sm:h-14 md:h-16 w-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Link>
        </motion.div>

        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <a
                href={link.path}
                onClick={(e) => handleNavigation(e, link.path, link.external)}
                className={`font-medium ${isActive(link.path) ? "text-primary" : "text-gray-700 hover:text-primary"} transition-colors duration-200`}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-1"
                >
                  {link.name}
                  {link.external && (
                    <ExternalLink size={14} className="inline ml-1" />
                  )}
                </motion.span>
              </a>
            </motion.div>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-700 hover:text-primary p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
        </Button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="bg-white/95 backdrop-blur-md shadow-lg md:hidden fixed w-full left-0 h-auto z-50 border-b border-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <a
                    href={link.path}
                    onClick={(e) =>
                      handleNavigation(e, link.path, link.external)
                    }
                    className={`font-medium ${
                      isActive(link.path)
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    } transition-colors duration-200 py-3 block flex items-center justify-between`}
                  >
                    <span>{link.name}</span>
                    {link.external ? (
                      <ExternalLink size={16} />
                    ) : (
                      <motion.span
                        className="text-primary"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          repeatDelay: 0.5,
                        }}
                      >
                        →
                      </motion.span>
                    )}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
