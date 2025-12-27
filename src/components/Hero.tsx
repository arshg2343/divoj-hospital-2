"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center pt-16" 
      style={{ backgroundImage: "url('https://clinicmaster.dexignzone.com/gynecology/xhtml/images/hero-banner/banner-1.webp')" }}
    >
      {/* Pink Overlay - softer and lighter */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300/70 via-pink-200/40 to-transparent" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex items-center h-full">
          <div className="w-full sm:w-9/12 md:w-8/12 lg:w-6/12">
            <div className="hero-content text-white">
              <span className="sub-title text-primary text-sm font-semibold uppercase tracking-wide mb-4 block">
                Women's Health & Wellness
              </span>
              <motion.h1 
                className="title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Compassionate Gynecology Care at Divoj Hospital
              </motion.h1>
              <p className="text text-white/90 text-lg mb-8 leading-relaxed">
                Expert gynecological care, fertility treatments, and comprehensive women's health services. 
                Your journey to wellness starts here with Dr. Upasna Setia and our dedicated team.
              </p>
              <motion.div 
                className="flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <a 
                  href="#services" 
                  className="btn bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl shadow-primary/40 transition-all duration-300 hover:shadow-primary/60 inline-flex items-center gap-2"
                >
                  Explore Our Services
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a 
                  href="#doctors" 
                  className="text-white hover:text-primary transition-colors inline-flex items-center gap-2 font-semibold"
                >
                  <div className="w-5 h-5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M17.636 7.98536L4.14657 0.307993C2.71567 -0.508903 1.25684 0.384494 1.25684 1.99101V18.0183C1.25684 19.3793 2.14292 20 2.96646 20C3.35429 20 3.74943 19.8776 4.14192 19.6388L17.6919 11.3447C18.3731 10.9263 18.7556 10.307 18.7436 9.64509C18.7323 8.98253 18.3292 8.37717 17.636 7.98536ZM16.7839 9.86329L3.23455 18.1553C3.14341 18.2112 3.07157 18.2391 3.02234 18.2531C3.00904 18.2039 2.99573 18.128 2.99573 18.0183V1.99168C2.99573 1.8267 3.02567 1.74355 3.02567 1.72293C3.07889 1.72625 3.17202 1.75353 3.2891 1.82005L16.7765 9.49741C16.9428 9.59254 16.9921 9.67503 17.008 9.65707C16.9994 9.67969 16.9428 9.76417 16.7839 9.86329Z" fill="currentColor" />
                    </svg>
                  </div>
                  Meet Dr. Upasna Setia
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
