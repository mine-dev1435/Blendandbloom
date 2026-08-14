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

export default function HairStylingPadi() {
  return (
    <div className="lp-root relative">
      <Helmet>
        <title>Best Master Professional Hair Styling in Padi, Chennai</title>
        <meta name="description" content="Blend & Bloom Salon Academy's Master Professional Hair Styling course in Padi, Chennai covers modern cuts, coloring & styling. Get certified and job-ready." />
        <meta name="keywords" content="best master professional hair styling in padi, chennai" />
        <link rel="canonical" href="/best-master-professional-hair-styling-in-padi-chennai/" />
        
        <meta property="og:title" content="Best Master Professional Hair Styling in Padi, Chennai" />
        <meta property="og:description" content="Blend & Bloom Salon Academy's Master Professional Hair Styling course in Padi, Chennai covers modern cuts, coloring & styling. Get certified and job-ready." />
        <meta property="og:url" content="/best-master-professional-hair-styling-in-padi-chennai/" />
      </Helmet>
      
      <GlobalStyle />
      <Header />
      <LocationHero h1Text="Become a Certified Hair Stylist in Padi" hideCourses={true} />
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
