import React from 'react';
import Notes from './Notes';
import Note from './Note';
import uuid from 'node-uuid';

const notes = [
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

//-- stateful component
class App extends React.Component {
  constructor() {
    super();
  }

  updateNote(e) {

  }

  addNote() {

  }

  render() {
    return (
      <div>
        <Notes items={notes}></Notes>
      </div>
    )
  }

}

export default App;