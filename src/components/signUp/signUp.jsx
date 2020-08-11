import React from 'react';

import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';

import {auth, firestore, createUserProfileDocument} from '../../firebase-utils/firebase-utils';

import './signUp.scss';

class signUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        console.log(displayName, email, password, confirmPassword,'valued')
        if(password !== confirmPassword){
            alert('Passwords do not match');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            console.log(user,'ass')
            await createUserProfileDocument(user,{displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '' 
            })
        } catch (err) {
            console.log(err,'sfkjlsfkl')
        }
        
    }

    handleChange = event => {
        console.log('chl araha hai')
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }

    render(){

        const {displayName, email, password, confirmPassword} = this.state;

        return(
            <div className='sign-up'>
                <h2 className='title'>I don't have a account</h2>
                <span>Sign up with Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        
                        type="text"
                        label="displayName"
                        name="displayName"
                        value={displayName}
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        
                        type="email"
                        label="Email"
                        name="email"
                        value={email}
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        
                        type="password"
                        label="Password"
                        name="password"
                        value={password}
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        
                        type="password"
                        label="Confirm Password"
                        name="confirmPassword"
                        value={confirmPassword}
                        required
                        handleChange={this.handleChange}
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default signUp;
