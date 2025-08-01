import React from 'react';
import '../index.css'; // Ensure you have Tailwind CSS set up

export default function Center() {
  return (
    <div className="w-[580px] flex flex-col items-center justify-center bg-gray-50 border-r">
      <div className="flex flex-col items-center p-4 text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center text-4xl text-indigo-500">
          &lt;/&gt;
        </div>
        <h1 className="text-3xl font-semibold mt-4">Welcome to CodeFlow</h1>
        <p className="text-gray-500 mt-1 text-sm">
          Select a file from the explorer to start coding
        </p>
      </div>
      <div className="flex gap-2 mt-6">
        <button className="px-4 py-2 bg-white border rounded text-sm">
          Import Project
        </button>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded text-sm">
          Create New File
        </button>
      </div>
    </div>
  );
}
