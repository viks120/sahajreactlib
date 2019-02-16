import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <Person name="max" age="34"/>
        <Person name="monu" age="30">Hobbies: Walking</Person>
        <Person name="mia" age="1"/>
      </div>
    );
  //  return React.createElement('div', {className: 'App'}, React.createElement('h1' , null, 'Hi, I\'m a App'));
  }
}

export default App;
