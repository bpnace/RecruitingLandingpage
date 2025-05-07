import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/Hero';
import InfoBar from '../components/InfoBar';
import IndustriesSection from '../components/Industries';
import TestimonialSection from '../components/Testimonial';
import CallbackFormSection from '../components/CallbackForm';
import NewsSection from '../components/News';
import LogoBar from '../components/LogoBar';
import Footer from '../components/Footer';
import ClientBannerSection from '../components/ClientBanner';

const news = [
  { title: 'Neue Recruiting-Trends 2024', date: '01.06.2024', img: 'https://picsum.photos/seed/news1/400/300' },
  { title: 'Tipps für erfolgreiche Bewerbungen', date: '15.05.2024', img: 'https://picsum.photos/seed/news2/400/300' },
];

export default function Startseite() {
  return (
    <div>
      <Header />
      <HeroSection />
      <InfoBar />
      <IndustriesSection />
      <ClientBannerSection />
      <TestimonialSection />
      <CallbackFormSection />
      <NewsSection />
      <LogoBar />
      <Footer />
    </div>
  );
} 