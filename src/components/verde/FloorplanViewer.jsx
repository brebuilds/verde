
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut, RotateCcw, ChevronDown } from 'lucide-react';
import SpotlightCard from '@/components/shared/SpotlightCard';

const FLOORPLAN_IMG = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b202a5aaa3ba0b9af4ec94/cc8026afd_floorplan.png";

const faqs = [
  { q: "Do I need to bring any furniture?", a: "No. Apartments are fully furnished and ready to go with beds, sofas, tables, and more." },
  { q: "What should I bring?", a: "Please bring your own personal items, bath towels, and bedding." },
  { q: "Are utilities and WiFi included?", a: "Yes. All utilities and high-speed WiFi are included in your monthly rent." },
  { q: "Is there a TV?", a: "Yes. A 55-inch Smart TV is included in each apartment's living area." },
  { q: "What's included with the EOS membership?", a: "Access to all EōS locations, VIP guest privileges, a complimentary welcome workout, The Tank recovery space, and the E7 nutrition program." },
  { q: "How do I apply?", a: "Click any 'Apply Now' button on this page. You will be taken to our secure external resident portal to complete your application." },
];

export default function FloorplanViewer() {
  const [scale, setScale] = useState(1);
  const zoom = (d) => setScale((s) => Math.min(3, Math.max(0.75, s + d)));

  return (
    <section id="floorplan" className="max-w-7xl mx-auto px-6 py-20 md:py-28 scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* Left Column: Floorplan */}
        <div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">3BR / 2BA Floorplan</h2>
              <p className="mt-2 text-neutral-600">Spacious, modern, and designed for shared living.</p>
            </div>
            <div className="flex gap-2 p-1 bg-neutral-100 rounded-xl">
              <button onClick={() => zoom(-0.25)} className="rounded-lg px-3 py-2 text-neutral-600 hover:bg-white hover:text-red-600 transition-colors"><ZoomOut size={20} /></button>
              <button onClick={() => zoom(+0.25)} className="rounded-lg px-3 py-2 text-neutral-600 hover:bg-white hover:text-red-600 transition-colors"><ZoomIn size={20} /></button>
              <button onClick={() => setScale(1)} className="rounded-lg px-3 py-2 text-neutral-600 hover:bg-white hover:text-red-600 transition-colors"><RotateCcw size={20} /></button>
            </div>
          </div>
          <SpotlightCard className="overflow-auto rounded-2xl border-4 border-neutral-100 bg-white">
            <motion.div
                className="w-full h-full"
                animate={{ scale }}
                style={{ transformOrigin: 'center' }}
            >
              <img src={FLOORPLAN_IMG} alt="3BR / 2BA Floorplan" className="max-w-none w-full" />
            </motion.div>
          </SpotlightCard>
        </div>

        {/* Right Column: FAQ */}
        <div className="lg:mt-16">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.05 * idx }}
              >
                <details className="group rounded-2xl border border-neutral-200 bg-white open:shadow-lg open:bg-neutral-50 transition-all duration-300">
                  <summary className="cursor-pointer list-none p-5 font-medium flex items-center justify-between text-lg">
                    <span>{item.q}</span>
                    <ChevronDown className="transition-transform duration-300 group-open:rotate-180 text-red-600" />
                  </summary>
                  <div className="px-5 pb-5 text-neutral-600">{item.a}</div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
