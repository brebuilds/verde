
import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Wifi, Tv, Home, Users, Dumbbell, MapPin } from 'lucide-react';

const APPLY_URL = "https://lincolnprprts.appfolio.com/apply/cce9fd15-8974-4faf-a352-b8ee9a8e41e5/start?source=Website";

export default function Amenities() {
  const keyFeatures = [
    { icon: <Home size={20} />, title: "Move-in Ready", subtitle: "Fully furnished & equipped" },
    { icon: <Wifi size={20} />, title: "All-Inclusive", subtitle: "WiFi, utilities & more" },
    { icon: <Bed size={20} />, title: "3 Room Options", subtitle: "Private & shared layouts" },
    { icon: <Dumbbell size={20} />, title: "EOS Gym Access", subtitle: "Premium membership included" },
  ];

  return (
    <section id="amenities" className="bg-white text-neutral-900 scroll-mt-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
        >
          Your Home Away From Home
        </motion.h2>
        
        {/* Key Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {keyFeatures.map((feature, i) => (
            <div key={i} className="flex flex-col items-center p-4 rounded-xl bg-red-50 text-center">
              <div className="text-red-600 mb-2">{feature.icon}</div>
              <h4 className="font-semibold text-sm">{feature.title}</h4>
              <p className="text-xs text-neutral-600">{feature.subtitle}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg prose-neutral max-w-none"
        >
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Step into your home away from home—brand-new, fully furnished 3-bedroom, 2-bath homes designed for SEU Arizona students. Enjoy modern comforts and all-inclusive simplicity, so you can focus on your classes and college life.
          </p>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
            <p className="text-neutral-800 font-medium mb-3">Move-in is truly plug-and-play:</p>
            <p className="text-neutral-700">
              Skip the hassle of furniture hunts, utility setups, and deposits. Each home features stylish furniture, a smart TV, WiFi, utilities, and EOS gym access, all included in one flat monthly rate.
            </p>
          </div>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Choose from three distinct room options: a private bedroom with a large bed, black bunk beds with a desk setup, or gray twin beds at ground level—plus, our roommate questionnaire helps match you with the perfect fit. The living room boasts a cozy couch and a 55-inch TV, while the kitchen comes with all the basics you need (just bring your own towels and bedding).
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="bg-neutral-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Dumbbell className="text-red-600" size={24} />
                <h4 className="font-semibold">Stay Active & Connected</h4>
              </div>
              <p className="text-neutral-700 text-sm">
                Stay active with an on-site basketball court and included EOS gym membership, and connect with your community through regular events.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-red-600" size={24} />
                <h4 className="font-semibold">Perfect Location</h4>
              </div>
              <p className="text-neutral-700 text-sm">
                Our location puts you steps from SEU Arizona and Dream City Church, with shopping, dining, and scenic parks just minutes away.
              </p>
            </div>
          </div>

          <p className="text-neutral-700 leading-relaxed mb-8">
            With digital smart locks, ample parking, and responsive management, you'll feel right at home. Secure your spot in this student-first community—modern, comfortable, and designed for your success.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center pb-20"
        >
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-2xl px-8 py-4 bg-red-600 text-white font-semibold shadow-lg hover:shadow-xl hover:bg-red-700 transition focus:outline-none focus:ring-4 focus:ring-red-200"
          >
            Apply Now
          </a>
          <p className="text-sm text-neutral-500 mt-3">
            Start your SEU Arizona journey with Verde Gardens
          </p>
        </motion.div>
      </div>
    </section>
  );
}
