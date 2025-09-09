
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Medal, Users, HeartPulse, Sparkles, Utensils } from 'lucide-react';

const perks = [
    { 
        title: "All EōS Locations", 
        description: "Access any gym, anytime.", 
        icon: <Medal />, 
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2787&auto=format&fit=crop" 
    },
    { 
        title: "VIP Guest Privileges", 
        description: "Bring a friend to work out with you.", 
        icon: <Users />,
        image: "https://images.unsplash.com/photo-1540496905033-59b5ba0dfa7e?q=80&w=2940&auto=format&fit=crop"
    },
    { 
        title: "Welcome Workout", 
        description: "A complimentary 1-hour session with a trainer.", 
        icon: <HeartPulse />,
        image: "https://images.unsplash.com/photo-1599422558667-123418737350?q=80&w=2859&auto=format&fit=crop"
    },
    { 
        title: "The Tank Recovery Space", 
        description: "Full access to massage chairs, percussion massagers, and more.", 
        icon: <Sparkles />,
        image: "https://images.unsplash.com/photo-1599422475279-05334e48819e?q=80&w=2815&auto=format&fit=crop"
    },
    { 
        title: "E7 Nutrition Program", 
        description: "Personalized nutrition guidance to meet your goals.", 
        icon: <Utensils />,
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2940&auto=format&fit=crop"
    },
];

export default function EosSpotlight() {
    const [hoveredPerkImage, setHoveredPerkImage] = useState(null);

    return (
        <section className="relative bg-neutral-900 text-white py-20 md:py-28 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4a19d8b1c_gymstock.jpg')`,
                opacity: 0.3,
              }}
            />
            <div className="absolute inset-0 bg-neutral-900/70" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                    initial={{opacity: 0, x:-30}} 
                    whileInView={{opacity: 1, x: 0}} 
                    viewport={{ once: true, amount: 0.3 }} 
                    transition={{duration: 0.7, ease: "easeOut"}}
                    className="relative"
                >
                    <AnimatePresence>
                        {hoveredPerkImage && (
                            <motion.div
                                key={hoveredPerkImage}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="absolute inset-0 z-0"
                            >
                                <div 
                                    className="absolute inset-0 bg-cover bg-center opacity-15"
                                    style={{ backgroundImage: `url(${hoveredPerkImage})` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-neutral-900"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold">Your Health, Included.</h2>
                        <p className="text-red-400 font-semibold mt-2 text-lg">Exclusive EōS Fitness Membership</p>
                        <p className="mt-4 text-neutral-300">
                            Every Verde Gardens resident receives a complimentary, top-tier EōS Fitness membership.
                            It's more than just gym access—it's a commitment to your well-being.
                        </p>
                    </div>
                </motion.div>
                <div className="space-y-5">
                    {perks.map((perk, i) => (
                        <motion.div
                            key={perk.title}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                            className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 transition-colors duration-300"
                            onMouseEnter={() => setHoveredPerkImage(perk.image)}
                            onMouseLeave={() => setHoveredPerkImage(null)}
                        >
                            <div className="text-red-500 mt-1">
                                {React.cloneElement(perk.icon, { size: 24 })}
                            </div>
                            <div>
                                <h4 className="font-semibold">{perk.title}</h4>
                                <p className="text-sm text-neutral-400">{perk.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
