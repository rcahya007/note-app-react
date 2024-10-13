import React from 'react';
import NoteCard from './NoteCard';

function NoteSection({
  titleSection,
  notes,
  onArchiveHandler,
  onActiveHandler,
  onDeleteHandler,
}) {
  return (
    <div className="flex flex-col mx-auto max-w-2xl w-full py-7 text-white gap-y-4">
      <h4>{titleSection}</h4>
      <div className="w-full h-full flex flex-wrap justify-between gap-y-8">
        {notes.length === 0 ? (
          <p className="text-center w-full text-sm">Tidak ada catatan</p>
        ) : (
          notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onArchiveHandler={onArchiveHandler}
              onActiveHandler={onActiveHandler}
              onDeleteHandler={onDeleteHandler}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NoteSection;
