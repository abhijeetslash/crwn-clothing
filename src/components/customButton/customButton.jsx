import React from 'react';

import './customButton.scss';

const customButton = props => {

    const {children, isGoogleSignIn, ...otherButtonProps} = props;

    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`} 
        {...otherButtonProps}>
            {children}
            </button>
    )
}

export default customButton;