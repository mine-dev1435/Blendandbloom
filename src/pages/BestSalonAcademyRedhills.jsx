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

export default function BestSalonAcademyRedhills() {
  return (
    <div className="lp-root relative">
      <Helmet>
        <title>Best Salon Academy in Redhills, Chennai | Blend & Bloom</title>
        <meta name="description" content="Blend & Bloom Salon Academy offers hands-on beauty training in Redhills, Chennai — hair, skin, and makeup courses taught by industry experts." />
        <meta name="keywords" content="best salon academy in redhills, chennai" />
        <link rel="canonical" href="/best-salon-academy-in-redhills-chennai/" />
        
        <meta property="og:title" content="Best Salon Academy in Redhills, Chennai | Blend & Bloom" />
        <meta property="og:description" content="Blend & Bloom Salon Academy offers hands-on beauty training in Redhills, Chennai — hair, skin, and makeup courses taught by industry experts." />
        <meta property="og:url" content="/best-salon-academy-in-redhills-chennai/" />
      </Helmet>
      
      <GlobalStyle />
      <Header />
      <LocationHero h1Text="Redhills's Trusted Academy for Hair, Skin & Makeup Training" />
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
