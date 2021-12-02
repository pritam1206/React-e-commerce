import React, { Component } from 'react';
import './signIn.component.styles.scss';
import FormInputComponent from '../form-input/form-input.compenent';
import CustomButton from '../custom-button/custom.button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export default class signIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2 className=''> I already have a account</h2>
        <span className=''> Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInputComponent
            handlechange={(event) => this.handleChange(event)}
            name='email'
            type='email'
            label='email'
            value={this.state.email}
            required
          />
          <FormInputComponent
            handlechange={this.handleChange}
            type='password'
            label='password'
            value={this.state.password}
            name='password'
          />
          <div className='buttons'>
            <CustomButton type='submit'>Submit</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleButton>
              Sign in with Google
            </CustomButton>
          </div>

          {/* <input  value='Submit' /> */}
        </form>
      </div>
    );
  }
}
