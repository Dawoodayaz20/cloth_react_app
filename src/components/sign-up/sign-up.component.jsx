import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import './sign-up.styles.scss'
// import { confirmPasswordReset } from "firebase/auth";

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName : '',
            email: '',
            password: '',
            confirmPassword : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword){
            alert("Passwords don't match")
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            await createUserProfileDocument(user, { displayName });
            console.log("User Created:", user.user);

            this.setState({
                displayName : '',
                email: '',
                password: '',
                confirmPassword : ''
            });
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with you email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                    >
                    </FormInput>
                    <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='email'
                    required
                    >
                    </FormInput>
                    <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    >
                    </FormInput>
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                    >
                    </FormInput>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp