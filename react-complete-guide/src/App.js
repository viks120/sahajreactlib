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

  const [showPersons, setShowPersons] = useState(false);

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        {name: 'Viks', age: 34},
        {name: event.target.value, age: 30},
        {name: "Mia", age:1}
      ]
    })
  };

  const deletePersonHandler = (personIndex)=>{
    //const persons= personsState.persons.slice();
    const persons = [...personsState.persons];
    persons.splice(personIndex,1);
    setPersonsState(
      {persons : persons}
    )
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;

  if (showPersons){
    persons = (
      <div>
        {personsState.persons.map((person,index) => {
          return(
            <Person 
            click={() => deletePersonHandler(index)}
            name={person.name} 
            age={person.age}/>
          )
        })}
      </div>
    )
  }

  const togglePersonHandler = () =>{
    const doesShow = showPersons;
    setShowPersons(
        !doesShow
      );
  }

  return (
    <div className="App">
      <h1>Hi, I am react app</h1>
      <button style={style} onClick={()=>togglePersonHandler('Vikk!!')}>Toggle Person</button>
       {persons}
    </div>
  );
}

export default app;



