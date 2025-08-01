import React from 'react';
import '../index.css'; // Ensure you have Tailwind CSS set up

export default function Sidebar() {
  return (
    <div className="w-[260px] bg-white border-r p-4 flex flex-col gap-2">
      <h1 className="text-xl font-bold text-[#5D5FEF] mb-2">CodeFlow</h1>
      <h2 className="text-sm font-semibold text-gray-700 mb-4">My Awesome App</h2>

      <div className="text-sm text-gray-500">Files</div>
      <div className="mt-2 text-sm">
        <div className="text-gray-700">📁 src</div>
        <div className="ml-4">
          <div>📁 components</div>
          <div className="ml-4">App.tsx</div>
          <div className="ml-4">Button.tsx</div>
          <div className="mt-2">📁 styles</div>
          <div className="ml-4">App.css</div>
        </div>
        <div className="mt-2">📁 public</div>
        <div className="ml-4">index.html</div>
        <div className="ml-4">package.json</div>
      </div>

      <button className="mt-auto text-sm bg-blue-100 text-blue-600 py-1 px-2 rounded">
        + New File
      </button>
    </div>
  );
}

