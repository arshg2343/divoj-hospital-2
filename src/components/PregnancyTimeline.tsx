"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const timelineData = [
  { month: "1 Month", img: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/dummy/1.png" },
  { month: "2 Month", img: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/dummy/2.png" },
  { month: "3 Month", img: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/dummy/3.png" },
  { month: "4 Month", img: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/dummy/4.png" },
  { month: "5 Month", img: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/dummy/5.png" },
  { month: "6 Month", img: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/dummy/6.png" },
  { month: "7 Month", img: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/dummy/7.png" },
  { month: "8 Month", img: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/dummy/8.png" },
  { month: "9 Month", img: "https://clinicmaster.dexignzone.com/gynecology/xhtml/images/dummy/9.png" },
];

export default function PregnancyTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
            Taking Care of You and Your <br />
            Baby Pregnancy Timeline
          </h2>
        </div>
        
        <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="dummy-box flex flex-col items-center">
                <div className="dummy-media mb-4 w-24 h-40 md:w-28 md:h-48 lg:w-32 lg:h-56 flex items-end justify-center">
                  <Image
                    src={item.img}
                    alt={item.month}
                    width={128}
                    height={224}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="month-number">
                  <div className="timeline-number font-semibold text-secondary text-sm md:text-base border border-gray-200 px-4 py-2 rounded-md bg-white shadow-sm">
                    {item.month}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
