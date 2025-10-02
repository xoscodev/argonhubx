import React, { useRef, useState, useEffect } from 'react';
import { CopyableCode } from './CopyableCode';
import { StarIcon } from './icons/StarIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

export const GetStartedSection: React.FC = () => {
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
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`bg-red-950/10 border border-red-800/40 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Left Column */}
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-poppins font-light tracking-tight text-white">
                            Get ArgonHub Now<br />
                            <span className="italic font-normal text-red-400">For Free</span>
                        </h2>
                        <div className="mt-6 space-y-3 text-gray-400">
                            <div className="flex items-center gap-3">
                                <CheckCircleIcon />
                                <span>Completely free to use</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircleIcon />
                                <span>Instant access</span>
                            </div>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="flex flex-col items-start md:items-center gap-6">
                        <CopyableCode textToCopy='loadstring(game:HttpGet("https://raw.githubusercontent.com/AgentX771/ArgonHubX/main/Loader.lua"))()' />
                        <div className="flex items-center gap-3">
                            <StarIcon />
                            <div>
                                <p className="text-white font-medium">4.9 / 5</p>
                                <p className="text-gray-500 text-sm">From 15000+ Player Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
