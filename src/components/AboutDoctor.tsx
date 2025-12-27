"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Award, GraduationCap, Heart, Users, Calendar } from "lucide-react";

export default function AboutDoctor() {
  return (
    <section id="doctors" className="py-24 bg-gradient-to-b from-pink-50/50 via-white to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Doctor Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white max-w-lg mx-auto">
               <Image 
                 src="/dr-upasna-setia.png" 
                 alt="Dr. Upasna Setia"
                 width={600}
                 height={700}
                 className="w-full h-auto object-cover"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/95 via-secondary/80 to-transparent p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Dr. Upasna Setia</h3>
                  <p className="text-lg opacity-90 mb-3">Senior Gynecologist & IVF Specialist</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>15+ Years</span>
                    </div>
                    <div className="w-1 h-1 bg-white rounded-full" />
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>5000+ Patients</span>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-10 right-10 w-full h-full border-2 border-primary/20 rounded-3xl -z-10 translate-x-8 translate-y-8 hidden md:block" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-100 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-primary" />
                <span className="bg-pink-100 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                  Meet Your Specialist
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                Compassionate Care<br/>
                <span className="text-primary">Medical Excellence</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                With over 15 years of experience in women's health and fertility, Dr. Upasna Setia is dedicated 
                to providing personalized care that empowers women. Her approach combines advanced medical 
                technology with a warm, empathetic touch.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
               <motion.div 
                 className="flex gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                 whileHover={{ y: -5 }}
                 transition={{ duration: 0.3 }}
               >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Award size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-secondary mb-1">Award Winning</h4>
                    <p className="text-sm text-gray-600">Recognized for excellence in IVF treatments.</p>
                  </div>
               </motion.div>
               <motion.div 
                 className="flex gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                 whileHover={{ y: -5 }}
                 transition={{ duration: 0.3 }}
               >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center text-secondary shrink-0">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-secondary mb-1">Certified Expert</h4>
                    <p className="text-sm text-gray-600">MBBS, MD (Obstetrics & Gynecology)</p>
                  </div>
               </motion.div>
            </div>

            {/* Expertise List */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50/30 p-8 rounded-2xl">
              <h3 className="font-bold text-xl text-secondary mb-4">Areas of Expertise</h3>
              <div className="grid gap-3">
                {[
                  "High-Risk Pregnancy Management",
                  "Advanced Infertility Treatments (IVF/IUI)",
                  "Laparoscopic Gynecological Surgeries",
                  "Adolescent Health Counseling"
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3 text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.button 
              className="bg-gradient-to-r from-primary to-pink-500 text-white px-10 py-4 rounded-full font-bold shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
               <Calendar className="w-5 h-5" />
               Book Consultation with Doctor
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
