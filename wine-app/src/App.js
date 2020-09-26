import React, { useState } from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Entry from './components/Entry'
import Register from "./components/auth/Register"


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
      <Switch>
      <Route exact path="/" render={ () => <Home wines={wines} />}/>
      <Route exact path="/entry" render={ () => <Entry name={name} changeName={setName} addEntry={addWine}/>}/>
      <Route exact path="/register" render={ () => <Register/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
