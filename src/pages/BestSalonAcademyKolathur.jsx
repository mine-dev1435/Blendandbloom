import React from "react";
import { Helmet } from "react-helmet-async";
import { GlobalStyle } from "../components/Shared";
import Header from "../components/Header";
import LocationHero from "../components/LocationHero";
import About from "../components/About";
import Services from "../components/Services";
import Clients from "../components/Clients";
import TrainingPrograms from "../components/TrainingPrograms";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function BestSalonAcademyKolathur() {
  return (
    <div className="lp-root relative">
      <Helmet>
        <title>Best Salon Academy in Kolathur, Chennai | Blend & Bloom</title>
        <meta name="description" content="Blend & Bloom Salon Academy in Kolathur, Chennai trains the next generation of beauty professionals in hair styling, extensions, skin care & makeup. Enroll today." />
        <meta name="keywords" content="best salon academy in kolathur, chennai" />
        <link rel="canonical" href="/best-salon-academy-in-kolathur-chennai/" />
        
        <meta property="og:title" content="Best Salon Academy in Kolathur, Chennai | Blend & Bloom" />
        <meta property="og:description" content="Blend & Bloom Salon Academy in Kolathur, Chennai trains the next generation of beauty professionals in hair styling, extensions, skin care & makeup. Enroll today." />
        <meta property="og:url" content="/best-salon-academy-in-kolathur-chennai/" />
      </Helmet>
      
      <GlobalStyle />
      <Header />
      <LocationHero h1Text="Blend & Bloom Salon Academy — Kolathur's Beauty Career Institute" />
      <About />
      <Services />
      <Clients />
      <TrainingPrograms />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
