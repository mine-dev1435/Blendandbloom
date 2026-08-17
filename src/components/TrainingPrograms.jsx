import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROGRAMS } from "../constants";
import { Heading } from "./Shared";

gsap.registerPlugin(ScrollTrigger);

export default function TrainingPrograms() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useLayoutEffect(() => {
    if (isMobile) return;

    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".program-panel");

      // We pin the container for a total scroll distance of 100% per card (minus the first one)
      const totalScroll = (panels.length - 1) * 100;

      // Start all panels (except the very first) pushed down completely (100% of their height)
      gsap.set(panels.slice(1), { yPercent: 100 });

      // Create a master timeline that scrubs through the entire pinned duration
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalScroll}%`,
          pin: true,
          scrub: true,
        }
      });

      // Animate each panel upward sequentially to replace the previous one
      panels.forEach((panel, i) => {
        if (i === 0) return; // Panel 0 is already at 0%
        tl.to(panel, {
          yPercent: 0,
          ease: "none"
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      id="programs"
      ref={containerRef}
      className={`relative w-full bg-[#050505] overflow-hidden flex flex-col ${isMobile ? "py-12" : "pt-20 pb-8 md:pt-32 md:pb-12 min-h-screen"}`}
      style={{
        backgroundImage: "linear-gradient(rgba(5, 5, 5, 0.92), rgba(5, 5, 5, 0.95)), url('/img/bg_imgservice.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      {/* Heading */}
      <div className={`w-full flex flex-col items-center px-6 ${isMobile ? "relative mb-8" : "absolute top-8 md:top-[8%] z-50 pointer-events-none"}`}>
        <Heading light lineWidth="300px">Industry-Ready Beauty Training</Heading>
      </div>

      {/* Stacking / Grid container */}
      <div className={isMobile ? "flex flex-col gap-8 px-4" : "grid w-full min-h-screen pt-10 md:pt-10 pb-[2vh] md:pb-[4vh]"}>
        {PROGRAMS.map((p, i) => (
          <div
            key={p.title}
            className="program-panel w-full flex justify-center"
            style={{
              gridArea: isMobile ? "auto" : "1 / 1",
              zIndex: isMobile ? "auto" : 10 + i,
            }}
          >
            {/* The actual Card */}
            <div
              className={`w-full max-w-6xl bg-[#111] rounded-[2.5rem] border border-white/10 ${isMobile ? "p-6" : "mx-auto px-6 p-6 md:p-10"}`}
              style={{
                boxShadow: "0 -20px 50px rgba(0,0,0,0.8)",
                transform: isMobile ? "none" : `scale(${1 - (PROGRAMS.length - 1 - i) * 0.02})`,
                transformOrigin: "top center"
              }}
            >

              <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}>
                {/* Image Side */}
                <div className="w-full">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full aspect-square md:aspect-[4/3.2] object-cover rounded-2xl"
                    style={{ boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)" }}
                  />
                </div>

                {/* Content Side */}
                <div className={`flex flex-col ${i % 2 !== 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="mb-4 md:mb-6">
                    <h3 className="font-bold text-white tracking-tight inline-block border-b-2 pb-2 text-xl md:text-[28px]" style={{ lineHeight: "1.3", borderColor: "var(--gold-bright)" }}>
                      {p.title}
                    </h3>
                  </div>

                  <p className="text-[14px] md:text-[15px] leading-relaxed mb-6 md:mb-8" style={{ color: "rgba(255,255,255,0.9)" }}>
                    {p.desc}
                  </p>

                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-10">
                    {p.points.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-3 md:gap-4 text-[13px] md:text-[14px]" style={{ color: "rgba(255,255,255,0.75)" }}>
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 Btn_all"></div>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    <a 
                      href="#contact" 
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', '/contact');
                      }}
                      className="Btn_all font-semibold text-[12px] md:text-[13px] px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:brightness-110 transition-all text-center" 
                      style={{ color: "#000" }}
                    >
                      Apply Now
                    </a>
                    <a 
                      href="tel:+917010221841"
                      className="border_gradient font-semibold text-[12px] md:text-[13px] px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:bg-white/5 transition-all text-center" 
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      Click to Call
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
