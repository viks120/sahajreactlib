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

  return (
    <div className="App">
      <h1>Hi, I am react app</h1>
      <button onClick={()=>switchNameHandler('Vikk!!')}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}/>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].name}
        click={switchNameHandler.bind(this,'vi!')}>Hobbies: Walking</Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;



