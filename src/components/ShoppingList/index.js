import React from 'react';
import ItemList from './ItemList';
import CreateNewItem from './CreateNewItem';
import DeleteItem from './DeleteItem';

import logo from '../../logo.svg';
import './shopping_list.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  addItem = (event, value) => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };


  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>

        <CreateNewItem addItem={this.addItem} />
        <DeleteItem deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound()} />
        <ItemList items={items} />

      </div>
    );
  }
}

export default App;
