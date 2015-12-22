import React from 'react';
import Note from './Note';

export class Notes extends React.Component {

  render() {
    const notes = this.props.items;
    return (
      <ul>
        {
          notes.map(this.renderNote, this)
        }
      </ul>
    );
  }

  renderNote(note) {
    return (
      <li key={note.id}>
        <Note 
          task={note.task}
          onEdit={this.props.onEdit.bind(null, note.id)} />
      </li>
    )
  }
}

export default Notes;

