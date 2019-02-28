import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    department: ""
  };
  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };
  signup = e => {
    e.preventDefault();
    const creds = this.state;
    axios
      .post("http://localhost:7000/api/register", creds)
      .then(res => {
        this.props.history.push("/login");
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <form onSubmit={this.signup}>
        <input
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          value={this.state.name}
          autoComplete="off"
          required
        />
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
        <input
          name="department"
          placeholder="Department"
          onChange={this.handleChange}
          value={this.state.department}
          autoComplete="off"
          required
        />
        <button type="submit">Signup</button>
      </form>
    );
  }
}
