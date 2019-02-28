import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import Login from "./components/Login/Login";
import UserList from "./components/UserList/UserList";

class App extends Component {
  logout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className="App">
        <header>
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/users">Users</NavLink>
          &nbsp;|&nbsp;
          <button onClick={this.logout}>Sign Out</button>
          &nbsp;|&nbsp;
          <button onClick={this.logout}>Sign Out</button>
        </header>
        <main>
          <Route path="/login" component={Login} />
          <Route path="/users" component={UserList} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
