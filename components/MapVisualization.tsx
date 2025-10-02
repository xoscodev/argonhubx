import React from 'react';
import { DottedWorldMap } from './icons/DottedWorldMap';

export const MapVisualization: React.FC = () => {
  const points = [
    { x: 150, y: 200 },
    { x: 250, y: 350 },
    { x: 400, y: 220 },
    { x: 580, y: 320 },
    { x: 750, y: 200 },
    { x: 900, y: 250 },
  ];

  const pathData = 
    `M ${points[0].x} ${points[0].y} ` +
    `Q ${points[0].x + 50} ${points[0].y - 100}, ${points[1].x} ${points[1].y} ` +
    `Q ${points[1].x + 75} ${points[1].y - 50}, ${points[2].x} ${points[2].y} ` +
    `Q ${points[2].x + 90} ${points[2].y + 150}, ${points[3].x} ${points[3].y} ` +
    `Q ${points[3].x + 85} ${points[3].y - 120}, ${points[4].x} ${points[4].y} ` +
    `Q ${points[4].x + 75} ${points[4].y + 100}, ${points[5].x} ${points[5].y}`;


  return (
    <div className="relative flex justify-center items-center">
      <svg
        viewBox="0 0 1024 512"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <DottedWorldMap />
        <g>
          <path
            d={pathData}
            fill="none"
            stroke="rgba(200, 200, 255, 0.6)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="rgba(200, 200, 255, 0.8)"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};