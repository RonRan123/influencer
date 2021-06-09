import { Typography, Button } from '@material-ui/core';
import React from 'react';

function PostCard({info}){
    return(
        // On click should take you to the post
        <div key={info.title} className="masonry-item" >
            <img 
                width="400"
                src={info.image}
                alt={info.title}
            />
            {/* <div className="post-info">
                <Button variant="contained">Show Post</Button>
            </div> */}
            {/* <div class="button"><a href="#"> BUTTON </a></div> */}
        </div>
    )
}

export default PostCard;