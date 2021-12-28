import React from 'react';

import './signin-and-signup.style.scss';
import Signin from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SigninAndSignup = () => (
    <div className='sign-in-and-sign-up'>
        <Signin />
        <SignUp />
    </div>
);

export default SigninAndSignup;