var React = require('react');

var List = React.createClass({

  render() {
    return (
      <ul>
      {
        this.props.items.map(function(item) {
          return <li key={item}>{item}</li>
        }) 
      }
      </ul>
    );
  }

});

module.exports = List;