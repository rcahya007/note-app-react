import React from 'react';
import { getInitialData } from '../utils/data';
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';
import NoteSection from './NoteSection';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      filteredNotes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prev) => {
      const newNotes = [
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
        ...prev.notes,
      ];
      return {
        notes: newNotes,
        filteredNotes: newNotes,
      };
    });
  }

  onArchiveHandler(id) {
    this.setState((prev) => {
      const updatedNotes = prev.notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            archived: true,
          };
        }
        return note;
      });

      return {
        notes: updatedNotes,
        filteredNotes: updatedNotes,
      };
    });
  }

  onActiveHandler(id) {
    this.setState((prev) => {
      const updatedNotes = prev.notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            archived: false,
          };
        }
        return note;
      });

      return {
        notes: updatedNotes,
        filteredNotes: updatedNotes,
      };
    });
  }

  onDeleteHandler(id) {
    this.setState((prev) => {
      const updatedNotes = prev.notes.filter((note) => note.id !== id);
      return {
        notes: updatedNotes,
        filteredNotes: updatedNotes,
      };
    });
  }

  onSearchHandler(keyword) {
    if (keyword === '') {
      this.setState((prev) => {
        return {
          filteredNotes: prev.notes,
        };
      });
    } else {
      this.setState((prev) => {
        return {
          filteredNotes: prev.notes.filter((note) =>
            note.title.toLowerCase().includes(keyword.toLowerCase())
          ),
        };
      });
    }
  }

  render() {
    console.log(this.state.filteredNotes);
    return (
      <div className="bg-gray-950 h-full w-full min-h-screen min-w-screen">
        <NoteHeader onSearchHandler={this.onSearchHandler} />
        <NoteInput addNote={this.onAddNoteHandler} />
        <NoteSection
          titleSection="Catatan Aktif"
          notes={this.state.filteredNotes.filter(
            (note) => note.archived === false
          )}
          onArchiveHandler={this.onArchiveHandler}
          onActiveHandler={this.onActiveHandler}
          onDeleteHandler={this.onDeleteHandler}
        />
        <NoteSection
          titleSection="Catatan Arsip"
          notes={this.state.filteredNotes.filter(
            (note) => note.archived === true
          )}
          onArchiveHandler={this.onArchiveHandler}
          onActiveHandler={this.onActiveHandler}
          onDeleteHandler={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
