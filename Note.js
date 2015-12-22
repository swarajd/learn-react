import React from 'react';

export class Note extends React.Component {
  render() {
    return (
      <div>{this.props.task}</div>
    );
  }
}

export default Note;