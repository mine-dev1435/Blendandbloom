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

export default function SkinCareAmbattur() {
  return (
    <div className="lp-root relative">
      <Helmet>
        <title>Best Professional Skin Care Course in Ambattur, Chennai</title>
        <meta name="description" content="Learn professional skin care techniques in Ambattur, Chennai at Blend & Bloom Salon Academy — facials, treatments & skin analysis. Enroll today." />
        <meta name="keywords" content="best professional skin care course in ambattur, chennai" />
        <link rel="canonical" href="/best-professional-skin-care-course-in-ambattur-chennai/" />
        
        <meta property="og:title" content="Best Professional Skin Care Course in Ambattur, Chennai" />
        <meta property="og:description" content="Learn professional skin care techniques in Ambattur, Chennai at Blend & Bloom Salon Academy — facials, treatments & skin analysis. Enroll today." />
        <meta property="og:url" content="/best-professional-skin-care-course-in-ambattur-chennai/" />
      </Helmet>
      
      <GlobalStyle />
      <Header />
      <LocationHero h1Text="Professional Skin Care Course in Ambattur" hideCourses={true} />
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
