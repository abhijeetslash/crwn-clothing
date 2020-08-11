import React from 'react';

import './formInput.scss';

const formInput = props => {
    const {handleChange, label, ...otherInputProps} = props;

    return (
        <div className='group'>
            <input className='form-input' {...otherInputProps} onChange={handleChange}/>
            {
                label ? 
            (<label className={`${otherInputProps.value ? `shrink`:''} form-input-label`}>{label}</label>)
                 : null
            }
        </div>
    )
}

export default formInput;