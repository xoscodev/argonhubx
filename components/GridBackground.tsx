import React from 'react';

const GridLine: React.FC<{ orientation: 'vertical' | 'horizontal'; position: string }> = ({ orientation, position }) => {
  const baseClasses = "absolute border-dotted border-red-900/30 pointer-events-none";
  if (orientation === 'vertical') {
    return <div className={`${baseClasses} top-0 bottom-0 border-l ${position}`}></div>;
  }
  return <div className={`${baseClasses} left-0 right-0 border-t ${position}`}></div>;
};

const GridCircle: React.FC<{ position: string }> = ({ position }) => (
  <div className={`absolute w-64 h-64 border border-dotted border-red-900/30 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 ${position}`}></div>
);

export const GridBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Red Glows */}
            <div className="absolute top-0 left-0 w-full h-full bg-red-500/15 rounded-full filter blur-[200px] opacity-40 pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-red-500/15 rounded-full filter blur-[200px] opacity-40 pointer-events-none translate-x-1/3 translate-y-1/3"></div>

            {/* Grid */}
            <GridLine orientation="vertical" position="left-[35%]" />
            <GridLine orientation="horizontal" position="top-[30%]" />
            <GridCircle position="top-[30%] left-[35%]" />

            <GridLine orientation="vertical" position="left-[70%]" />
            <GridLine orientation="horizontal" position="top-[80%]" />
            <GridCircle position="top-[80%] left-[70%]" />
        </div>
    );
};