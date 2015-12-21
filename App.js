import React from 'react';

//-- stateful component
class App extends React.Component {
  render() {
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

//-- we can set the types of the properties
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

//-- we can set default values for the properties
App.defaultProps = {
  txt: 'default txt value',
  cat: 21
}

//-- stateless component
// const App = () => <h1>hello world</h1>

export default App;