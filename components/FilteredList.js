import React from 'react'
import List from './List';

class FilteredList extends React.Component {

  constructor() {
    super();
    this.state = {
      initialItems: [
        "Apples",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns"
      ],
      items: []
    }
  }

  componentWillMount() {
    this.setState({
      items: this.state.initialItems
    })
  }
  
  filterList(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item) {
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !==  -1;
    });
    this.setState({
      items: updatedList
    })
  }

  render() {
    //nesting components is useful
    return (
      <div>
        <input type="text" placeholder="Search" onChange={this.filterList.bind(this)}/>
        <List items={this.state.items}></List>
      </div>
    );
  }

};

module.exports = FilteredList;