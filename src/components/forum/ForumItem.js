import React from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
}from '@material-ui/core'
import CommentIcon from '@material-ui/icons/Comment';


function ForumItem({forumItem}) {

    const getNumComments = () =>{
        //will be used to get number of comments relating to forum post
    }
    const handleThreadRoute = ()=>{
        console.log("HELLO")
    }
    return (
        <div className="forum-item-container">       
            <Card>
                <CardActionArea onClick={handleThreadRoute}>
                    <CardContent classes={{root:"card-root"}} >
                        <h3>{forumItem.title}</h3>
                        <p className="forum">Posted by <b>{forumItem.author}</b> on <b>{forumItem.date}</b></p>
                        <p className="stats"><CommentIcon/> {'104'} Comments</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default ForumItem
