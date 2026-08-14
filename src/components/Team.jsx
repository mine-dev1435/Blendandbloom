import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, Heading } from "./Shared";
import { TEAM } from "../constants";

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => setCurrentIndex((prev) => (prev + 1) % TEAM.length), []);
  const prev = useCallback(() => setCurrentIndex((prev) => (prev - 1 + TEAM.length) % TEAM.length), []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  // Calculate the relative position index (0 = Active, 1 = Next, 2 = Next2, 3 = Prev)
  const getSlotIndex = (i) => {
    return (i - currentIndex + TEAM.length) % TEAM.length;
  };

  return (
    <section id="team" className="pt-28 pb-12 md:py-20 bg-[#F6F5F2] relative overflow-hidden scroll-mt-28 md:scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-6">

        <Reveal className="flex flex-col items-center mb-3 md:mb-10">
          <Heading lineWidth="300px">Meet Our Professionals</Heading>
        </Reveal>

        {/* 
          This container holds the absolute positioned images.
          It mimics the height of the original flex layout. 
        */}
        <div className="relative w-full h-[650px] md:h-[620px] mb-0">

          {/* Static Text Block - Positioned exactly where it was in the original UI */}
          <div className="absolute w-full md:w-[44%] md:left-[56%] top-0 md:top-8 text-center md:text-left z-40 transition-all duration-500 animate-fade-in" key={TEAM[currentIndex].name}>
            <p className="text-[14px] leading-relaxed text-gray-700 mb-2 font-medium">
              {TEAM[currentIndex].desc}
            </p>
            <div className="w-28 h-1 Btn_all mb-4 mx-auto md:mx-0"></div>
            <h3 className="text-[28px] font-bold text-black leading-none mb-0">{TEAM[currentIndex].name}</h3>
            <p className="text-[#eab308] font-semibold mt-1">{TEAM[currentIndex].role}</p>
          </div>

          {/* Absolute Sliding Images */}
          {TEAM.map((member, i) => {
            const slot = getSlotIndex(i);

            // Default to hidden/offscreen
            let styles = { opacity: 0, pointerEvents: "none" };

            // DESKTOP LAYOUT MAPPING (Exact match to original screenshot UI)
            // Slot 0: Active Center (Large)
            // Slot 1: Right Small 1
            // Slot 2: Right Small 2
            // Slot 3: Left Small (Prev)

            if (typeof window !== "undefined" && window.innerWidth >= 768) {
              if (slot === 0) {
                styles = { left: "23%", width: "31%", height: "620px", bottom: "0", opacity: 1, zIndex: 30 };
              } else if (slot === 1) {
                styles = { left: "56%", width: "21%", height: "320px", bottom: "0", opacity: 1, zIndex: 20 };
              } else if (slot === 2) {
                styles = { left: "79%", width: "21%", height: "320px", bottom: "0", opacity: 1, zIndex: 20 };
              } else if (slot === 3) {
                styles = { left: "0%", width: "21%", height: "320px", bottom: "0", opacity: 1, zIndex: 20 };
              }
            } else {
              // MOBILE LAYOUT MAPPING (Active big, side previews)
              if (slot === 0) {
                styles = { left: "50%", transform: "translateX(-50%)", width: "85%", height: "400px", bottom: "0", opacity: 1, zIndex: 30 };
              } else if (slot === 1) {
                styles = { left: "150%", transform: "translateX(-50%)", width: "70%", height: "320px", bottom: "0", opacity: 0.5, zIndex: 20 };
              } else if (slot === 2) {
                styles = { left: "250%", transform: "translateX(-50%)", width: "70%", height: "320px", bottom: "0", opacity: 0, zIndex: 10 };
              } else if (slot === 3) {
                styles = { left: "-50%", transform: "translateX(-50%)", width: "70%", height: "320px", bottom: "0", opacity: 0.5, zIndex: 20 };
              }
            }

            return (
              <div
                key={member.name}
                className="absolute transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{
                  ...styles,
                }}
              >
                <div
                  className="w-full h-full rounded-2xl md:rounded-[16px] overflow-hidden"
                  style={{ boxShadow: slot === 0 ? "0 20px 40px rgba(0,0,0,0.15)" : "0 10px 20px rgba(0,0,0,0.1)" }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
