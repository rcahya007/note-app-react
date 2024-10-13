import React from 'react';

function NoteHeader({ onSearchHandler }) {
  return (
    <div className="flex justify-between items-center p-4 border-b-2 border-b-">
      <a href="/" className="text-2xl font-bold text-white">
        Notes
      </a>
      <input
        type="text"
        placeholder="Cari catatan..."
        onChange={(e) => onSearchHandler(e.target.value)}
        className="p-2 border-2 border-white rounded w-1/3 text-white bg-transparent"
      />
    </div>
  );
}

export default NoteHeader;
