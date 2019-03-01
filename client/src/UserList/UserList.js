import React, { Component } from "react";
import axios from "axios";

export default class UserList extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      const reqOptions = { headers: { authorization: token } };
      axios
        .get("http://localhost:7000/api/restricted/users", reqOptions)
        .then(res => {
          this.setState({
            ...this.state,
            users: res.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  render() {
    return (
      <div>
        <h1>Users</h1>
        <div>
          {this.state.users.length ? (
            this.state.users.map((user, index) => {
              return <p key={index}>{user.username}</p>;
            })
          ) : (
            <p>Please Login</p>
          )}
        </div>
      </div>
    );
  }
}
