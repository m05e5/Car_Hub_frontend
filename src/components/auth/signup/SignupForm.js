/*eslint-disable*/
import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../login.css'
import axios from 'axios';
class SignupForm extends Component {
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

  register = async () => {
    await axios.post('http://carhubackend.herokuapp.com/users/', this.state)
      .then((response) => response)
      .then((response) => {
        console.log(response.data.message)
        if(response.data.message == 'Signed up sucessfully.'){
          window.location.href ="/login"
        } else {
          alert("all the data should be filed")
        }
      })
      .catch((error) => {
        alert("the email is already registered");
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
        <h1>Register</h1>
        <div className="login-content">
        <div className="input-field">
            <input type="email" className="form-control" placeholder='email' name="email" onChange={this.handleChange} />
        </div>
        <div className="input-field">
            <input type="password" className="form-control" placeholder='password' name="password" onChange={this.handleChange} />
          </div>
            <div className="action">
            <Link className="to-register-button log-b" to="/login">Go to Login</Link>
            <button className="log-button log-b" onClick={() => this.register()}>Register</button>
            </div>
            </div>
            </div>
            </div>
            </div>
    );
  }
}
export default SignupForm
