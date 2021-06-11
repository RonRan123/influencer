import { Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';

function AddCard({info}){
    const history = useHistory();
    const props = {title:"Add Title Here", date:""};
    const [blogData, setBlogData] = useState(props);
    // const {path, url} = useRouteMatch();
    // const openPost = () => {
    //     console.log(info.title);
    //     history.push(`${path}/${info.doc_id}`)
    //     // alert(post.doc_id);
    // }

    const addPost = () => {
        console.log("add post")
    }
    return(
        // On click should take you to the post
        <div className="masonry-item" onClick={addPost}>
            <Button></Button>
            {/* <img 
                width="400"
                src={info.image}
                alt={info.title}
            /> */}
            {/* <div className="post-info">
                <Button variant="contained">Show Post</Button>
            </div> */}
            {/* <div class="button"><a href="#"> BUTTON </a></div> */}
        </div>
    )
}

export default AddCard;