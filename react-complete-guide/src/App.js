import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState] = useState({
    persons : [
      {name: "Viks", age: 34},
      {name: "Monu", age: 30},
      {name: "Mia", age: 1}
    ]
  });

  const [otherState, setOtherState] = useState('Other Value');

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        {name: newName, age: 34},
        {name: "Monu", age: 30},
        {name: "Mia", age: 0.5}
      ]
    })
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        {name: 'Viks', age: 34},
        {name: event.target.value, age: 30},
        {name: "Mia", age:1}
      ]
    })
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, I am react app</h1>
      <button style={style} onClick={()=>switchNameHandler('Vikk!!')}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}/>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this,'vi!')}
        changed={nameChangedHandler}>Hobbies: Walking</Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;



