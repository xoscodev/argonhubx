import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CopyableCode } from './CopyableCode';
import { SparkleIcon } from './icons/SparkleIcon';

const WORDS = ['Ultimate', 'Best', 'Powerful', 'Fastest'];
const TYPING_SPEED = 150;
const DELETING_SPEED = 75;
const PAUSE_DURATION = 2000;


export const Hero: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = WORDS[wordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % WORDS.length);
      }
    };

    const typingTimeout = setTimeout(
      handleTyping,
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = (mousePosition.y - centerY) / 20;
    const rotateY = (centerX - mousePosition.x) / 20;

    setTilt({ x: rotateX, y: rotateY });
  }, [mousePosition]);

  const getImageTransform = () => {
    if (isHovered) {
      return 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.05, 1.05, 1.05)';
    }
    return `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const isPaused = !isDeleting && text === WORDS[wordIndex];

  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="text-left">
          <div className="inline-flex items-center gap-x-2 rounded-full border border-red-500/50 bg-red-500/10 px-4 py-1 text-sm text-red-300 mb-4">
              Welcome to ArgonHub
              <SparkleIcon />
          </div>
          <h1 className="text-5xl md:text-6xl font-poppins font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-red-400 leading-tight">
            The {text}{isPaused ? <span className="animate-pulse">|</span> : <span>|</span>} Script<br />for Blade Ball
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-400 leading-relaxed">
            Used by the top players, ArgonHub enables you to dominate every match with{' '}
            <span className="text-white">powerful and undetectable scripts</span> like Auto-Parry, Semi-Immortal, and more.
          </p>
          <div className="mt-8">
            <CopyableCode textToCopy='loadstring(game:HttpGet("https://raw.githubusercontent.com/AgentX771/ArgonHubX/main/Loader.lua"))()' />
          </div>
        </div>
        
        {/* Right Column: Image */}
        <div
            className="tilt-container"
            style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
            }}
        >
            <img
                ref={imageRef}
                src="/herosection.png"
                alt="ArgonHub Hero Section"
                className="tilt-image rounded-xl shadow-2xl shadow-red-500/10 border border-red-800/40 transition-transform duration-300 ease-out"
                style={{
                    transform: getImageTransform(),
                    transformStyle: 'preserve-3d'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
        </div>
      </div>
    </section>
  );
};
