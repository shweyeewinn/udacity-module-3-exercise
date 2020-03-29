import React, { Component } from 'react';
import './App.css';
import Excercise1 from './components/Excercise1';
/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

class App extends Component {


  render() {
    return (
      <div className="main-content">
        <Excercise1 />
      </div>
    );
  }
}

export default App;
