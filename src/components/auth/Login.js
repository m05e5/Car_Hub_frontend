/*eslint-disable*/
import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import axios from 'axios';
import './login.css'
class Login extends Component {
  state = {
    user: {
      email: '',
      password: '',
    },
  }

  componentDidMount() {

    const mobile_nav = document.querySelector('.mobile_nav');

    mobile_nav.classList.add('invisible');
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
        <div className= "login-box">
        <div className = "login-title">
        <h1>Login</h1>
        <div className="login-content">
        <div className="input-field">
            <input type="email" className="form-control" placeholder='email' name="email" onChange={this.handleChange} />
        </div>
        <div className="input-field">
            <input type="password" className="form-control" placeholder='password' name="password" onChange={this.handleChange} />
          </div>
            <div class="action">
            <Link className="to-register-button log-b" to="/Signup">Go to Register</Link>
            <button className="log-button log-b" onClick={() => this.connect()}>Sign in</button>
            </div>
            </div>
            </div>
            </div>
            </div>
    );
  }
}
export default Login
