import React from 'react';
import '../index.css'; // Ensure you have Tailwind CSS set up

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b bg-white">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-br from-purple-500 to-blue-400 rounded-md w-8 h-8 text-white flex items-center justify-center font-bold">CF</div>
        <span className="font-semibold text-lg">CodeFlow</span>
        <span className="ml-20 text-black-500 font-bold">My Awesome App</span>
        <span className="ml-40 px-2 py-0.5 bg-green-100 text-green-600 text-sm rounded">Live</span>
      </div>
      <div className="flex items-center gap-3">
        <button className="text-sm text-gray-600">Invite</button>
        <button className="text-sm text-gray-600">Share</button>
        <button className="bg-gradient-to-br from-purple-500 to-blue-400 text-white px-4 py-1.5 rounded font-medium text-sm">Deploy</button>
      </div>
    </div>
  );
};

export default Navbar;
