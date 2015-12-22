import React from 'react';
import Notes from './Notes';
import Note from './Note';
import uuid from 'node-uuid';

//-- stateful component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'learn webpack'
        },
        {
          id: uuid.v4(),
          task: 'learn react'
        },
        {
          id: uuid.v4(),
          task: 'do chores'
        }
      ]
    }
  }

  updateNote(e) {

  }

  addNote() {

  }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <Notes items={notes}></Notes>
      </div>
    )
  }

}

export default App;