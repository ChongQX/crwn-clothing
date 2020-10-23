import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {//CollectionPreview should handle filter no. of items instead of collection-overview coz eg. side scroll bars to 8 items
            //doing at collection overview wont allow future upgrade for the no. of display here
                items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
)

export default CollectionPreview;