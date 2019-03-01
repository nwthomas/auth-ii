import React, { Component } from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";
import Login from "./Login/Login";
import UserList from "./UserList/UserList";
import Signup from "./Signup/Signup";

class App extends Component {
  logout = e => {
    e.preventDefault();
    localStorage.clear();
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className="App">
        <menu>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <button type="button" onClick={this.logout}>
            Logout
          </button>
        </menu>
        <section>
          <Route path="/login" component={Login} />
          <Route path="/users" component={UserList} />
          <Route path="/signup" component={Signup} />
        </section>
      </div>
    );
  }
}

export default App;
