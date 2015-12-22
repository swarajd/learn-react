import React from 'react';
import Note from './Note';

export class Notes extends React.Component {

  render() {
    const notes = this.props.items;
    return (
      <ul>
        {
          notes.map(this.renderNote)
        }
      </ul>
    );
  }

  renderNote(note) {
    return (
      <li key={note.id}>
        <Note task={note.task} />
      </li>
    )
  }
}

export default Notes;

