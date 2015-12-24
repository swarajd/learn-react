import AltContainer from 'alt-container';
import React from 'react';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

//-- stateful component
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      curTask: ''
    };
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.curTask} onChange={this.updateTask.bind(this)}/>
        <button onClick={this.addNote.bind(this)}> + </button>
        <AltContainer
          stores={[NoteStore]}
          inject={{
            items: () => NoteStore.getState().notes
          }}>
          <Notes onEdit={this.editNote.bind(this)} onDelete={this.deleteNote.bind(this)}></Notes>
        </AltContainer>
      </div>
    )
  }

  addNote() {
    NoteActions.create({task: this.state.curTask});
    this.setState({
      curTask: ''
    });
  }

  editNote(id, task) {
    NoteActions.update({id,task});
  }

  deleteNote(id) {
    NoteActions.delete(id);
  }

  updateTask(e) {
    this.setState({
      curTask: e.target.value
    });
  }

}

export default App;