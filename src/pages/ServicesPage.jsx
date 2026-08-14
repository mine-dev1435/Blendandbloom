import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { GlobalStyle } from "../components/Shared";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Clients from "../components/Clients";
import TrainingPrograms from "../components/TrainingPrograms";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lp-root relative">
      <Helmet>
        <title>Our Premium Beauty Services — Blend & Bloom Salon Academy</title>
        <meta name="description" content="Explore our premium beauty services including haircuts, coloring, botox, keratin treatments, skin care & bridal makeup. Book your appointment today." />
        <meta name="keywords" content="premium beauty services, salon academy services" />
        <link rel="canonical" href="/services" />
      </Helmet>
      
      <GlobalStyle />
      <Header />
      <Hero hideCourses={true} />
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
