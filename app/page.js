'use client';

import { useState } from 'react';
import Header from '../components/Header';
import BlueButtonStrip from '../components/BlueButtonStrip';
import CardStack from '../components/HeroSection';
import GiftCardSection from '../components/GiftCardSection';

import Footer from '../components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Check Balance');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BlueButtonStrip activeTab={activeTab} setActiveTab={setActiveTab} />
      <CardStack activeTab={activeTab} />
      <GiftCardSection />

      <Footer />
    </div>
  );
}