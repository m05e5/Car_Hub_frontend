import React from "react";

class SignupForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    } 
  }


  render() {
    return (
      <form>
        <h1>hello</h1>
        <label>Email</label>
        <input 
        type='text' 
        
        name='email' />
        <label>Password</label>
        <input 
        type='password' 
        name='password' />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default SignupForm;