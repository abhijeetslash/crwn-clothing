import React from 'react';

import './signInAndsignUpPage.scss';

import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signUp';

const signInAndSignUpPage = props => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default signInAndSignUpPage;