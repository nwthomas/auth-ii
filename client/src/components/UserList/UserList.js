import React, { Component } from "react";
import axios from "axios";

import requiresAuth from "../Auth/requiresAuth";

class UserList extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get("/users").then(res => {
      this.setState({
        users: res.data.users
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.state.users.map((user, index) => {
            return <li key={user.index}>{user.username}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default requiresAuth(UserList);
