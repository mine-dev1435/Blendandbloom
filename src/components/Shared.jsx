import React, { useEffect, useRef, useState } from "react";

export const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600;700&family=Host+Grotesk:wght@300;400;500;600;700&display=swap');

    .lp-root {
      --ink: #0b0a08;
      --panel: #141310;
      --gold: #d4af37;
      --gold-bright: #f0c94a;
      --cream: #f7f2e9;
      --cream-dim: #ece4d3;
      --muted: #9c9587;
      font-family: 'Host Grotesk', sans-serif;
      background: var(--cream);
      color: var(--ink);
      overflow-x: hidden;
    }
    .lp-root .serif { font-family: 'Cormorant', serif; }

    @keyframes lpFadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes lpFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes lpScaleIn {
      from { opacity: 0; transform: scale(0.94); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes lpShimmer {
      0%   { background-position: 0% 50%; }
      100% { background-position: 200% 50%; }
    }
    @keyframes lpFloat {
      0%, 100% { transform: translateY(0px); }
      50%      { transform: translateY(-10px); }
    }
    @keyframes lpMarquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    @keyframes lpPulseRing {
      0%   { box-shadow: 0 0 0 0 rgba(212,175,55,0.45); }
      100% { box-shadow: 0 0 0 14px rgba(212,175,55,0); }
    }

    .lp-reveal {
      opacity: 0;
      animation: lpFadeUp 0.9s cubic-bezier(.22,.61,.36,1) forwards;
    }
    .lp-gold-btn {
      position: relative;
      background: linear-gradient(100deg, #caa437 0%, #f0d668 25%, #caa437 50%, #f0d668 75%, #caa437 100%);
      background-size: 200% 100%;
      color: #0b0a08;
      font-weight: 600;
      letter-spacing: 0.08em;
      transition: transform .35s ease, box-shadow .35s ease, background-position .8s ease;
    }
    .lp-gold-btn:hover {
      background-position: 100% 50%;
      transform: translateY(-2px) scale(1.03);
      box-shadow: 0 10px 24px -8px rgba(212,175,55,0.8);
    }
    .lp-outline-btn {
      border: 1px solid rgba(247,242,233,0.5);
      color: var(--cream);
      transition: all .35s ease;
    }
    .lp-outline-btn:hover {
      background: var(--cream);
      color: var(--ink);
      border-color: var(--cream);
      transform: translateY(-2px) scale(1.03);
    }
    .lp-float-btn-1 {
      animation: lpFloat 3s ease-in-out infinite;
    }
    .lp-float-btn-1:hover {
      animation: none;
    }
    .lp-float-btn-2 {
      animation: lpFloat 3s ease-in-out infinite;
      animation-delay: 0.3s;
    }
    .lp-float-btn-2:hover {
      animation: none;
    }

    .lp-card { transition: transform .5s cubic-bezier(.22,.61,.36,1), box-shadow .5s ease; }
    .lp-card:hover { transform: translateY(-10px); box-shadow: 0 30px 60px -20px rgba(0,0,0,0.5); }
    .lp-card:hover .lp-card-img { transform: scale(1.08); }
    .lp-card-img { transition: transform .7s cubic-bezier(.22,.61,.36,1); }


    .lp-nav-link { 
      font-size: 17px;
      position: relative; 
    }
    .lp-nav-link::after {
      content: '';
      position: absolute; left: 0; bottom: -4px;
      width: 0%; height: 1px;
      background: var(--gold);
      transition: width .35s ease;
    }
    .lp-nav-link:hover::after { width: 100%; }

    .lp-portrait { transition: transform .6s ease, filter .6s ease; filter: grayscale(0.15); }
    .lp-portrait-wrap:hover .lp-portrait { transform: scale(1.06); filter: grayscale(0); }

    .lp-marquee-track {
      animation: lpMarquee 34s linear infinite;
    }
    .lp-marquee-track:hover { animation-play-state: paused; }

    .lp-scrollbar::-webkit-scrollbar { display: none; }
    .lp-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

    @media (prefers-reduced-motion: reduce) {
      .lp-reveal, .lp-card, .lp-card-img, .lp-portrait, .lp-marquee-track { animation: none !important; transition: none !important; }
    }
  `}</style>
);

export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={visible ? `lp-reveal ${className}` : `opacity-0 ${className}`}
      style={visible ? { animationDelay: `${delay}ms` } : {}}
    >
      {children}
    </div>
  );
}

export function Kicker({ children, dark = false }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-[1px]" style={{ background: dark ? "rgba(255,255,255,0.2)" : "rgba(11,10,8,0.2)" }} />
      <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: dark ? "var(--gold)" : "var(--ink)" }}>
        {children}
      </span>
    </div>
  );
}

export function Heading({ children, light = false, noLine = false, lineSrc = "/img/line_img.png", lineWidth = "419px" }) {
  // Ensure lineSrc starts with a leading slash for nested routes
  const srcPath = lineSrc && !lineSrc.startsWith('/') ? `/${lineSrc}` : lineSrc;
  return (
    <div className="flex flex-col items-center w-full">
      <h2
        className="serif text-center text-3xl md:text-[45px] mb-1"
        style={{ fontWeight: "700", color: light ? "var(--cream)" : "var(--ink)" }}
      >
        {children}
      </h2>
      {!noLine && (
        <img src={srcPath} alt="Divider Line" className="mb-2 h-auto object-contain" style={lineWidth ? { width: lineWidth } : {}} />
      )}
    </div>
  );
}
