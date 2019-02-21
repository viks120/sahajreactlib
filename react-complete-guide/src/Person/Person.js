import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>My name is {props.name} age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" 
            onChange={props.changed}
            value={props.name}/>
        </div>
    );
    };

export default person;
