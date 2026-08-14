import React from "react";
import { Helmet } from "react-helmet-async";
import { GlobalStyle } from "../components/Shared";
import Header from "../components/Header";
import LocationHero from "../components/LocationHero";
import About from "../components/About";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HairExtensionKorattur() {
  return (
    <div className="lp-root relative">
      <Helmet>
        <title>Best Master Hair Extension Course in Korattur, Chennai</title>
        <meta name="description" content="Want to specialize in hair extensions in Korattur, Chennai? Blend & Bloom Salon Academy offers hands-on, industry-focused training." />
        <meta name="keywords" content="best master hair extension course in korattur, chennai" />
        <link rel="canonical" href="/best-master-hair-extension-course-in-korattur-chennai/" />
        
        <meta property="og:title" content="Best Master Hair Extension Course in Korattur, Chennai" />
        <meta property="og:description" content="Want to specialize in hair extensions in Korattur, Chennai? Blend & Bloom Salon Academy offers hands-on, industry-focused training." />
        <meta property="og:url" content="/best-master-hair-extension-course-in-korattur-chennai/" />
      </Helmet>
      
      <GlobalStyle />
      <Header />
      <LocationHero h1Text="Korattur's Leading Hair Extension Training Program" hideCourses={true} />
      <About 
        title="Our Services"
        subtitle="Professional Beauty Services Designed for You"
        desc="At Blend & Bloom Salon Academy, we offer professional beauty services delivered with expert techniques and personalized care. From hair styling and makeup artistry to skincare and beauty treatments, our services are designed to enhance your look, confidence, and overall experience."
        exploreHref="#services"
        exploreOnClick={(e) => {
          e.preventDefault();
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', '/services');
        }}
      />
      <Services />
      <Clients />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer hideCourses={true} />
    </div>
  );
}
