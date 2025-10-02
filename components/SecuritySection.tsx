import React, { useRef, useState, useEffect } from 'react';

export const SecuritySection: React.FC = () => {
    const securityFeatures = [
        'Bypass Anti-Cheat',
        'Regular Updates',
        'AI System',
        'Best Auto Parry',
        'Active Support',
        'Ability ESP',
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
        <section ref={sectionRef} className="py-20 sm:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className={`grid grid-cols-2 gap-x-8 gap-y-6 text-gray-400 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        {securityFeatures.map((feature) => (
                            <div key={feature} className="text-lg">
                                {feature}
                            </div>
                        ))}
                    </div>
                    <div className={`text-left transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="inline-block rounded-full border border-red-500/50 bg-red-500/10 px-3 py-1 text-sm font-medium">
                            <span className="text-red-400">WHY ARGONHUB</span>
                        </div>
                        <h2 className="mt-6 text-4xl sm:text-5xl font-poppins font-bold tracking-tight text-white">
                            Stay Ahead of the Game,<br />Undetected.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-400">
                            ArgonHub uses advanced techniques to remain hidden from anti-cheat systems, providing a safe and secure experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
