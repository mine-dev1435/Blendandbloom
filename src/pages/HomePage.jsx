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

export default function HomePage({ seoTitle, seoDescription }) {
  useEffect(() => {
    const path = window.location.pathname.substring(1);
    if (path && path !== "home") {
      const elem = document.getElementById(path);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else if (path === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="lp-root relative">
      <Helmet>
        <title>Best Salon Academy for Hair, Skin & Makeup Training</title>
        <meta name="description" content="Blend & Bloom Salon Academy shapes the next generation of beauty professionals — hair styling, extensions, skin care & makeup artistry. Enroll today." />
        <meta name="keywords" content="best salon academy for hair, skin & makeup training" />
        <link rel="canonical" href="/" />
        
        <meta property="og:title" content="Best Salon Academy for Hair, Skin & Makeup Training" />
        <meta property="og:description" content="Blend & Bloom Salon Academy shapes the next generation of beauty professionals — hair styling, extensions, skin care & makeup artistry. Enroll today." />
        <meta property="og:url" content="/" />
      </Helmet>
      <GlobalStyle />
      <Header />
      <Hero />
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
