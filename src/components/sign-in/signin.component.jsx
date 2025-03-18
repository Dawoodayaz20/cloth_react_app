import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import './signin.styles.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password:''
        };
    }
    
    handleSubmit = event => {
        event.preventDefault(
            this.setState({ email: '', password: ''})
        )
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value});
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I have already an account</h2>
                <span>Signin with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email"
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='email'
                    required
                    />
                    {/* <label>Email</label> */}
                    <FormInput 
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='password'
                    required
                    />
                    {/* <label>Email</label> */}
                    <input type="submit" value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn