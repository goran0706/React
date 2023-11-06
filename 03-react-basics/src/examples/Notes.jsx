import React, { useEffect, useReducer, useState } from 'react';

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes;

    case 'ADD_NOTE':
      return state.concat(action.notes);

    case 'REMOVE_NOTE':
      return state.filter((note) => note.title !== action.title);

    default:
      return state;
  }
};

const UseReducer = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_NOTE', notes: [{ title, body }] });
    setTitle('');
    setBody('');
  };

  const removeNote = (title) => {
    dispatch({
      type: 'REMOVE_NOTE',
      title: title,
    });
  };

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'));

    if (notesData) {
      dispatch({ type: 'POPULATE_NOTES', notes: notesData });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <div key={note.title}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>Remove</button>
        </div>
      ))}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button type='submit'>Add Note</button>
      </form>
    </div>
  );
};

export { UseReducer as default };
