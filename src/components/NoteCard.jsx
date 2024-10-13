import React from 'react';
import { showFormattedDate } from '../utils/data';

function NoteCardContent({ title, date, body }) {
  return (
    <div className="flex flex-col gap-y-1 text-white p-2">
      <p className="font-bold">{title}</p>
      <p className="text-xs text-white/50">{date}</p>
      <p className="text-xs text-justify">{body}</p>
    </div>
  );
}

function NoteCardFooter({
  id,
  condition,
  onActiveHandler,
  onArchiveHandler,
  onDeleteHandler,
}) {
  return (
    <div className="flex">
      <button
        className="p-2 border-t-2 border-white w-full text-red-600 bg-transparent font-bold"
        onClick={() => onDeleteHandler(id)}
      >
        Delete
      </button>
      <div className="w-1 bg-white"></div>
      <button
        className="p-2 border-t-2 border-white w-full text-yellow-500 bg-transparent font-bold"
        onClick={() => {
          if (condition) {
            onActiveHandler(id);
          } else {
            onArchiveHandler(id);
          }
        }}
      >
        {condition ? 'Pulihkan' : 'Arsipkan'}
      </button>
    </div>
  );
}

function NoteCard({
  note,
  onArchiveHandler,
  onActiveHandler,
  onDeleteHandler,
}) {
  return (
    <div className="border-2 border-white rounded w-full max-w-72 h-full">
      <NoteCardContent
        title={note.title}
        date={showFormattedDate(note.createdAt)}
        body={note.body}
      />
      <NoteCardFooter
        id={note.id}
        condition={note.archived}
        onArchiveHandler={onArchiveHandler}
        onActiveHandler={onActiveHandler}
        onDeleteHandler={onDeleteHandler}
      />
    </div>
  );
}

export default NoteCard;
