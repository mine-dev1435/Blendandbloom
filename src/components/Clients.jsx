import React, { useState, useEffect, useCallback } from "react";
import { Reveal, Heading } from "./Shared";
import { CLIENTS } from "../constants";

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = CLIENTS.length;

  const next = useCallback(() => setCurrentIndex((prev) => (prev + 1) % total), [total]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  // Returns offset from active: -2, -1, 0, 1, 2
  const getOffset = (i) => {
    let diff = i - currentIndex;
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;
    return diff;
  };

  // Slot config matching screenshot: bottom-aligned, stair-step heights
  const getSlotStyles = (offset) => {
    if (isMobile) {
      switch (offset) {
        case 0:
          return { left: "50%", width: "45vw", height: "95%", opacity: 1, zIndex: 30 };
        case -1:
          return { left: "15%", width: "35vw", height: "75%", opacity: 1, zIndex: 20 };
        case 1:
          return { left: "85%", width: "35vw", height: "75%", opacity: 1, zIndex: 20 };
        default:
          return { left: offset < 0 ? "-20%" : "120%", width: "30vw", height: "50%", opacity: 0, zIndex: 5 };
      }
    }

    switch (offset) {
      case 0:
        // CENTER ACTIVE - TALLEST
        return { left: "50%", width: "22vw", height: "95%", opacity: 1, zIndex: 30 };
      case -1:
        // LEFT SMALL
        return { left: "27%", width: "18vw", height: "75%", opacity: 1, zIndex: 20 };
      case 1:
        // RIGHT SMALL
        return { left: "73%", width: "18vw", height: "75%", opacity: 1, zIndex: 20 };
      case -2:
        // FAR LEFT - partially clipped
        return { left: "7%", width: "15vw", height: "60%", opacity: 1, zIndex: 10 };
      case 2:
        // FAR RIGHT - partially clipped
        return { left: "93%", width: "15vw", height: "60%", opacity: 1, zIndex: 10 };
      default:
        // Hidden offscreen
        return { left: offset < 0 ? "-10%" : "110%", width: "14vw", height: "50%", opacity: 0, zIndex: 5 };
    }
  };

  return (
    <section className="py-10 relative overflow-hidden" style={{ backgroundImage: "url('/img/our-clients-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Overlay to heavily reduce the intensity of the background image */}
      <div className="absolute inset-0 bg-white/80 pointer-events-none"></div>

      <div className="w-full relative z-10">
        <Reveal className="flex flex-col items-center mb-10 px-6">
          <Heading lineSrc="img/client_line.png" lineWidth="280px">Our Clients</Heading>
          <p className="text-gray-600 text-center mt-2 max-w-lg">We are proud to serve a growing community of clients who trust our expertise and quality.</p>
        </Reveal>

        {/* Carousel Container */}
        <div className="relative w-full" style={{ height: "clamp(300px, 35vw, 450px)" }}>
          {/* Edge Fade Overlays */}
          <div className="absolute top-0 left-0 w-[15%] h-full bg-gradient-to-r from-white/90 to-transparent z-40 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[25%] h-full bg-gradient-to-l from-white/95 via-white/70 to-transparent z-40 pointer-events-none"></div>

          {CLIENTS.map((src, i) => {
            const offset = getOffset(i);
            const slot = getSlotStyles(offset);

            // Skip items too far away
            if (Math.abs(offset) > 2 && slot.opacity === 0) return null;

            return (
              <div
                key={i}
                className="absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{
                  left: slot.left,
                  width: slot.width,
                  height: slot.height,
                  bottom: 0,
                  transform: "translateX(-50%)",
                  opacity: slot.opacity,
                  zIndex: slot.zIndex,
                }}
              >
                <div
                  className="w-full h-full overflow-hidden"
                  style={{
                    boxShadow: offset === 0 ? "0 20px 40px rgba(0,0,0,0.15)" : "0 10px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <img
                    src={src}
                    alt={`Client ${i + 1}`}
                    className="w-full h-full object-cover"
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
