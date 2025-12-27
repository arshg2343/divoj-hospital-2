"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "New Mom",
    text: "The care I received during my pregnancy was phenomenal. Dr. Upasna is truly a gem who listens and cares like a family member.",
    rating: 5,
  },
  {
    name: "Anjali Gupta",
    role: "Patient",
    text: "Professional, clean, and very comforting environment. The best gynecology clinic I have visited in the city.",
    rating: 5,
  },
  {
    name: "Meera Verma",
    role: "IVF Success",
    text: "After years of trying, we finally succeeded thanks to the expert IVF guidance here. Forever grateful for our little miracle.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 text-secondary relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute right-0 top-0 w-96 h-96 bg-pink-300 rounded-full blur-[120px]" />
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-300 rounded-full blur-[120px]" />
            <div className="absolute right-1/2 top-1/2 w-96 h-96 bg-rose-300 rounded-full blur-[120px]" />
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Words from Our Patients</h2>
            <p className="text-gray-600 text-lg">Real stories of hope, health, and happiness.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-pink-100 shadow-xl hover:shadow-2xl transition-all duration-300 relative group hover:-translate-y-2"
            >
              <Quote className="absolute top-6 right-6 text-pink-300 opacity-40 group-hover:opacity-60 transition-opacity" size={50} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-lg leading-relaxed mb-6 text-gray-700 italic">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-secondary">{t.name}</h4>
                  <span className="text-sm text-gray-500">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
