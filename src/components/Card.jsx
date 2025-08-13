import React from 'react';
import ImageGrid from './ImageGrid';

const Card = ({ imagesdata }) => {
   

    const { id, webformatURL, userImageURL, user, likes, comments } = imagesdata;
    return (
        <ImageGrid imagesdata={imagesdata} />
    )
}

export default Card