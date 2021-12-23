/*eslint-disable*/
import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './create.css'
import axios from 'axios';
import { goBack } from '../../Session';


class SignupForm extends Component {
  state =
    {
      car: {
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
    goBack()
    this.navToggle()

  }

  navToggle = () => {
    const homeLink = document.querySelector('#home_link');
    const createLink = document.querySelector('#create_link');
    const reserveLink = document.querySelector('#reserve_link');
    const logoutLink = document.querySelector('#logout_link');
    const deleteLink = document.querySelector('#delete_link');

    deleteLink.classList.remove('selected_nav');
    logoutLink.classList.remove('selected_nav');
    createLink.classList.add('selected_nav');
    homeLink.classList.remove('selected_nav');
    reserveLink.classList.remove('selected_nav');
  };

  newcar = async () => {
    goBack()
    let fee =  parseFloat(this.state.car.fee);
    let price = parseFloat(this.state.car.price);
    let horse_power = parseFloat(this.state.car.horse_power);
    let formData = new FormData
      formData.append("name",this.state.car.name)
      formData.append("description", this.state.car.description)
      formData.append("price",price )
      formData.append("fee",fee)
      formData.append("horse_power",horse_power)
      formData.append("background_color", this.state.car.background_color)
      formData.append("image", this.state.car.image)

    await axios.post('http://carhubackend.herokuapp.com/models/', formData, {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then((response) => response)
      .then((response) => {
        console.log(response.data.message)
        if (response.data.message == 'Car saved!') {
          window.location.href ="/"
          return true
        } else {
          alert(response.data.message)
          return false
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  handleChange = async (e) => {
    await this.setState({
      car: {
        ...this.state.car,
        [e.target.name]: e.target.value,
      },
    });
  }

  handleImage = async (e) => {
    await this.setState({
      car: {
        ...this.state.car,
        [e.target.name]: e.target.files[0],
      },
    });
  }
  render() {
    return (

      <div className="container_">
        <div className="add-box">
          <div className="login-title">
            <h1>Add a car</h1>
            {this.state.image && (
              <div>
                <img className="preview" src={image} alt="" />
              </div>
            )}
            <div className="login-content">
              <div className="double">
                <div className="labeled">
                  <label htmlFor="name" className='label' >Name</label>
                  <input required type="text" className="input linput" placeholder='name' maxLength="100" minLength="1" name="name" onChange={this.handleChange} />
                </div>
                <div className="labeled">
                  <label htmlFor="color" className='label label-color' >Background Color</label>
                  <input required type="color" placeholder='#ffffff' name="background_color" id="background_color" onChange={this.handleChange} />
                </div>
              </div>
              <div className="double">
                <div className="labeled">
                  <label htmlFor="price" className='label' className='label'>Price</label>
                  <input required type="number" min="1" className="input linput" placeholder='1' id="price" name="price" onChange={this.handleChange} />
                </div>
                <div className="labeled">
                  <label htmlFor="fee" className='label' className='label'>Fee</label>
                  <input required type="number" min="1" className="input linput" placeholder='1' name="fee" id="fee" onChange={this.handleChange} />
                </div>
              </div>
              <div className="double">
                <div className="labeled">
                  <label htmlFor="horse_power" className='label' className='label'>Horse Power</label>
                  <input required type="number" min="1" className=" input linput" placeholder='1' name="horse_power" id="horse_power" onChange={this.handleChange} />
                </div>
                <div className="labeled">
                  <label htmlFor="image" className='label' className='label'>Image</label>
                  <input required type="file" className=" input linput" name="image" id="image" onChange={this.handleImage} />
                </div>
              </div>
              <div className="double">
                <label htmlFor="description" className='label' >Description</label>
                <textarea required className="input bigput" placeholder='description' maxLength="250" minLength="1" name="description" onChange={this.handleChange} />
              </div>
              <button className="log-button add-b" onClick={() => this.newcar()}>Create</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignupForm

