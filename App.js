import React from 'react';

//-- stateful component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state text'
    }
  }
  update(e) {
    this.setState({
      txt: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" 
          //update the state every time it changes
          onChange={this.update.bind(this)}/>
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}


export default App;