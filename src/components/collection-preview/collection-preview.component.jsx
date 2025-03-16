import React from 'react';
import CollectionItem from '../collection-items/collection-items.component';
import './collection-preview.styles.scss'

const PreviewCollection = ( { title, items } ) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4) //this will make it show only 4 items in shop page
                .map(({ id, ...OtherItemProps}) => (
                    <CollectionItem key={id} {...OtherItemProps} />
                ))}
        </div>
    </div>
);

export default PreviewCollection;