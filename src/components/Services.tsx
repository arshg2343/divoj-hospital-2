"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Family planning",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/services/img1.webp",
  },
  {
    title: "Gynecology",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/services/img2.webp",
  },
  {
    title: "Prenatal ultrasound",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/services/img3.webp",
  },
  {
    title: "Fertility medication",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/services/img4.webp",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
              <path d="M10 0L12.2451 7.75486H20L13.8775 12.2451L16.1225 20L10 15.5098L3.87746 20L6.12254 12.2451L0 7.75486H7.75486L10 0Z" fill="currentColor"/>
            </svg>
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Our Services</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-secondary mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We Offer Services for You
          </motion.h2>
        </div>

        {/* Services List - Alternating Layout */}
        <div className="space-y-20 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-16 group`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Decorative number */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary/40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="w-20 h-1 bg-primary mb-6" />
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
