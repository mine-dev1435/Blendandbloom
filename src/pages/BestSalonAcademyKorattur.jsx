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

export default function BestSalonAcademyKorattur() {
  return (
    <div className="lp-root relative">
      <Helmet>
        <title>Best Salon Academy in Korattur, Chennai | Blend & Bloom</title>
        <meta name="description" content="Blend & Bloom Salon Academy offers hands-on beauty training in Korattur, Chennai — hair, skin, and makeup courses taught by industry experts." />
        <meta name="keywords" content="best salon academy in korattur, chennai" />
        <link rel="canonical" href="/best-salon-academy-in-korattur-chennai/" />
        
        <meta property="og:title" content="Best Salon Academy in Korattur, Chennai | Blend & Bloom" />
        <meta property="og:description" content="Blend & Bloom Salon Academy offers hands-on beauty training in Korattur, Chennai — hair, skin, and makeup courses taught by industry experts." />
        <meta property="og:url" content="/best-salon-academy-in-korattur-chennai/" />
      </Helmet>
      
      <GlobalStyle />
      <Header />
      <LocationHero h1Text="Korattur's Trusted Academy for Hair, Skin & Makeup Training" />
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
