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
      ],
      curTask: ''
    }
  }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <input type="text" value={this.state.curTask} onChange={this.updateTask.bind(this)}/>
        <button onClick={this.addNote.bind(this)}> + </button>
        <Notes items={notes}></Notes>
      </div>
    )
  }

  addNote() {
    this.setState({
      notes: this.state.notes.concat({
        id: uuid.v4(),
        task: this.state.curTask
      }),
      curTask: ''
    })
  }

  updateTask(e) {
    this.setState({
      curTask: e.target.value
    });
  }

}

export default App;