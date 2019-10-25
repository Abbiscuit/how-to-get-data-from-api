import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
  state = {
    user: []
  };

  componentDidMount() {
    const API_URL = 'http://jsonplaceholder.typicode.com';
    const id = this.props.match.params.id;

    axios
      .get(`${API_URL}/users/${id}`)
      .then(response => response.data)
      .then(data => {
        this.setState({ user: data });
      });
  }

  render() {
    const { id } = this.state.user;
    return (
      <div>
        <p>{`ID #: ${!id ? '' : id}`}</p>
        <h1>{this.state.user.name}</h1>
      </div>
    );
  }
}

export default User;
