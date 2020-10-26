import React from 'react';
import logo from './logo.svg';
import './App.css';


// adding a comment
const person = {
  name: "Anna",
  yearBorn: 1992,
  likeSports: false,
  pets:['dog', 'cat', 'elephant'] 
}

function readPersonMind(person){
  const date = new Date();
  const msg = `Welcome ${person.name}!
          I can tell by my mysterious powers that your name is spelt with ${person.name.length} letters,
          you are ${date.getFullYear() - person.yearBorn} years old,
          you ${person.likeSports ? " ": "don't "}like sports, and have ${person.pets.length} pets.`
  return msg;
}

function App() {
  return (
    <>
      <h1>My first app</h1>
      <h2>she-codes-test-branch</h2>
      <h2>adding changes to my code.....</h2>
      <p className="multiline">{readPersonMind(person)}</p>
    </>
  );
}

export default App;
