import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface AccordionItemProps {
    question: string;
    answer: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-red-800/40 rounded-xl bg-red-950/10 backdrop-blur-sm">
            <button
                className="w-full flex justify-between items-center text-left p-6"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-poppins font-medium text-white">{question}</span>
                <ChevronDownIcon className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="p-6 pt-0 text-gray-400">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};