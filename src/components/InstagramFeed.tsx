"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-20 bg-gradient-to-b from-white to-pink-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-5 h-5 text-primary" />
            <p className="text-sm font-bold text-primary uppercase tracking-wider">
              Follow Our Journey
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Connect on Instagram
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Daily tips, patient stories, and wellness advice from Dr. Upasna Setia
          </p>
        </motion.div>

        {/* Instagram Embed */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative" style={{ aspectRatio: "16 / 9", minHeight: "600px" }}>
            <iframe
              src="https://www.instagram.com/upasnasetia_divoj_navankur_ivf/embed"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              className="w-full h-full"
              title="Dr. Upasna Setia Instagram"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Follow Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://www.instagram.com/upasnasetia_divoj_navankur_ivf/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-pink-500 text-white rounded-full font-bold text-base shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 hover:scale-105 group"
          >
            <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Follow @upasnasetia_divoj_navankur_ivf</span>
          </a>
        </motion.div>

        {/* Stats/Features Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { label: "Daily Tips", icon: "💡" },
            { label: "Success Stories", icon: "❤️" },
            { label: "Health Advice", icon: "🩺" },
            { label: "Wellness Updates", icon: "✨" }
          ].map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-sm font-semibold text-secondary">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
