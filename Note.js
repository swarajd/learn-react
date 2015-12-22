import React from 'react';

export class Note extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  render() {
    if (this.state.editing) {
      return this.renderEdit();
    } else {
      return this.renderNote();
    }
  }

  renderEdit() {
    return <input type="text"
      autoFocus={true}
      defaultValue={this.props.task}
      onBlur={this.finishEdit.bind(this)}
      onKeyPress={this.checkEnter} />;
  }

  checkEnter(e) {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit(e) {
    console.log(this.props);
    this.props.onEdit(e.target.value);

    this.setState({
      editing: false
    })
  }

  renderNote() {
    return (
      <div onClick={this.edit.bind(this)}>{this.props.task}</div>
    );
  }

  edit() {
    this.setState({
      editing: true
    })
  }
}

export default Note;