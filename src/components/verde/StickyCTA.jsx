
import React from 'react';
import { motion } from 'framer-motion';

const APPLY_URL = "https://lincolnprprts.appfolio.com/apply/cce9fd15-8974-4faf-a352-b8ee9a8e41e5/start?source=Website";

export default function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, delay: 1 }}
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
    >
      <div className="bg-white/80 backdrop-blur-sm p-4 border-t border-neutral-200">
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center rounded-xl px-4 py-3 bg-red-600 text-white font-medium shadow-lg hover:bg-red-700"
        >
          Apply Now
        </a>
      </div>
    </motion.div>
  );
}
