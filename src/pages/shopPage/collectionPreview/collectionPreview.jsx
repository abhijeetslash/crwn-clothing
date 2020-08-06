import React from 'react';

import './collectionPreview.scss';

import CollectionItem from '../collectionItem/collectionItem';

const collectionPreview = props => {
    const {title, items} = props;

    return (
        <div className='collection-preview'>
            <div className='title'>{title.toUpperCase()}</div>
            <div className='preview'>
                {
                    items.filter((item, index)=>{
                        return index < 4
                    }).map(({id, ...otherItemProps}) => {
                        return <CollectionItem key={id} {...otherItemProps}/>
                    })
                }
            </div>
        </div>
    )
}

export default collectionPreview;