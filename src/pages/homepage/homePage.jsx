import React from 'react';

import './homePage.scss';

import Directory from '../../components/directory/directory';

const homePage = props => {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    )
}

export default homePage;