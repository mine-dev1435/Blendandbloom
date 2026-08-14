import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      setOpen(false);
      const targetId = href.substring(1);
      
      // Check if we are on the homepage or one of its section pathnames
      const path = window.location.pathname;
      const isHomePage = path === "/" || path === "/home" || path === "/about" || 
                         path === "/programs" || path === "/team" || 
                         path === "/testimonials" || path === "/faq" || path === "/contact";
      
      if (!isHomePage) {
        window.location.href = "/" + targetId;
        return;
      }
      
      e.preventDefault();
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, '', '/' + targetId);
      }
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(11,10,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.18)" : "1px solid transparent",
        boxShadow: scrolled ? "0 10px 30px -18px rgba(0,0,0,0.6)" : "none",
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between transition-all duration-500" style={{ height: scrolled ? "64px" : "84px" }}>
        <div className="flex items-center">
          <img src="/img/salon_logo.png" alt="Blend & Bloom" className="h-16 md:h-20 object-contain transition-all duration-500" />
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="lp-nav-link text-base"
              style={{ color: "var(--cream-dim)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hidden md:inline-block lp-gold-btn text-xs uppercase px-7 py-3 rounded-full text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)]">
          Contact Us
        </a>

        <button className="md:hidden" style={{ color: "var(--cream)" }} onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "rgba(11,10,8,0.97)" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={(e) => handleNavClick(e, l.href)} className="text-base" style={{ color: "var(--cream-dim)" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="lp-gold-btn text-xs uppercase px-6 py-3 rounded-sm text-center">
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
