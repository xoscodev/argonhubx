import React, { useRef, useState, useEffect } from 'react';

export const Footer: React.FC = () => {
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
    <footer ref={sectionRef} className={`text-white transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex">
            <div>
              <h3 className="text-sm font-poppins text-gray-500 mb-4">Socials</h3>
              <ul className="space-y-3">
                <li><a href="https://discord.gg/CEWG2z54" className="text-gray-400 hover:text-red-400 transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-t border-red-800/30 my-12" />
        <div>
          <p className="text-sm text-gray-500">
            Copyright ArgonHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
