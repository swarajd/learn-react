import React from 'react';
import FilteredList from './FilteredList';

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
        <FilteredList />
      </div>
    )
  }
}

// that's all the tutorial provided for free...
// this commit is a spacer between the previous tutorial and the next one


export default App;