import React, { useState, useEffect } from "react";

export default function Hero({ hideCourses = false }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden" style={{ background: "var(--ink)" }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(11,10,8,0.7) 0%, rgba(11,10,8,0.6) 40%, rgba(11,10,8,0.95) 100%), url('/img/Banner_img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="absolute inset-0 flex justify-center items-end z-10 pointer-events-none"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(40px)",
          transition: "all 1.2s cubic-bezier(.22,.61,.36,1) .2s",
        }}
      >
        <img src="/img/Banner_girlimg.png" alt="Model" className="max-h-[40vh] md:max-h-[70vh] object-contain mb-20 md:-mb-16" />
      </div>

      <div className="relative container mx-auto px-6 pb-8 md:pb-12 pt-32 md:pt-[18vh] w-full z-20 flex flex-col min-h-screen justify-between">

        <div className="flex flex-col items-center text-center mt-2">
          <p
            className="text-[12px] md:text-[20px] tracking-wider mb-2 md:mb-3 relative inline-block"
            style={{
              color: "var(--cream)",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transition: "all .8s cubic-bezier(.22,.61,.36,1) .1s",
            }}
          >
            Crafted by Expert Stylists with World-Class Products.
          </p>
          {/* Screen-reader only H1 for SEO */}
          <h1 className="sr-only">Blend & Bloom Salon Academy — Where Beauty Careers Begin</h1>
          
          {/* Visual text mimicking the original homepage */}
          <div
            className="serif uppercase leading-tight relative inline-block text-[28px] md:text-[65px]"
            style={{
              color: "var(--cream)",
              letterSpacing: "0.15em",
              opacity: loaded ? 1 : 0,
              fontWeight: "bold",
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition: "all .9s cubic-bezier(.22,.61,.36,1) .25s",
            }}
          >
            {hideCourses ? "Where Beauty Meets Expertise" : "Where Beauty Becomes Art"}
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-between items-center w-full mt-auto gap-4 md:gap-0"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all .9s cubic-bezier(.22,.61,.36,1) .55s",
          }}
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img className="w-11 h-11 rounded-full border-2 border-[#141310] object-cover" src="img/trainer_img1.jpeg" alt="Avatar" />
              <img className="w-11 h-11 rounded-full border-2 border-[#141310] object-cover" src="img/trainer_img2.jpeg" alt="Avatar" />
              <img className="w-11 h-11 rounded-full border-2 border-[#141310] object-cover" src="/img/trainer-img.jpeg" alt="Avatar" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold tracking-wide text-white">Professional Training</p>
              <p className="text-xs text-gray-400">Industry-Ready Curriculum</p>
            </div>
          </div>

          <div className="flex flex-row gap-3 md:gap-4 w-full md:w-auto justify-center">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '/services');
              }}
              className="lp-outline-btn lp-float-btn-2 text-[10px] md:text-xs uppercase px-5 md:px-7 py-3 rounded-full text-center flex-1 md:flex-none"
            >
              Explore Services
            </a>
            {!hideCourses && (
              <a
                href="#programs"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '/programs');
                }}
                className="lp-gold-btn lp-float-btn-1 text-[10px] md:text-xs uppercase px-5 md:px-7 py-3 rounded-full text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)] text-center flex-1 md:flex-none"
              >
                Explore Courses
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay to fade out the girl's image */}
      <div
        className="absolute bottom-0 left-0 w-full h-48 z-15 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--ink) 0%, rgba(11,10,8,0.8) 30%, transparent 100%)" }}
      ></div>

    </section>
  );
}
