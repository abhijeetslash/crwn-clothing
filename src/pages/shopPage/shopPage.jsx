import React, { Component } from 'react';

import SHOP_DATA from './shopData';
import CollectionPreview from './collectionPreview/collectionPreview';

class shopPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){

        return (
            <div>
                {
                    this.state.collections.map(({id, ...otherCollectionProps}) => {
                        return <CollectionPreview key={id} {...otherCollectionProps} />
                    })
                }
            </div>
        )
    }
}

export default shopPage;