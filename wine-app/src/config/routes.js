import React from 'react'
import Nav from '../components/Nav';
import Home from '../components/Home';
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import { Route, Switch } from 'react-router-dom'
// import Form from '../components/Form'

function Routes(props) {
    return (
    <div className="App">
        <Switch>
            <Route exact path='/' component ={Home} />
            {/* <Route path='/form' component={Form} /> */}
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
        </Switch>
    </div>

    );
}

export default Routes 