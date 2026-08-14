import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Shared";

export default function About({
  title = "About us",
  subtitle = <>Where Passion for Beauty<br />Becomes a Professional Career</>,
  desc = "At Blend & Bloom Salon Academy, we combine creativity, expertise, and industry-leading education to shape the next generation of beauty professionals. From precision hair styling and advanced skincare to makeup artistry and salon managementence needed to excel in the beauty industry.",
  exploreHref = "#programs",
  exploreText = "Explore Now",
  exploreOnClick = (e) => {
    e.preventDefault();
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', '/programs');
  }
}) {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-10 items-start">
        {/* Left Side: Image */}
        <Reveal delay={150}>
          <div className="rounded-xl overflow-hidden mx-auto md:mx-0 w-full max-w-[440px] aspect-square" style={{ boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)" }}>
            <img
              src="/img/About_us.jpeg"
              alt="Salon session"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        {/* Right Side: Content */}
        <Reveal className="flex flex-col items-start text-left gap-6 md:gap-8 py-2">
          <div className="flex flex-col items-start gap-2">
            <h2 className="serif inline-block text-3xl md:text-[45px]" style={{ color: "var(--ink)", lineHeight: "1.1", fontWeight: "700", marginTop: "0" }}>
              {title}
            </h2>
            <img src="/img/About-line.png" alt="Divider Line" className="h-auto object-contain" />
          </div>
          <h3 className="font-bold text-xl md:text-[26px]" style={{ color: "var(--ink)", lineHeight: "1.4" }}>
            {subtitle}
          </h3>
          <p className="leading-relaxed text-sm md:text-base" style={{ color: "rgb(68, 68, 68)", textAlign: "justify" }}>
            {desc}
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a 
              href={exploreHref} 
              onClick={exploreOnClick}
              className="Btn_all inline-flex justify-center items-center rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ 
                color: "var(--ink)", 
                padding: "12px 28px" 
              }}
            >
              {exploreText}
            </a>
            
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '/contact');
              }}
              className="inline-flex justify-center items-center rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5 gap-3"
              style={{ 
                border: "1px solid var(--gold-bright)", 
                color: "var(--ink)", 
                padding: "8px 10px 8px 24px" 
              }}
            >
              Contact Us
              <span 
                className="Btn_all flex items-center justify-center rounded-full" 
                style={{ 
                  width: "28px", 
                  height: "28px" 
                }}
              >
                <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
