import React from 'react';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

//-- stateful component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = NoteStore.getState();
  }

  componentDidMount() {
    NoteStore.listen((state) => this.setState(state));
  }

  componentWillUnmount() {
    NoteStore.unlisten((state) => this.setState(state));
  }

  //-- this doesn't work for some reason
  //-- we have to use the definition itself in the above functions
  // storeChanged(state) {
  //   this.setState(state);
  // }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <input type="text" value={this.state.curTask} onChange={this.updateTask.bind(this)}/>
        <button onClick={this.addNote.bind(this)}> + </button>
        <Notes items={notes} onEdit={this.editNote.bind(this)} onDelete={this.deleteNote.bind(this)}></Notes>
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