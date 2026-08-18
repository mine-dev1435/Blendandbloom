// Booking component removed
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Reveal } from "./Shared";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const form = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Quick validation check
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus({ submitting: false, success: false, error: 'Please fill out all required fields.' });
      return;
    }
    
    setStatus({ submitting: true, success: false, error: null });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', phone: '', course: '', message: '' }); // reset form
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
    }, (error) => {
        setStatus({ submitting: false, success: false, error: 'Failed to send message. Please try again later.' });
        console.log('FAILED...', error.text);
    });
  };

  return (
    <section id="contact" className="relative pt-20 pb-12 md:pb-0 flex flex-col items-center" style={{ background: "#050505" }}>
      {/* Centered Top Badge */}
      <div className="w-full flex justify-center mb-8 md:mb-12">
        <div className="border_gradient inline-flex items-center gap-2.5 px-5 py-2 rounded-full">
          <div className="w-2.5 h-2.5 rounded-full animate-pulse Btn_all" />
          <span className="text-white text-[13px] tracking-wide">Start the Conversation</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center w-full">
        {/* Left Image (Same styling as About.jsx) */}
        <Reveal delay={150}>
          <div style={{ boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5)" }}>
            <img 
              src="/img/contactform_img.png" 
              alt="Contact us"
             
            />
          </div>
        </Reveal>

        {/* Right Content & Form */}
        <Reveal delay={150} className="flex flex-col items-start text-left">

          <div className="w-full max-w-xl flex flex-col justify-center">
            
            <form ref={form} className="flex flex-col gap-6" onSubmit={sendEmail}>
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="text"
                  name="name"
                  placeholder="Name *" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border_gradient px-4 py-3.5 text-white placeholder-white focus:outline-none w-full text-sm rounded-sm"
                />
                <input 
                  type="email"
                  name="email"
                  placeholder="Email Address *" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border_gradient px-4 py-3.5 text-white placeholder-white focus:outline-none w-full text-sm rounded-sm"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *" 
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="border_gradient px-4 py-3.5 text-white placeholder-white focus:outline-none w-full text-sm rounded-sm"
                />
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="border_gradient px-4 py-3.5 text-white placeholder-white focus:outline-none w-full text-sm rounded-sm bg-black"
                >
                  <option value="" disabled>Select Courses</option>
                  <option value="Master Professional Hair Styling">Master Professional Hair Styling</option>
                  <option value="Master Hair Extension Course">Master Hair Extension Course</option>
                  <option value="Professional Skin Care Course">Professional Skin Care Course</option>
                  <option value="Professional Makeup Course">Professional Makeup Course</option>
                </select>
              </div>

              {/* Row 3 - Textarea */}
              <textarea 
                name="message"
                placeholder="Leave Your Message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="border_gradient px-4 py-3.5 text-white placeholder-white focus:outline-none w-full resize-none text-sm rounded-sm"
              />

              {status.error && (
                <div className="text-red-400 text-sm mt-2">{status.error}</div>
              )}
              {status.success && (
                <div className="text-green-400 text-sm mt-2">Your message was sent successfully! We will get back to you soon.</div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status.submitting}
                className={`border_gradient inline-flex items-center justify-between gap-4 pl-6 pr-1.5 py-1.5 rounded-full mt-4 self-start transition-opacity ${status.submitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'}`}
              >
                <span className="text-white text-xs font-semibold tracking-wider">
                  {status.submitting ? 'SENDING...' : 'SUBMIT'}
                </span>
                <div className="Btn_all rounded-full p-1.5 flex items-center justify-center">
                  <ArrowRight size={16} className="text-black" strokeWidth={3} />
                </div>
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
