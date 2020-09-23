import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        // the notes show super but it looks like its no longer valid. What should I use instead?
        super(props);
        // setting empty state initially 
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
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
        // preventing default form actions
        event.preventDefault();
        const { name, email, password, password_confirmation } = this.setState;
        console.log("submit form")

        axios
            .post(
                "http://localhost:3001/api/v1/auth/register",
                {
                    name: name,
                    email: email,
                    password: password
                },
                { withCredentials: true }
            )
            .then(response => {
                console.log('created sucsessfully')

                this.props.history.push("/login")
            }
            )
            .catch(error => {
                console.log('sorry, registration error', error);
            });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Fill Out Form:</p>
                    <p>Name</p>
                    <input
                        type="name"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required />

                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required />

                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required />

                    <p>Confirm Password</p>
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Password Confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        required />

                    <button type="submit">Register!</button>

                </form>
            </div>
        );
    }

}







export default Register