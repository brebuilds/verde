
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const APPLY_URL = "https://lincolnprprts.appfolio.com/apply/cce9fd15-8974-4faf-a352-b8ee9a8e41e5/start?source=Website";

export default function Footer() {
  return (
    <footer className="relative bg-red-600 text-white">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Verde Gardens</h3>
            <p className="text-red-100 mb-6">
              Premium student housing designed for SEU Arizona students. Your home away from home.
            </p>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl px-6 py-3 bg-white text-red-600 font-semibold hover:bg-red-50 transition focus:outline-none focus:ring-2 focus:ring-white"
            >
              Apply Now
            </a>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-red-200" />
                <div>
                  <p className="font-medium">(480) 501-1515</p>
                  <p className="text-red-100 text-sm">Leasing Office</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-red-200" />
                <div>
                  <p className="font-medium">taylor@rdm-az.net</p>
                  <p className="text-red-100 text-sm">General Inquiries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-red-200" />
                <div>
                  <p className="font-medium">13230 North 22nd St</p>
                  <p className="text-red-100">Phoenix, AZ 85022</p>
                  <p className="text-red-100 text-sm">Across from SEU Arizona</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-red-200" />
                <div>
                  <p className="font-medium">Leasing Hours</p>
                  <p className="text-red-100 text-sm">Mon-Fri: 9AM-6PM</p>
                  <p className="text-red-100 text-sm">Sat: 10AM-4PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#living-options" className="block text-red-100 hover:text-white transition-colors">
                Living Options
              </a>
              <a href="#gallery" className="block text-red-100 hover:text-white transition-colors">
                Photo Gallery
              </a>
              <a href="#floorplan" className="block text-red-100 hover:text-white transition-colors">
                FAQ
              </a>
              <a 
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-red-100 hover:text-white transition-colors"
              >
                Apply Online
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-red-500/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-red-100 text-sm">
              © 2025 Verde Gardens. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-red-100 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-red-100 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-red-100 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
