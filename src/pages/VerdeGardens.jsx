
import React from 'react';
import Header from '@/components/verde/Header';
import Hero from '@/components/verde/Hero';
import LivingOptions from '@/components/verde/LivingOptions';
import CommunityHub from '@/components/verde/CommunityHub';
import Amenities from '@/components/verde/Amenities';
import EosSpotlight from '@/components/verde/EosSpotlight';
import Gallery from '@/components/verde/Gallery';
import FloorplanViewer from '@/components/verde/FloorplanViewer';
import StickyCTA from '@/components/verde/StickyCTA';
import Footer from '@/components/verde/Footer';

export default function VerdeGardensPage() {
  return (
    <main className="bg-white text-neutral-900 font-sans">
      <Header />
      <Hero />
      <LivingOptions />
      <CommunityHub />
      <Amenities />
      <EosSpotlight />
      <Gallery />
      <FloorplanViewer />
      <Footer />
      <StickyCTA />
    </main>
  );
}
