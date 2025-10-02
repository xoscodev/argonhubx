import React from 'react';
import { StarIcon } from './icons/StarIcon';

interface TestimonialCardProps {
    quote: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote }) => {
    return (
        <div className="border border-red-800/40 rounded-xl p-6 flex flex-col h-full bg-red-950/10 backdrop-blur-sm">
            <p className="text-gray-400 flex-grow text-sm leading-6">{quote}</p>
            <div className="mt-6 flex justify-end">
                <StarIcon />
            </div>
        </div>
    );
};