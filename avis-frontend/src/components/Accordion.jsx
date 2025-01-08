import React, { useState } from 'react';

export const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-start pt-1">
      <div className="container mx-auto grid grid-cols-1 px-4 justify-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-6 py-4 bg-blue-500 text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:bg-blue-600 transition-all duration-300 flex justify-between items-center rounded-xl ${
            isOpen ? 'rounded-b-none' : ''
          }`}
        >
          {title}
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
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
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ transitionProperty: 'max-height, opacity' }}
        >
          <div className="p-6 border border-gray-200 bg-white rounded-b-3xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
