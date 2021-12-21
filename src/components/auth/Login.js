/*eslint-disable*/
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import axios from 'axios';

class Login extends Component {
  state = {
    user: {
      email: '',
      password: '',
    },
  }

  connect = async () => {
    await axios.post('http://carhubackend.herokuapp.com/users/sign_in', this.state)
      .then((response) => response)
      .then((response) => {
        localStorage.setItem("token", response.headers["authorization"]);
        window.location.href ="/"
      })
      .catch((error) => {
        alert('the name or password are incorrects');
        return error;
      });
  }

  handleChange=async (e) => {
    await this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  }

  render() {
    return (

      <div className="container_login">
        <div className="second_container">
          <div className="form-group">
            <label>Email </label>
            <br />
            <input type="text" className="form-control" name="email" onChange={this.handleChange} />
            <br />
            <label>Password: </label>
            <br />
            <input type="password" className="form-control" name="password" onChange={this.handleChange} />
            <br />
            <button className="btn btn-primary" onClick={() => this.connect()}>Log in</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Login
