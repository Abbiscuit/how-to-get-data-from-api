import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    const API_URL = 'http://jsonplaceholder.typicode.com';

    const url = `${API_URL}/users/`;
    axios
      .get(url)
      .then(res => res.data)
      .then(data => {
        this.setState({ users: data });
      });
  }

  render() {
    return (
      <div>
        {this.state.users.map(userData => {
          return (
            <p key={userData.id}>
              <Link to={`/users/${userData.id}`}>{userData.name}</Link>
            </p>
          );
        })}
      </div>
    );
  }
}

export default App;
