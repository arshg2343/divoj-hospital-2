"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#doctors" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-3" 
          : "bg-gradient-to-b from-black/20 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            className={`p-3 rounded-2xl transition-all duration-300 ${
              scrolled ? "bg-gradient-to-br from-primary to-pink-600" : "bg-white"
            }`}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={scrolled ? "text-white" : "text-primary"}
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </motion.div>
          <div className="flex flex-col">
            <span className={`text-2xl font-bold leading-tight transition-colors duration-300 ${
              scrolled ? "text-secondary" : "text-white"
            }`}>
              Divoj <span className="text-primary">Hospital</span>
            </span>
            <span className={`text-xs font-medium transition-colors duration-300 ${
              scrolled ? "text-gray-500" : "text-white/80"
            }`}>
              Women's Health & Wellness
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 relative group ${
                  scrolled 
                    ? "text-gray-700 hover:text-primary" 
                    : "text-white hover:text-pink-200"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 ${
                  scrolled ? "" : "bg-white"
                }`} />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center gap-3">
          <div className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all ${
            scrolled 
              ? "bg-pink-50 text-secondary" 
              : "bg-white/20 backdrop-blur-sm text-white"
          }`}>
            <Phone size={18} className="text-primary" />
            <span className="font-semibold">+123 456 7890</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-secondary" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-pink-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary hover:bg-pink-50 font-semibold py-3 px-4 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 text-secondary justify-center mt-3 py-3 bg-pink-50 rounded-xl">
                <Phone size={18} className="text-primary" />
                <span className="font-bold">+123 456 7890</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
