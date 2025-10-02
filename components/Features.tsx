import React, { useRef, useState, useEffect } from 'react';
import { SparkleIcon } from './icons/SparkleIcon';

export const Features: React.FC = () => {
    const features = [
        {
            title: 'Perfect Auto-Parry',
            description: "Never miss a block again. Our flawless auto-parry predicts and counters every incoming attack with perfect timing."
        },
        {
            title: 'Semi-Immortal',
            description: "Prevents the ball from killing you, giving you a massive advantage in crucial moments."
        },
        {
            title: 'Undetectable & Secure',
            description: "Play with confidence. ArgonHub is designed to be undetectable, keeping your account safe from bans."
        }
    ];

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
        <section ref={sectionRef} className="py-20 sm:py-28">
            <div className={`max-w-7xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="inline-flex items-center gap-x-2 rounded-full border border-red-500/50 bg-red-500/10 px-4 py-1 text-sm text-red-300">
                    Our Features
                    <SparkleIcon />
                </div>
                <h2 className="mt-8 text-4xl sm:text-5xl font-poppins font-light tracking-tight text-white">
                    Dominate Every Match<br />With <span className="italic font-normal text-red-400">Unmatched Power</span>
                </h2>

                <div className="mt-20 max-w-lg mx-auto grid grid-cols-1 gap-y-12 text-left md:max-w-none md:grid-cols-3 md:gap-x-8">
                    {features.map((feature, index) => (
                        <div 
                            key={feature.title}
                            className={`relative transition-all duration-700 ease-out ${index > 0 ? 'md:pl-8' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
                        >
                            {index > 0 && <div className="absolute left-0 top-1 bottom-1 w-px bg-red-800/30 hidden md:block" aria-hidden="true" />}
                            <h3 className="text-2xl font-poppins font-medium text-white">{feature.title}</h3>
                            <p className="mt-4 text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}