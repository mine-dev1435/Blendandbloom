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

export default function BestSalonAcademyMathavaram() {
  return (
    <div className="lp-root relative">
      <Helmet>
        <title>Best Salon Academy in Mathavaram, Chennai | Blend & Bloom</title>
        <meta name="description" content="Looking for a salon academy in Mathavaram, Chennai? Blend & Bloom combines creativity and industry expertise to build real beauty careers. Talk to our team." />
        <meta name="keywords" content="best salon academy in mathavaram, chennai" />
        <link rel="canonical" href="/best-salon-academy-in-mathavaram-chennai/" />
        
        <meta property="og:title" content="Best Salon Academy in Mathavaram, Chennai | Blend & Bloom" />
        <meta property="og:description" content="Looking for a salon academy in Mathavaram, Chennai? Blend & Bloom combines creativity and industry expertise to build real beauty careers. Talk to our team." />
        <meta property="og:url" content="/best-salon-academy-in-mathavaram-chennai/" />
      </Helmet>
      
      <GlobalStyle />
      <Header />
      <LocationHero h1Text="Shape Your Beauty Career in Mathavaram with Blend & Bloom" />
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
