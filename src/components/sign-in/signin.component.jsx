import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './signin.styles.scss'
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password:''
        };
    }
    
    handleSubmit = async event => {
        event.preventDefault()

        const { email, password } = this.state;

        try {
            const userSignin = await signInWithEmailAndPassword(auth, email, password);
            console.log("Signed in as:", userSignin.user);

            this.setState({email: '', password: ''})
        }
        catch(error){
            console.log(error)
        }
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