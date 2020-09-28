import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
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
    const { email, password } = this.state;

    axios
      .post(
        "http://localhost:3001/api/v1/auth/login",
        {
            email: email,
            password: password
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log(response)
        // localStorage.setItem("id", response.data._id)
        // localStorage.setItem("name", response.data.name)
        this.props.history.push("/entry")

      })
      .catch(error => {
        console.log("login error", error);
      });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Welcome back</h1>
          <div>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;