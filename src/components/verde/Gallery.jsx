import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ALL_IMGS = [
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/db32f5c1e_VG-LivingArea-Wide.png', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ce5055f9f_VG-SingleRoom.png', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e3d410142_VG-KitchenCloseUp.png', category: 'Kitchen', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/78f987c6e_VG-Bunks.png', category: 'Bedrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a063fd0b0_VG-LivingRoom.png', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cc471a565_Hero.jpg', category: 'Kitchen', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0bc41e612_VG-Bathroom.png', category: 'Bathrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/389de54de_VG-SharedBedroom-Left.png', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1ba916c2c_VG-KitchenAfar.png', category: 'Kitchen', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e0300f4c3_VG-ConsoleTable.png', category: 'Living Area', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7b27c6d2c_VG-Outdoors.png', category: 'Community', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/550899f6f_VG-BunkRight.png', category: 'Bedrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d765a28bd_VG-Laundry.png', category: 'Bathrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3f8dfcb47_VG-ClosetUnit.png', category: 'Bedrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6a9ffebaf_VG-Dining.png', category: 'Living Area', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c927243d6_VG-Outdoors2.png', category: 'Community', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/09346965e_VG-DiningLayout.png', category: 'Kitchen', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/59f76c944_VG-SharedfromRight.png', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4b07f7366_VG-SharedRoomZoom.png', category: 'Bedrooms', orientation: 'portrait' },
];

const categories = ['All', 'Living Area', 'Bedrooms', 'Kitchen', 'Bathrooms', 'Community'];

export default function Gallery() {
  const [openImg, setOpenImg] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? ALL_IMGS
    : ALL_IMGS.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="bg-neutral-50 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">See Yourself Here</h2>
            <p className="mt-4 text-lg text-neutral-600">A glimpse into life at Verde Gardens.</p>
        </motion.div>
        
        <div className="my-8 flex justify-center flex-wrap gap-2">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeCategory === cat ? 'bg-red-600 text-white shadow' : 'bg-white text-neutral-700 hover:bg-neutral-100'}`}
                >
                    {cat}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{gridAutoRows: '8rem'}}>
          {filteredImages.map((img, i) => (
            <motion.div
              key={img.src + i}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`relative overflow-hidden rounded-xl cursor-zoom-in group ${
                  img.orientation === 'portrait' ? 'row-span-2' : 'row-span-1'
                }`}
              onClick={() => setOpenImg(img.src)}
            >
              <img
                src={img.src}
                alt={`${img.category} image ${i + 1}`}
                className="w-full h-full object-cover border border-neutral-200 group-hover:opacity-80 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpenImg(null)}
          >
            <motion.img
              layoutId={openImg}
              src={openImg}
              alt="Enlarged view"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            />
            <button className="absolute top-4 right-4 text-white p-2 bg-black/50 rounded-full">
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}