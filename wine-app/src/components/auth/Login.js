import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { email,password } = this.state;

        axios
         .post(
             'http://localhost:3001/api/v1/auth/login',
             {
                 email: email,
                 password: password
             },
             { withCredentials: true }
         )
         .then(response => {
             console.log(response)
        // redirect to home page after login
             this.props.history.push('/home')
         })
         .catch(error => {
        // if unable to log user in, send error message to console.log
             console.log('Login Error', error);
         });
    }
    render() {
        return (
        <div>
        {/* rendering form on login page to accept email and password */}
            <form onSubmit={this.handleSubmit}>
            <h1>Welcome!</h1>
            <div>
                <p>Email Address</p>
                <input
                type='email'
                name='email'
                placeHolder='Email Address'
                value={this.state.email}
                onChange={this.handleChange}
                required/>
            </div>
                <p>Password</p>
                <input 
                type='password'
                name='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
                required
                />
                <button type='submit'>Login Here</button>
            </form>

        </div>
        )}
}


export default Login 