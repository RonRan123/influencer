import { Typography } from '@material-ui/core';
import React from 'react';

function PostCard({info, image}){
    return(
        <div key={image.id} className="masonry-item" >
            <img 
                src={image.urls.small}
                alt={image.description}
            />
            <div>
                <p>Title</p>
            </div>
        </div>
    )
}

export default PostCard;