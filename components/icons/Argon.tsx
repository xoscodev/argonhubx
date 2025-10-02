import React from 'react';

export const ArgonLogo: React.FC = () => (
  <div className="flex items-center gap-3 cursor-pointer">
    <svg
      width="22"
      height="22"
      viewBox="0 0 76 65"
      fill="#EF4444"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
    </svg>
    <span className="text-gray-800 text-2xl">/</span>
    <span className="font-poppins font-bold text-lg tracking-tight">ArgonHub</span>
  </div>
);
