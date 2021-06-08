import React from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
    Divider,
    IconButton,
}from '@material-ui/core'
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
// const commentItemData = {
//     date:"6/8/2021",
//     text:"I don't know lol. This is a silly question",
//     likes:100,
//     dislikes:200,
//     user:{name:"Adriel Kim"},//ideally would be an ID referencing the user
// }

function CommentItem({commentItem}) {

    const handleLike = () =>{
        //update number of likes on client and database
    }

    const handleDislike = ()=>{
        //update number of dislikes on client and database
    }

    const iconButtonStyle={
        margin:0,
        padding:"2px"
    }
    return (
        <div className="comment-item-container">       
            <Card>
                <CardContent classes={{root:"card-root"}} >
                    <p className="forum">{commentItem.text}</p>
                    <Divider/>
                    <p className="forum">By: <b>{commentItem.user.name}</b> on <b>{commentItem.date}</b></p>
                    <p className="stats">
                       <IconButton onClick={handleLike} style={iconButtonStyle}>
                           <ThumbUpAltIcon />
                        </IconButton> 
                        {commentItem.likes} 
                        <IconButton onClick={handleDislike} style={iconButtonStyle}>
                            <ThumbDownIcon/>
                        </IconButton> 
                        {commentItem.dislikes}
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default CommentItem
