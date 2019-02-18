import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons : [
      {name: "Viks", age: 34},
      {name: "Monu", age: 30},
      {name: "Mia", age: 1}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].name}>Hobbies: Walking</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].name}/>
      </div>
    );
  //  return React.createElement('div', {className: 'App'}, React.createElement('h1' , null, 'Hi, I\'m a App'));
  }
}

export default App;
