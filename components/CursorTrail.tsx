import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const NUM_CIRCLES = 15;
const EASING_FACTOR = 0.3; // Controls how smoothly the trail follows

export const CursorTrail: React.FC = () => {
    const [circles, setCircles] = useState(() => 
        Array.from({ length: NUM_CIRCLES }, () => ({ x: -100, y: -100 }))
    );

    const mousePos = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        let animationFrameId: number;

        const animateCircles = () => {
            setCircles(prevCircles => {
                const newCircles = [...prevCircles];
                
                // The first circle follows the mouse position exactly
                newCircles[0].x = mousePos.current.x;
                newCircles[0].y = mousePos.current.y;

                // Subsequent circles follow the one in front of them with easing
                for (let i = 1; i < NUM_CIRCLES; i++) {
                    const prevCircle = newCircles[i - 1];
                    const currentCircle = newCircles[i];
                    
                    currentCircle.x += (prevCircle.x - currentCircle.x) * EASING_FACTOR;
                    currentCircle.y += (prevCircle.y - currentCircle.y) * EASING_FACTOR;
                }

                return newCircles;
            });

            animationFrameId = requestAnimationFrame(animateCircles);
        };

        animateCircles();

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    const trailElements = (
        <>
            {circles.map((circle, index) => {
                const size = Math.max(0, 12 - index * 0.7);
                const opacity = Math.max(0, 0.8 - index * 0.05);
                
                return (
                    <div
                        key={index}
                        className="bg-red-500 rounded-full fixed pointer-events-none"
                        style={{
                            left: 0,
                            top: 0,
                            width: `${size}px`,
                            height: `${size}px`,
                            transform: `translate(${circle.x - size / 2}px, ${circle.y - size / 2}px)`,
                            opacity: opacity,
                            zIndex: 9999,
                        }}
                    />
                );
            })}
        </>
    );

    // Use a portal to render the trail outside the main app div,
    // so its `position: fixed` is not affected by the parent's `backdrop-filter`.
    const portalRoot = document.body;
    if (!portalRoot) {
        return null;
    }

    return createPortal(trailElements, portalRoot);
};
