import React from 'react'

import Shop_Data from './shop.data';

import PreviewCollection from "../../components/collection-preview/collection-preview.component"

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = Shop_Data;
    }

    render() {
        const collections = this.state;
        return (
            <div className='shop-page'>
            {
                collections.map(({ id , ...OtherCollectionProps }) => (
                    <PreviewCollection key={id} {...OtherCollectionProps} />
                ))
            }
        </div>
        )
    }
}

export default ShopPage;