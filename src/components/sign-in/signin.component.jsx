import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './signin.styles.scss'
import { signInWithGoogle } from "../../firebase/firebase.utils";

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
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email"
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='email'
                    required
                    />
                    <FormInput 
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='password'
                    required
                    />
                    <div className="buttons-container">
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In with Google
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn