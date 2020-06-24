import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const App = () => {
  const [ currentState , newState] = useState(
    {
      persons: [
        {name :"Shantanu", age:25},
        {name :"Sanket",age:27},
        {name:"Shashank",age:24}
      ]
    }
  );

  const switchNameHandler = (newName, newAge) =>{
    newState(
      {
        persons: [
          {name :"Shantanu", age:25},
          {name :"Shraddha",age:24},
          {name:newName,age:newAge}
        ], showPersons : true
      }
    );
  };
const nameChangedHandler = (event) =>{
  newState(
      {
        persons: [
          {name :"Shantanu", age:25},
          {name :"Shraddha",age:24},
          {name:event.target.value,age:25}
        ],showPersons:true
      }
    );
}
const toggleChangeHandler = () =>{
  const doesShowState = currentState.showPersons;
  newState({showPersons : !doesShowState});

}
const style={
backgroundColor : 'white',
font : 'inherit',
border : '1px solid blue',
padding : '8px',
cursor: 'pointer'
};
      return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <button 
        style={style}
        onClick={() => switchNameHandler("Shashank")}>Switch Name</button>
        <button 
        style={style}
        onClick={toggleChangeHandler}>Hide Name</button>
        { currentState.showPersons === true ?
        <div>
        <Person 
        name={currentState.persons[0].name} 
        age={currentState.persons[0].age}/>

        <Person 
        name={currentState.persons[1].name} 
        age={currentState.persons[1].age}
        click={() => switchNameHandler("Ravi")} >Hobbies: Swimming</Person>
        
        <Person 
        name={currentState.persons[2].name} 
        age={currentState.persons[2].age}
        changed={nameChangedHandler}/>
        </div> : null
}
      </div>
    );
}

export default App;