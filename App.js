import React from 'react';
import FilteredList from './FilteredList';
import Notes from './Notes';
import uuid from 'node-uuid';


//-- stateful component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state text',
      curNote: '',
      notes: [
        {
          id: uuid.v4(),
          text: 'learn webpack'
        },
        {
          id: uuid.v4(),
          text: 'learn react'
        },
        {
          id: uuid.v4(),
          text: 'do chores'
        }
      ]
    }
  }
  update(e) {
    this.setState({
      txt: e.target.value
    });
  }

  updateNote(e) {
    this.setState({
      curNote: e.target.value
    });
  }

  addNote() {
    this.setState({
      notes: this.state.notes.concat({
        id: uuid.v4(),
        text: this.state.curNote
      }),
      curNote: '',
    });
  }

  render() {
    var notes = this.state.notes;
    return (
      <div>
        <input type="text" 
          //update the state every time it changes
          onChange={this.update.bind(this)}/>
        <h1>{this.state.txt}</h1>
        <FilteredList />

        <input type="text"
          value={this.state.curNote}
          onChange={this.updateNote.bind(this)}/>
        <button onClick={this.addNote.bind(this)}>+</button>
        <Notes items={notes}></Notes>
      </div>
    )
  }
}

// that's all the tutorial provided for free...
// this commit is a spacer between the previous tutorial and the next one


export default App;