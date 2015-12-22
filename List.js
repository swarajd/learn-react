var React = require('react');

var List = React.createClass({

  render() {
    var displayItem = (item) => <li key={item}>{item}</li>
    return (
      <ul>
      {
        this.props.items.map(displayItem) 
      }
      </ul>
    );
  }

});

module.exports = List;