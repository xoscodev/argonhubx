import React, { useRef, useState, useEffect } from 'react';
import { TestimonialCard } from './TestimonialCard';
import { SparkleIcon } from './icons/SparkleIcon';

const testimonials = [
    {
        quote: "With ArgonHub's auto-parry, I went from a casual player to a lobby dominator overnight. The script is so smooth and has never failed me. 10/10 would recommend.",
    },
    {
        quote: "The Semi-Immortal feature is a lifesaver. It has saved me in so many clash situations I thought were impossible to win. An absolute game-changer for clutch moments.",
    },
    {
        quote: "I was worried about getting banned, but ArgonHub is completely safe. I've been using it for weeks without any issues. The devs really care about security.",
    },
    {
        quote: "The clean interface and easy setup make ArgonHub a pleasure to use. I was up and running in minutes. It's powerful without being complicated.",
    },
];


export const TestimonialsSection: React.FC = () => {
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
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
                <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-x-2 rounded-full border border-red-500/50 bg-red-500/10 px-4 py-1 text-sm text-red-300">
                        Stories
                        <SparkleIcon />
                    </div>
                    <h2 className="mt-8 text-4xl sm:text-5xl font-poppins font-light tracking-tight text-white">
                        Here's What Players Are Saying<br />About <span className="italic font-normal text-red-400">ArgonHub</span>
                    </h2>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                    {testimonials.map((testimonial, index) => (
                         <div
                            key={index}
                            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: isVisible ? `${150 + index * 100}ms` : '0ms' }}
                        >
                            <TestimonialCard 
                                quote={testimonial.quote}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
