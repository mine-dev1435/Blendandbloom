import React, { useState } from 'react';
import { MinusCircle, PlusCircle, ArrowRight } from 'lucide-react';
import { Reveal } from './Shared';

const faqs = [
  {
    id: 1,
    question: 'Do I need any prior experience to join?',
    answer: 'No prior experience is required. Our courses are designed for beginners as well as aspiring beauty professionals, with step-by-step practical training from industry experts.'
  },
  {
    id: 2,
    question: 'Which courses do you offer?',
    answer: 'We offer a wide range of courses including precision haircuts, expert coloring, balayage, extensions, smoothing treatments, and comprehensive bridal makeup packages.'
  },
  {
    id: 3,
    question: 'Will I receive a certificate after completion?',
    answer: 'Yes, all our students receive an industry-recognized certificate upon successful completion of their chosen training program.'
  },
  {
    id: 4,
    question: 'Are the classes practical or theory-based?',
    answer: 'Our classes are highly practical. While we cover essential theory, the majority of your time will be spent getting hands-on experience with real models.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left Column */}
          <div className="lg:w-5/12 flex flex-col">
            <Reveal>
              <h2
                className="serif leading-tight mb-12 md:mb-20 text-3xl md:text-[42px]"
                style={{ fontWeight: "700", color: "#111" }}
              >
                General Questions<br />Asked By Customers
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex flex-col items-start gap-8">
                <p
                  style={{ color: "#5c413b", fontSize: "16px", lineHeight: "1.6", maxWidth: "340px", fontWeight: "600" }}
                >
                  Our friendly team is always here to help you with quick, clear, and reliable answers whenever needed.
                </p>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '/contact');
                  }}
                  className="Btn_all inline-flex items-center gap-3 px-5 py-2.5 rounded-full font-semibold transition-transform hover:scale-105"
                  style={{ color: "#111", fontSize: "14px" }}
                >
                  Enroll Now
                  <div className="bg-white rounded-full p-1 shadow-sm flex items-center justify-center">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column (Accordion) */}
          <div className="lg:w-7/12 flex flex-col gap-4 justify-end">
            {faqs.map((faq, i) => {
              const isOpen = openId === faq.id;
              return (
                <Reveal key={faq.id} delay={i * 100}>
                  <div
                    className="rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer shadow-sm"
                    style={{ background: "#F4F4F4" }}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <div className="px-8 py-5 flex justify-between items-center">
                      <h3 className="font-semibold text-[16px] text-gray-900 pr-8">
                        {faq.question}
                      </h3>
                      <div className="shrink-0 text-gray-900">
                        {isOpen ? <MinusCircle size={22} strokeWidth={1} /> : <PlusCircle size={22} strokeWidth={1} />}
                      </div>
                    </div>

                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: isOpen ? "200px" : "0",
                        opacity: isOpen ? 1 : 0
                      }}
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-500 text-[14px] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
