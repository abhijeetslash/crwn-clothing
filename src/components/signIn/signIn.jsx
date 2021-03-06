import React from 'react';

import './signIn.scss';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import {auth, signInWithGoogle} from '../../firebase-utils/firebase-utils';

class signIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]:value
        })
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (err) {
            console.log(err)
        }

        this.setState(({email, password})=>{
            return {
                email: '',
                password: ''
            }
        })
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your email and password.</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        label="Email" 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        label="Password" 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default signIn;