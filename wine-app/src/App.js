import React, { useState } from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Entry from './components/Entry'


const myWines = [
  {name: 'St. Michelle'},{name: 'Liage'},{name: 'CardinalZin'}
]

function App() {
  const [wines,setWines] = useState(myWines)
  const [name,setName] = useState("")

  function addWine() {
    axios.post("/wines", {name:name}).then((response) => {
      setWines(response.data)
    })
  }
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Route exact path="/" render={ () => <Home wines={wines} />}/>
      <Route exact path="/entry" render={ () => <Entry name={name} changeName={setName} addEntry={addWine}/>}/>
    </div>
    </Router>
  );
}

export default App;
