import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants";

export default function Footer({ hideCourses = false }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
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
      } else if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, '', '/home');
      }
    }
  };

  return (
    <footer className="relative bg-[#FFFCF6] overflow-hidden pt-20 md:pt-20  border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between mb-16">
          
          {/* Column 1 - Contact Info */}
          <div className="w-full md:w-[35%] flex flex-col mb-12 md:mb-0 pr-0 md:pr-8">
            <div className="flex gap-4 mb-5">
              <a 
                href="https://www.instagram.com/blendandbloom_salon/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="Btn_all w-10 h-10 rounded-full flex items-center justify-center text-black hover:brightness-110 transition-all shadow-sm hover:scale-105"
                title="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a 
                href="https://wa.me/917010221841" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="Btn_all w-10 h-10 rounded-full flex items-center justify-center text-black hover:brightness-110 transition-all shadow-sm hover:scale-105"
                title="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/people/Blend-Bloom-unisex-salon/61578695871425/?ref=PROFILE_EDIT_xav_ig_profile_page_web#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="Btn_all w-10 h-10 rounded-full flex items-center justify-center text-black hover:brightness-110 transition-all shadow-sm hover:scale-105"
                title="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
            
            <div className="text-[14px] text-gray-900 leading-relaxed font-medium space-y-3">
              <p>
               NO .10, Pachayappan colony, <br></br>
               Perambur Red Hills High Rd, <br></br>
               Secretariat Colony,Pachaiappan Colony,<br></br>
               Vinayakapuram,Kolathur,<br></br>
                Chennai,
                Tamil Nadu 600099
              </p>
              <p>
                <a href="mailto:blendandbloom.msd@gmail.com" className="hover:text-[#eab308] transition-colors">
                  blendandbloom.msd@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+917010221841" className="hover:text-[#eab308] transition-colors">
                  +91 70102 21841
                </a>
              </p>
               <p>
                <a href="tel:+919600103193" className="hover:text-[#eab308] transition-colors">
                        +91 9600103193
                </a>
              </p>
            </div>
          </div>

          {/* Menus Container */}
          <div className="w-full md:w-[60%] grid grid-cols-2 md:flex justify-between gap-10 md:gap-0">
            {/* Column 2 - Menu */}
            <div className={hideCourses ? "w-full md:w-[45%]" : "w-full md:w-[30%]"}>
              <h4 className="text-[#eab308] font-semibold mb-6 text-[15px]">Menu</h4>
              <ul className="space-y-4 text-[14px] text-gray-900 font-medium">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="hover:text-[#eab308] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Courses */}
            {!hideCourses && (
              <div className="w-full md:w-[30%]">
                <h4 className="text-[#eab308] font-semibold mb-6 text-[15px]">Courses</h4>
                <ul className="space-y-4 text-[14px] text-gray-900 font-medium">
                  <li><a href="#programs" onClick={(e) => handleNavClick(e, "#programs")} className="hover:text-[#eab308] transition-colors">Hair</a></li>
                  <li><a href="#programs" onClick={(e) => handleNavClick(e, "#programs")} className="hover:text-[#eab308] transition-colors">Skin</a></li>
                  <li><a href="#programs" onClick={(e) => handleNavClick(e, "#programs")} className="hover:text-[#eab308] transition-colors">Hair Extention</a></li>
                  <li><a href="#programs" onClick={(e) => handleNavClick(e, "#programs")} className="hover:text-[#eab308] transition-colors">Make Up</a></li>
                </ul>
              </div>
            )}

            {/* Column 4 - Our Services */}
            <div className={hideCourses ? "w-full md:w-[45%] col-span-2 md:col-span-1" : "w-full md:w-[40%] col-span-2 md:col-span-1"}>
              <h4 className="text-[#eab308] font-semibold mb-6 text-[15px]">Our Services</h4>
              <ul className="space-y-4 text-[14px] text-gray-900 font-medium">
                <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-[#eab308] transition-colors">Hair Styling</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-[#eab308] transition-colors">Hair Extensions</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-[#eab308] transition-colors">Skin Care</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-[#eab308] transition-colors">Professional Makeup</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-[#eab308] transition-colors">Bridal Packages</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-[#eab308] transition-colors">Hair Spa & Treatments</a></li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Divider with Button */}
        <div className="relative pt-12">
          {/* Actual Line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200"></div>
          
          {/* Button Overlapping Line on Far Right */}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, "#contact")} 
            className="absolute -top-[20px] right-0 md:right-0 Btn_all text-black font-semibold text-[14px] px-8 md:px-10 py-3.5 rounded-full hover:brightness-110 transition-all z-20"
          >
            Enroll Now
          </a>

          <div className="flex flex-col md:flex-row items-start justify-between w-full pt-6 gap-6 md:gap-0">
            
            {/* Left Block */}
            <div className="w-full md:w-[35%] text-[12px] leading-relaxed text-gray-500 pr-0 md:pr-8">
              At Blend & Bloom Salon Academy, we empower aspiring<br className="hidden md:block" />
              beauty professionals through expert-led training, practical<br className="hidden md:block" />
              experience, and industry-focused education that transforms<br className="hidden md:block" />
              passion into successful careers.
            </div>
            
            {/* Center Block */}
            <div className="w-full md:w-[30%] flex justify-start md:justify-center text-gray-600 font-medium text-[14px]">
              <a href="https://www.asterinfometrics.com/" className="hover:text-black">Design & Developed By Aster Infometrics Pvt Ltd.</a>
            </div>


          </div>
          
        </div>
      </div>

      {/* Large Watermark Text */}
      <div 
        className="relative w-full flex justify-center pointer-events-none select-none overflow-hidden mt-8"
        style={{ opacity: "0.4" }}
      >
        <span 
          className="font-bold text-gray-200 tracking-widest whitespace-nowrap"
          style={{ fontSize: "clamp(60px, 12vw, 200px)", lineHeight: "0.8" }}
        >
          BLEND & BLOOM
        </span>
      </div>
     
      
      {/* Floating Buttons Code Hosted Inside Footer */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-[100]">
        {/* Scroll to Top Button (Fades in on scroll) */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`w-12 h-12 rounded-full flex items-center justify-center bg-black/80 text-white shadow-lg backdrop-blur-sm transition-all duration-300 border border-white/10 hover:bg-black hover:border-white/30 ${
            showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>

        {/* WhatsApp Floating Action Button */}
        <a
          href="https://wa.me/917010221841"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
          style={{ boxShadow: "0 10px 25px -5px rgba(37, 211, 102, 0.5)" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
