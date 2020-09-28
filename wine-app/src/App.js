import React, { useState } from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Entry from './components/Entry'
import Register from "./components/auth/Register"
import Login from "./components/Login"


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
          <Route exact path="/" exact component={Home}/>
          <Route exact path="/entry" component={Entry}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
      </div>
      </Router>
    );
  }

export default App;
