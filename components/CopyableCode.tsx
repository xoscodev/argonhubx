import React, { useState } from 'react';
import { CopyIcon } from './icons/CopyIcon';
import { CheckIcon } from './icons/CheckIcon';

interface CopyableCodeProps {
  textToCopy: string;
}

export const CopyableCode: React.FC<CopyableCodeProps> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (copied) return;
    navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-red-500/10 border border-red-500/50 rounded-lg px-4 py-3 inline-flex items-center gap-4 transition-colors hover:border-red-500/80 hover:bg-red-500/20 w-full sm:w-auto justify-between"
      aria-label="Copy to clipboard"
    >
      <div className="flex items-center gap-3">
        <span className="text-red-500">$</span>
        <code className="text-gray-400 text-sm font-mono break-all text-left">
          {textToCopy}
        </code>
      </div>
      <div className="text-gray-500 w-4 h-4" aria-live="polite">
        {copied ? <CheckIcon className="text-green-500" /> : <CopyIcon />}
      </div>
    </button>
  );
};