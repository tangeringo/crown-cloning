import React from 'react';

import './preview-colection.style.scss';

import CollectionItem from '../colection-item/colection-item.component';

const PreviewCollection = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'> {title.toUpperCase()} </h1>
        <div className='preview'>
            {
                items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
)

export default PreviewCollection;