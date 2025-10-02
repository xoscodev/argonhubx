import React from 'react';
import { ArgonLogo } from './icons/Argon';

export const Header: React.FC = () => {
  return (
    <header className="w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <ArgonLogo />
      </div>
    </header>
  );
};
