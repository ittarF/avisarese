import React, { useState } from 'react';

export const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-1 ml-8 mr-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-center px-6 py-4 bg-blue-500 text-white text-lg hover:bg-blue-600 transition-colors duration-200 flex justify-between items-center rounded-xl"
      >
        {title}
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-6 border border-gray-200 bg-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};


export default AccordionItem;