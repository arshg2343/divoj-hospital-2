"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Heart, Baby, Stethoscope } from "lucide-react";

const tabs = [
  {
    id: "getting-pregnant",
    label: "Getting Pregnant",
    title: "Expert Guidance for Your Conception Journey",
    description: "Whether you're just starting or facing challenges, we provide comprehensive fertility support.",
    benefits: [
      "Fertility assessments and counseling",
      "Ovulation tracking and induction",
      "PCOS and Endometriosis management",
      "Advanced reproductive technology (IVF/IUI)",
      "Male fertility evaluations"
    ],
    img: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/services/middle/img1.webp",
    icon: Heart,
    color: "from-pink-500 to-rose-500"
  },
  {
    id: "pregnancy",
    label: "Pregnancy",
    title: "Comprehensive Care at the Professional Pregnancy Center",
    description: "Experience a safe and healthy pregnancy with our world-class prenatal care and support systems.",
    benefits: [
      "Prenatal care and health consultations",
      "Ultrasounds and diagnostic imaging services",
      "Nutritional guidance for expecting mothers",
      "Labor preparation and childbirth classes",
      "Postnatal support and wellness programs"
    ],
    img: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/services/middle/img2.webp",
    icon: Baby,
    color: "from-primary to-pink-600"
  },
  {
    id: "first-scan",
    label: "Your First Scan",
    title: "Professional Ultrasound Imaging Services",
    description: "Capture the first moments of your baby's growth with our advanced diagnostic imaging technology.",
    benefits: [
      "Early pregnancy viability scans",
      "Detailed anomaly screening (Level II)",
      "3D/4D ultrasound experience",
      "Fetal growth and well-being checks",
      "Doppler studies for placenta health"
    ],
    img: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/services/middle/img3.webp",
    icon: Stethoscope,
    color: "from-secondary to-pink-500"
  }
];

export default function HelpingPeople() {
  const [activeTab, setActiveTab] = useState(tabs[1].id);

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[1];
  const Icon = currentTab.icon;

  return (
    <section className="py-24 bg-gradient-to-br from-white via-pink-50/30 to-rose-50/30 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-pink-100 px-6 py-2 rounded-full mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            We Are Helping People With
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Personalized care for every stage of your journey to motherhood
          </p>
        </motion.div>

        {/* Tabs Navigation - Vertical Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab, index) => {
            const TabIcon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative px-10 py-5 rounded-2xl font-bold transition-all duration-500 overflow-hidden ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r " + tab.color + " text-white shadow-2xl scale-105"
                    : "bg-white text-secondary hover:bg-pink-50 border-2 border-pink-100 hover:border-pink-200 hover:scale-105"
                }`}
              >
                <div className="flex items-center gap-3 relative z-10">
                  <TabIcon className={`w-6 h-6 transition-transform group-hover:scale-110 ${
                    activeTab === tab.id ? "" : "text-primary"
                  }`} />
                  <span className="text-lg">{tab.label}</span>
                </div>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Tab Content - Modern Card Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-96 lg:h-auto order-2 lg:order-1">
                  <Image
                    src={currentTab.img}
                    alt={currentTab.label}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentTab.color} opacity-20`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute -top-8 -right-8 lg:top-8 lg:-right-8 w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${currentTab.color} flex items-center justify-center`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-10 lg:p-14 order-1 lg:order-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-secondary leading-tight mb-4">
                    {currentTab.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {currentTab.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {currentTab.benefits.map((benefit, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="text-green-600 w-4 h-4" />
                        </div>
                        <span className="text-secondary font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  <button className={`w-full lg:w-auto bg-gradient-to-r ${currentTab.color} text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                    Learn More About {currentTab.label}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
