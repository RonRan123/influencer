import React from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
}from '@material-ui/core'
import CommentIcon from '@material-ui/icons/Comment'
import { useHistory, useRouteMatch } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { IconButton } from '@material-ui/core'

function ForumItem({forumItem}) {
    const history = useHistory()
    let match = useRouteMatch()
    const cardStyle={
        width:"850px",
        borderRadius:"5px 0px 0px 5px",
    }
    const getNumComments = () =>{
        //will be used to get number of comments relating to forum post
    }
    const handleThreadRoute = ()=>{
        history.push(`${match.url}/${forumItem.doc_id}`)
    }

    const handleEdit = () =>{

    }
    const handleDelete = () => {

    }
    
    return (
        <div className="forum-item-container">       
            <Card style={cardStyle}>
                <CardActionArea onClick={handleThreadRoute}>
                    <CardContent classes={{root:"card-root"}} >
                        <h3>{forumItem.title}</h3>
                        <p className="forum">Posted by <b>{forumItem.user}</b> on <b>{forumItem.date}</b></p>
                        <p className="stats">
                            <CommentIcon/> {'104'} Comments
                        </p>
                        
                    </CardContent>
                </CardActionArea>
            </Card>
            <div className="edit-delete-container">
                <IconButton onClick={handleEdit}><EditIcon/></IconButton>
                <IconButton onClick={handleDelete}><DeleteIcon/></IconButton>
            </div>
        </div>
    )
}

export default ForumItem
