import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.scss';
import { auth } from '../../firebase-utils/firebase-utils';

const header = props => {
    const {currentUser} = props;

    return (
        <div className='header'>
            <div className='logo-container'>
                <Link to='/'><Logo /></Link>
            </div>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    currentUser ? 
                    (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>) 
                    : (<Link className='option' to='/signIn'>SIGN IN</Link>)
                }
            </div>
        </div>
    )

}

export default header;