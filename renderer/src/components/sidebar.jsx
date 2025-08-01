import React, { useState } from 'react';
import '../index.css'; // Tailwind CSS assumed setup
import SearchInput from './search';

export default function Sidebar() {
  // State to control visibility of folders/files
  const [showSrcFolders, setShowSrcFolders] = useState(false); // Show/hide components, styles, public under src
  const [showComponentFiles, setShowComponentFiles] = useState(false); // Show/hide files inside components
  const [showPublicFiles, setShowPublicFiles] = useState(false); // Show/hide files inside public
  const [showStylesFiles, setShowStylesFiles] = useState(false); // Show/hide files inside styles
  // Toggle src folder visibility and reset inner toggles when hiding
  function toggleSrcFolders() {
    setShowSrcFolders((prev) => {
      if (prev) {
        setShowComponentFiles(false);
        setShowPublicFiles(false);
      }
      return !prev;
    });
  }

  // Toggle files inside styles folder only if src is open
  function toggleStylesFiles() {
    if (showSrcFolders) {
      setShowStylesFiles((prev) => !prev);
    }
  }

  // Toggle files inside components folder only if src is open
  function toggleComponentFiles() {
    if (showSrcFolders) {
      setShowComponentFiles((prev) => !prev);
    }
  }

  // Toggle files inside public folder only if src is open
  function togglePublicFiles() {
    if (showSrcFolders) {
      setShowPublicFiles((prev) => !prev);
    }
  }

  return (
    <div className="w-[260px] bg-white border-r p-4 flex flex-col gap-2">
      <h2 className="text-sm font-semibold text-gray-700 mb-4 ml-4">
        My Awesome App
      </h2>

      <div className="text-sm text-gray-500 ml-5">Files</div>
      <SearchInput />

      <div className="mt-2 text-sm ml-5">
        {/* src folder toggle */}
        <div
          className="text-gray-700 cursor-pointer"
          onClick={toggleSrcFolders}
        >
          📁 src
        </div>

        {/* Show folders inside src */}
        {showSrcFolders && (
          <div className="ml-4">
            {/* components folder toggle */}
            <div className="cursor-pointer" onClick={toggleComponentFiles}>
              📁 components
            </div>

            {/* Files inside components */}
            {showComponentFiles && (
              <div className="ml-4">
                <div>App.tsx</div>
                <div>Button.tsx</div>
              </div>
            )}

            {/* styles folder and file */}
            <div className="mt-2 cursor-pointer">
              <div onClick={toggleStylesFiles}>📁 styles</div>
              {showStylesFiles && <div className="ml-4">App.css</div>}
            </div>

            {/* public folder toggle */}
            <div className="mt-2 cursor-pointer" onClick={togglePublicFiles}>
              📁 public
            </div>

            {/* Files inside public */}
            {showPublicFiles && (
              <div className="ml-4">
                <div>index.html</div>
                <div>package.json</div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* + New File button */}
      <button className="mt-auto text-sm bg-blue-100 text-blue-600 py-1 px-2 rounded">
        + New File
      </button>
    </div>
  );
}
