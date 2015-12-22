import React from 'react';

export class Notes extends React.Component {
  render() {
    var notes = this.props.items;
    return (
      <ul>
      {
        notes.map(this.renderNote)
      }
      </ul>
    );
  }

  renderNote(note) {
    return <li key={note}>{note}</li>
  }
}

export default Notes;