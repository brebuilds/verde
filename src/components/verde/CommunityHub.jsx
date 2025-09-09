
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const MATCHING_IMG = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop";

export default function CommunityHub() {
  return (
    <section id="community" className="scroll-mt-20">
      {/* Full-width Banner */}
      <div className="bg-neutral-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold"
          >
            More than a lease—join a community.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-neutral-300 max-w-3xl mx-auto"
          >
            Be paired with roommates that match your vibe, join study & game nights, and enjoy shared spaces—all right across from campus and the church community.
          </motion.p>
        </div>
      </div>

      {/* Roommate Matching Section */}
      <div className="bg-neutral-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3 className="text-3xl md:text-4xl font-bold leading-snug">
              Need a roommate? <br />
              <span className="text-red-600">We've got you.</span>
            </h3>
            <p className="mt-4 text-neutral-600 text-lg">
              Finding the right roommate can be stressful. We take the guesswork out of it with a thoughtful, lifestyle-based matching process. Or, bring your own friends!
            </p>
            <div className="mt-6 bg-red-50/70 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-neutral-700">
                We send a simple lifestyle questionnaire to thoughtfully match roommates based on study habits, social life, and cleanliness.
              </p>
            </div>
          </motion.div>
          
          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -top-4 -right-4 bg-white p-2.5 rounded-full shadow-lg">
                <Sparkles className="text-red-500" size={24} />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={MATCHING_IMG} alt="Students studying together" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white p-4 rounded-xl">
                <h4 className="font-bold text-lg">Your Future Crew Awaits</h4>
                <p className="text-sm text-neutral-200">Community is everything.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
