import React from 'react'
import './signin-and-signup-page.style.scss'
import SignUp from '../../components/sign-up/sign_up.component'
import SignIn from '../../components/sign-in/sign-in.component'



const signinAndSignupPage = () =>(
    <div className = 'signin-and-signup-page'>
        <SignIn/>
        <SignUp/>
       
    </div>
)

export default signinAndSignupPage