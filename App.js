import React from 'react';

//-- stateful component
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <b>Bold</b>
      </div>
    )
  }
}

//-- stateless component
// const App = () => <h1>hello world</h1>

export default App;