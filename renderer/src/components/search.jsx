import React from "react";
import "../index.css"


export default function SearchInput() {
  return (
    <div className="relative w-[80%] max-w-sm ml-4 bg-white">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        {/* Search Icon (Inline SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search files..."
        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-sm"
      />
    </div>
  );
}
