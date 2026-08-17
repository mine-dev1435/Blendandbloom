import React, { useEffect, useRef } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, Heading } from "./Shared";

const VIDEO_TESTIMONIALS = [
  {
    img: "/img/Reels_img1.jpeg",
    link: "https://www.instagram.com/reel/DZKgYr-PHQf/?igsh=MXNwZjE4aG1qaHh5Mg==",
  },
  {
    img: "/img/Reels_img2.jpeg",
    link: "https://www.instagram.com/p/DYj-NmPTcm4/?hl=en",
  },
  {
    img: "/img/Reels_img3.jpeg",
    link: "https://www.instagram.com/p/DXZIXAuzvhg/?hl=en",
  },
  {
    img: "/img/Reels_img4.jpeg",
    link: "https://www.instagram.com/p/DUVcbMFAfb1/?hl=en",
  },
  {
    img: "/img/Reels_img5.jpeg",
    link: "https://www.instagram.com/p/DXq0tkFgKXF/?hl=en",
  },
  // {
  //   img: "/img/Reels_img6.jpeg",
  //   link: "https://www.instagram.com/p/DVgPDFCE_kf/?hl=en",
  // },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const cardWidth = scrollRef.current.children[0]?.clientWidth || 320;
          const gap = 32; // gap-8 is 32px
          scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
        }
      }
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const scrollNext = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 320;
      scrollRef.current.scrollBy({ left: cardWidth + 32, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 320;
      scrollRef.current.scrollBy({ left: -(cardWidth + 32), behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="py-24" style={{ background: "var(--ink)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="flex flex-col items-center mb-8 md:mb-10">
          <Heading light>What Our Clients Really Say</Heading>
          <p className="text-white text-center mt-4 max-w-lg">Hear from our valued clients as they share their experiences and results with us.</p>
        </Reveal>
      </div>

      <Reveal>
        <div className="relative w-full overflow-hidden pt-8 pb-4 -mt-8">
          {/* Edge fading to blend seamlessly */}
          <div className="absolute top-0 left-0 w-12 md:w-24 h-[calc(100%-60px)] bg-gradient-to-r from-[var(--ink)] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 md:w-24 h-[calc(100%-60px)] bg-gradient-to-l from-[var(--ink)] to-transparent z-10 pointer-events-none" />

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pt-2 pb-6 px-6 md:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ scrollBehavior: "smooth" }}
          >
            {VIDEO_TESTIMONIALS.map((video, i) => (
              <a
                key={i}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="snap-center group/card relative block overflow-hidden rounded-xl h-[380px] md:h-[480px] shadow-xl cursor-pointer shrink-0 w-[260px] md:w-[320px]"
              >
                <img
                  src={video.img}
                  alt={`Client testimonial ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />

                {/* Dark hover overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/35 transition-colors duration-300" />

                {/* Custom Frosted Glass Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110"
                    style={{
                      background: "rgba(255, 255, 255, 0.25)",
                      backdropFilter: "blur(8px)",
                      border: "2px solid rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white ml-1"
                      style={{ fillOpacity: 0.9 }}
                    >
                      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center md:justify-end gap-3 mt-4 px-6 md:px-12">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all border border-gray-600 hover:border-[#eab308] text-gray-300 hover:text-[#eab308]"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all border border-gray-600 hover:border-[#eab308] text-gray-300 hover:text-[#eab308]"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

