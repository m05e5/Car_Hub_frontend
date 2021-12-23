/*eslint-disable*/
import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './create.css'
import axios from 'axios';
class SignupForm extends Component {
  state =
  { car: {
    name: "",
    description: "",
    price: 1,
    fee: 1,
    horse_power: 1,
    background_color: "",
    image: null
  }
  }
  componentDidMount() {
  }

  newcar = async () => {
    await axios.post('http://carhubackend.herokuapp.com/models/', this.state)
      .then((response) => response)
      .then((response) => {
        console.log(response.data.message)
        if(response.data.message == 'Car saved!'){
          return true
        } else {
          alert("All the data should be filed")
          return false
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  handleChange=async (e) => {
    await this.setState({
      car: {
        ...this.state.car,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.car)
  }

  render() {
    return (

      <div className="container_">
        <div className= "add-box">
        <div className = "login-title">
        <h1>Add a car</h1>
        <div className="login-content">
          <div className="double">
            <input type="text" className="input" placeholder='name' name="name" onChange={this.handleChange} />
            <div className= "labeled">
            <label for="color" className='label' >Color</label>
            <input type="color" placeholder='#ffffff' name="color" id="color" onChange={this.handleChange}/>
            </div>
            </div>
            <div className="double">
            <div className= "labeled">
            <label for="price" className='label' className='label'>Price</label>
            <input type="number"  className="input linput" placeholder='#ffffff' id="price" name="color" onChange={this.handleChange}/>
            </div>
            <div className= "labeled">
            <p className='label'>Fee</p>
            <input type="label"  className="input linput" placeholder='#ffffff' name="color" onChange={this.handleChange}/>
            </div>
            </div>
            <div className="double">
            <div className= "labeled">
            <p className='label'>Horse Power</p>
            <input type="label"  className="input linput" placeholder='#ffffff' name="color" onChange={this.handleChange}/>
            </div>
            </div>
            <button className="log-button add-b" onClick={() => this.register()}>Register</button>
            </div>
            </div>
            </div>
            </div>
    );
  }
}
export default SignupForm

