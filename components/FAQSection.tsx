import React, { useRef, useState, useEffect } from 'react';
import { AccordionItem } from './AccordionItem';
import { SparkleIcon } from './icons/SparkleIcon';

const faqs = [
  {
    question: 'What is ArgonHub?',
    answer: 'ArgonHub is a powerful script hub designed specifically for the Roblox game Blade Ball. It provides a suite of features like Auto-Parry and Semi-Immortal to give you a competitive edge.'
  },
  {
    question: 'How do I use ArgonHub?',
    answer: "It's simple! Copy the loadstring command from our site, paste it into your favorite Roblox script executor, and you'll be ready to dominate in seconds."
  },
  {
    question: 'Is ArgonHub safe to use?',
    answer: 'Yes. We prioritize your account safety. ArgonHub is equipped with advanced anti-detection features and receives regular updates to stay ahead of Roblox\'s anti-cheat.'
  },
  {
    question: 'Does ArgonHub work with any executor?',
    answer: 'ArgonHub is designed for compatibility with most modern, high-quality script executors. For the best experience, we recommend using a trusted and up-to-date executor.'
  }
];

export const FAQSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              setIsVisible(entry.isIntersecting);
          },
          { threshold: 0.1 }
      );

      const currentRef = sectionRef.current;
      if (currentRef) {
          observer.observe(currentRef);
      }

      return () => {
          if (currentRef) {
              observer.unobserve(currentRef);
          }
      };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 relative">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-x-2 rounded-full border border-red-500/50 bg-red-500/10 px-4 py-1 text-sm text-red-300">
                FAQs
                <SparkleIcon />
            </div>
            <h2 className="mt-8 text-4xl sm:text-5xl font-poppins font-light tracking-tight text-white">
                Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-400">
                Find answers to common questions about our script hub and its features.
            </p>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
                key={index}
                className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: isVisible ? `${150 + index * 100}ms` : '0ms' }}
            >
                <AccordionItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};