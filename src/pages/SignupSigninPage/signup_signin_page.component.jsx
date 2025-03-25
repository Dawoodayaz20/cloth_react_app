import React from "react";

import './signup_signin_page.styles.scss'

import SignIn from '../../components/sign-in/signin.component'
import SignUp from "../../components/sign-up/sign-up.component";

const SignInSignUp = () => (
    <div className="'sign-in-and-sign-up'">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignUp;
