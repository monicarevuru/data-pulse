import React, { useState, useEffect } from "react";
import { X, Menu, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { NavLinkType } from "../Layout.types";
import { LINK_VARIANT_ENUM, ProjectName, navLinks } from "../LayoutConstants";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "backdrop-blur-sm bg-primary shadow-2xl shadow-primary-300"
          : "bg-primary shadow-none"
      }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <a href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ rotate: -10, opacity: 0 }}
              animate={
                scrolled
                  ? { rotate: -10, opacity: 1 }
                  : { rotate: 0, opacity: 1 }
              }
              transition={{ duration: 0.5 }}
              whileTap={{ rotate: -10 }}>
              <LineChart className={`h-8 w-8 ${"text-secondary-900"}`} />
            </motion.div>
            <motion.span
              className={`text-xl font-bold ${"text-secondary-900"}`}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              {ProjectName}
            </motion.span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link: NavLinkType) => (
              <Button
                key={link.targetId}
                variant={link.variant}
                size="sm"
                onClick={() => handleScroll(link.targetId)}
                className={`${link.className} cursor-pointer text-sm font-medium`}>
                {link.label}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant={LINK_VARIANT_ENUM.GHOST}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`cursor-pointer inline-flex items-center justify-center rounded-md p-0 text-primary-700`}>
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-8 w-10 p-0" />
              ) : (
                <Menu className="h-8 w-10 p-0" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden px-2 pt-4 pb-6 bg-white shadow-lg rounded-b-lg space-y-2">
          {navLinks.map((link: NavLinkType) => (
            <Button
              key={link.targetId}
              variant={link.variant}
              size="sm"
              onClick={() => handleScroll(link.targetId)}
              className={`cursor-pointer w-full justify-start py-4 text-md shadow-none`}>
              {link.label}
            </Button>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
