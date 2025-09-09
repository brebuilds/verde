
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bed, Wifi, Tv, Zap, Dumbbell, Bath } from 'lucide-react';
import SpotlightCard from '@/components/shared/SpotlightCard';

const APPLY_URL = "https://lincolnprprts.appfolio.com/apply/cce9fd15-8974-4faf-a352-b8ee9a8e41e5/start?source=Website";

const tiers = [
  { 
    name: "Private Room - Queen Bed", 
    price: 800, 
    perks: [
      { text: "All Utilities", icon: <Zap size={16} /> },
      { text: "WiFi", icon: <Wifi size={16} /> },
      { text: "Fully furnished, move-in ready", icon: <Tv size={16} /> },
      { text: "EOS Gym Included", icon: <Dumbbell size={16} /> },
      { text: "Shared Bathroom", icon: <Bath size={16} /> }
    ], 
    icon: <Bed size={24} />,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/932b44d0a_VG-SingleRoom.png"
  },
  { 
    name: "Shared Room - Twin Bed", 
    price: 500, 
    perks: [
      { text: "All Utilities", icon: <Zap size={16} /> },
      { text: "WiFi", icon: <Wifi size={16} /> },
      { text: "Fully furnished, move-in ready", icon: <Tv size={16} /> },
      { text: "EOS Gym Included", icon: <Dumbbell size={16} /> },
      { text: "Shared Bathroom", icon: <Bath size={16} /> }
    ], 
    icon: <Bed size={24} />,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a5f429167_VG-SharedBedroom-Left.png",
    // 'popular' property removed as per instructions
  },
  { 
    name: "Shared Room - Twin Loft", 
    price: 500, 
    perks: [
      { text: "All Utilities", icon: <Zap size={16} /> },
      { text: "WiFi", icon: <Wifi size={16} /> },
      { text: "Fully furnished, move-in ready", icon: <Tv size={16} /> },
      { text: "EOS Gym Included", icon: <Dumbbell size={16} /> },
      { text: "Shared Bathroom", icon: <Bath size={16} /> }
    ], 
    icon: <Bed size={24} />,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2c049b396_VG-Bunks.png"
  },
];

export default function LivingOptions() {
  return (
    <section id="living-options" className="max-w-7xl mx-auto px-6 py-20 md:py-28 scroll-mt-20">
      <motion.div initial={{opacity: 0, y:30}} whileInView={{opacity: 1, y: 0}} viewport={{ once: true, amount: 0.3 }} transition={{duration: 0.8, ease: "easeOut"}}>
        <h2 className="text-3xl md:text-4xl font-normal text-center bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
          Choose Your Setup
        </h2>
        <p className="mt-4 text-lg text-neutral-600 text-center max-w-4xl mx-auto leading-relaxed font-light">
          Per-room leasing, all-inclusive pricing. Everything you need, just steps from campus.
        </p>
      </motion.div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
          >
            <SpotlightCard className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200">
              {/* Room Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img 
                  src={t.image} 
                  alt={`${t.name} room view`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6">
                {/* Room Title */}
                <h3 className="text-lg font-normal text-neutral-900 mb-2">{t.name}</h3>
                
                {/* Price */}
                <div className="mb-6 text-3xl font-normal text-neutral-900">
                  ${t.price}
                  <span className="text-base font-light text-neutral-500">/mo</span>
                </div>
                
                {/* Features with Icons */}
                <div className="space-y-3 mb-8">
                  {t.perks.map((perk, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-red-600 flex-shrink-0">{perk.icon}</div>
                      <span className="text-sm font-light text-neutral-700">{perk.text}</span>
                    </div>
                  ))}
                </div>
                
                {/* Apply Button */}
                <a 
                  href={APPLY_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full text-center block rounded-xl px-4 py-2.5 bg-red-600 text-white font-light hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 text-sm"
                >
                  Apply Now
                </a>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
