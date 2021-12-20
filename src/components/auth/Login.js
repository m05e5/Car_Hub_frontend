import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css';

class Login extends Component {
  state = {
    user:{
      email:"",
      password:""
    }
  }

  handleChange=e=>{
    this.setState({
      user:{
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }
  
  render(){
  return (

  <div class="container_">
    <div class="second_container">
      <div class="form-group">
        <label>Email </label>
        <br />
        <input type="text" className='form-control' name="email" onChange={this.handleChange}/>
        <br />
        <label>Password: </label>
        <br />
        <input type="password" className='form-control' name="password" onChange={this.handleChange}/>
        <br />
        <button className='btn btn-primary'>Log in</button>
      </div>
    </div>
  </div>
)
};
}
export default Login;
