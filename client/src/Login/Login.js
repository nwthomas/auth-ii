import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };
  login = e => {
    e.preventDefault();
    const creds = this.state;
    axios
      .post("http://localhost:7000/api/login", creds)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/users");
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <form onSubmit={this.login}>
        <input
          name="username"
          placeholder="Username"
          onChange={this.handleChange}
          value={this.state.username}
          autoComplete="off"
          required
        />
        <input
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.password}
          autoComplete="off"
          required
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}
