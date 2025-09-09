
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const APPLY_URL = "https://lincolnprprts.appfolio.com/apply/cce9fd15-8974-4faf-a352-b8ee9a8e41e5/start?source=Website";

const navLinks = [
{ title: "Living Options", href: "#living-options" },
{ title: "Community", href: "#community" },
{ title: "Gallery", href: "#gallery" },
{ title: "Floorplan", href: "#floorplan" },
{ title: "FAQ", href: "#floorplan" }];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 shadow-xl backdrop-blur-lg border-b border-white/20' : 'bg-transparent'}`
        }>

        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b202a5aaa3ba0b9af4ec94/6d4bdeb14_Verde.png" alt="Verde Gardens Logo" className="h-16 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.title}
              href={link.href} className="text-red-700 text-sm font-light hover:text-red-600 transition-all duration-300 relative group">

                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )}
            
            {/* Contact Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowContactDropdown(true)}
              onMouseLeave={() => setShowContactDropdown(false)}
            >
              <button className="text-red-700 text-sm font-light hover:text-red-600 transition-all duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              <AnimatePresence>
                {showContactDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-2xl border border-neutral-200 p-4 w-64 z-50"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-red-600" />
                        <div>
                          <p className="font-medium text-neutral-900">(480) 501-1515</p>
                          <p className="text-xs text-neutral-600">Leasing Office</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-red-600" />
                        <div>
                          <p className="font-medium text-neutral-900">taylor@rdm-az.net</p>
                          <p className="text-xs text-neutral-600">General Inquiries</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center rounded-2xl px-5 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-normal shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">

              Apply Now
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-neutral-700 hover:bg-neutral-100/80 backdrop-blur-sm transition-all duration-300"
              aria-label="Toggle menu">

              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={closeMenu}>

            <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}>
              <button onClick={closeMenu} className="absolute top-4 right-4 p-2 text-neutral-600">
                <X size={24} />
              </button>
              <nav className="mt-12 flex flex-col gap-6">
                {navLinks.map((link) =>
              <a key={link.title} href={link.href} onClick={closeMenu} className="text-lg font-medium text-neutral-700 hover:text-red-600">
                    {link.title}
                  </a>
              )}
              
                {/* Contact info in mobile menu */}
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-3">Contact</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-red-600" />
                      <span className="text-sm text-neutral-700">(480) 501-1515</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-red-600" />
                      <span className="text-sm text-neutral-700">taylor@rdm-az.net</span>
                    </div>
                  </div>
                </div>
                
                 <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full text-center rounded-xl px-4 py-2 bg-red-600 text-white font-medium shadow-sm hover:shadow-lg">
                    Apply Now
                 </a>
              </nav>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>
  );
}
