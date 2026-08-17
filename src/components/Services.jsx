import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, Kicker, Heading } from "./Shared";
import { SERVICES } from "../constants";

export default function Services() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Triple the array to allow for seamless infinite scrolling
  const ALL_SERVICES = [...SERVICES, ...SERVICES, ...SERVICES];

  // Center the scroll position on mount so we can go left or right infinitely
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 350;
      const gap = 32;
      const setWidth = (cardWidth + gap) * SERVICES.length;
      // Jump to the start of the middle set
      scrollRef.current.scrollLeft = setWidth;
    }
  }, []);

  const handleNext = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 350;
    const gap = 32;
    const itemWidth = cardWidth + gap;
    const setWidth = itemWidth * SERVICES.length;

    // If we are reaching the end of the 3rd set, invisibly jump back 1 full set
    if (scrollRef.current.scrollLeft >= setWidth * 2 - itemWidth) {
      scrollRef.current.scrollLeft -= setWidth;
    }

    // Smooth scroll to next
    requestAnimationFrame(() => {
      scrollRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
    });
  };

  const handlePrev = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 350;
    const gap = 32;
    const itemWidth = cardWidth + gap;
    const setWidth = itemWidth * SERVICES.length;

    // If we are reaching the start of the 1st set, invisibly jump forward 1 full set
    if (scrollRef.current.scrollLeft <= itemWidth) {
      scrollRef.current.scrollLeft += setWidth;
    }

    // Smooth scroll to prev
    requestAnimationFrame(() => {
      scrollRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    });
  };

  // Auto-slide continuously every 1.5 seconds
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(handleNext, 1500);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section id="services" className="pt-10 pb-6 overflow-hidden" style={{ background: "var(--ink)" }}>
      <div className="w-full px-6 max-w-7xl mx-auto">
        <Reveal className="flex flex-col items-center mb-10">
          <Kicker light>What We Teach</Kicker>
          <Heading light>Our Premium Services</Heading>
          <p className="text-white text-center max-w-lg">Expert beauty services with personalized care and modern techniques.</p>
        </Reveal>
      </div>

      <div 
        className="relative w-full overflow-hidden pb-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Edge fade overlays */}
        <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-[var(--ink)] to-transparent z-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-[var(--ink)] to-transparent z-40 pointer-events-none" />

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-4 md:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {ALL_SERVICES.map((s, i) => (
            <div 
              key={s.title + i} 
              className="snap-center w-[85vw] md:w-[400px] shrink-0"
            >
              <div className="lp-card overflow-hidden h-full flex flex-col" style={{ background: "#000", borderRadius: "24px" }}>
                <div className="relative h-[350px] shrink-0">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover lp-card-img" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="px-4 md:px-7 pb-8 pt-0 flex-1 flex flex-col relative z-10 -mt-6">
                  <h3 className="text-[28px] font-bold text-white mb-3 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-gray-300 mb-3 md:mb-6 flex-1">
                    {s.desc}
                  </p>
                  <div className="flex flex-row items-center gap-3 w-full justify-between">
                    <a 
                      href="#contact" 
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', '/contact');
                      }}
                      className="Btn_all text-black font-semibold text-[10px] md:text-xs px-2 md:px-4 py-2 md:py-2.5 rounded-full hover:brightness-110 transition-all text-center flex-1"
                    >
                      Book Now
                    </a>
                    <a 
                      href="tel:+917010221841"
                      className="text-gray-200 hover:text-white font-semibold text-[10px] md:text-xs px-2 md:px-4 py-2 md:py-2.5 rounded-full transition-colors hover:bg-white/5 text-center flex-1" 
                      style={{ border: "1px solid var(--gold-bright)" }}
                    >
                      Click to Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex justify-center md:justify-end gap-3 mt-8 px-6 md:px-12 max-w-7xl mx-auto">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all border border-gray-600 hover:border-[#eab308] text-gray-300 hover:text-[#eab308]"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all border border-gray-600 hover:border-[#eab308] text-gray-300 hover:text-[#eab308]"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
