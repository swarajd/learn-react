import uuid from 'node-uuid';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';

class NoteStore {
  constructor() {
    this.bindActions(NoteActions);

    this.notes = [];
  }
  create(note) {
    var notes = this.notes;

    note.id = uuid.v4();

    this.setState({
      notes: notes.concat(note)
    })
  }
  update({id, task}) {
    var notes = this.notes;

    notes.map(function(note) {
      if (note.id === id) {
        note.task = task;
      }

      return note;
    });

    this.setState({notes});
  }
  delete(id) {
    this.setState({
      notes: this.notes.filter((note) => note.id !== id)
    });
  }
}

export default alt.createStore(NoteStore, 'NoteStore');