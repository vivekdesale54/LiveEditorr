import React from 'react';
import '../index.css'; // Ensure you have Tailwind CSS set up


export default function Preview() {
  return (
    <div className="flex-1 bg-white p-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold px-4 py-2 rounded-t">
        Welcome to CodeFlow
      </div>
      <div className="border rounded-b p-6">
        <h2 className="text-2xl font-bold mb-2">Start building something amazing!</h2>
        <p className="text-gray-500 mb-4 text-sm">
          Your live preview will appear here as you code.
        </p>
        <div className="flex gap-4">
          <div className="border rounded p-4 w-1/2 text-center">
            <div className="text-lg font-semibold">Component 1</div>
            <div className="text-gray-500 text-sm">Interactive preview</div>
          </div>
          <div className="border rounded p-4 w-1/2 text-center">
            <div className="text-lg font-semibold">Component 2</div>
            <div className="text-gray-500 text-sm">Live updates</div>
          </div>
        </div>
        <div className="text-green-500 text-sm mt-4">⚡ Live preview active</div>
      </div>
      <div className="text-xs text-gray-400 mt-4">
        localhost:3000 • React 18.2.0 • Last updated: just now
      </div>
    </div>
  );
}

