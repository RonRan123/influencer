import React, { useState } from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
    Input
}from '@material-ui/core'
import CommentIcon from '@material-ui/icons/Comment'
import { useHistory, useRouteMatch } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { IconButton } from '@material-ui/core'

import axios from 'axios'
/**
 * Component for displaying an individual forum post. Is a child of ForumList.js
 * Also handles edit and delete operations for an individual form post
 * @param {*} forumItem Contains data for individual forum post
 * @returns 
 */
function ForumItem({forumItem, setAllThreads}) {
    const history = useHistory()
    const [editMode, setEditMode] = useState(false)
    let match = useRouteMatch()
    const cardStyle={
        width:"850px",
        borderRadius:"5px 0px 0px 5px",
    }
    const editInputStyle={
        fontFamily:"Martel",
        fontWeight:"bold",
        width:"100%",
    }
    const getNumComments = () =>{
        //will be used to get number of comments relating to forum post
    }
    const handleThreadRoute = ()=>{
        history.push(`${match.url}/${forumItem.doc_id}`)
    }

    const handleEdit = () =>{
        setEditMode(editMode=>!editMode)
    }

    //make sure to delete associated comments as well...
    const handleDelete = () => {
        const url = new URL('http://localhost:8080/forums/delete')
        url.searchParams.append('forumId', forumItem.doc_id)
        axios.delete(url)
            .catch(err=>console.log("Fourm post deletion error: ", err))
        
        setAllThreads(allThreads => allThreads.filter(thread=>thread.doc_id !== forumItem.doc_id))
    }

    return (
        <div className="forum-item-container">       
            <Card style={cardStyle}>
                {!editMode
                 ?<CardActionArea onClick={handleThreadRoute}>
                    <CardContent classes={{root:"card-root"}} >

                        <h3>{forumItem.title}</h3>
                        <p className="forum">Posted by <b>{forumItem.user}</b> on <b>{forumItem.date}</b></p>
                        <p className="stats">
                            <CommentIcon/> {'104'} Comments
                        </p>
                        
                    </CardContent>
                  </CardActionArea>
                :<CardContent classes={{root:"card-root"}}>
                    <Input style={editInputStyle} multiline={true} defaultValue={forumItem.title}/>
                    <p className="forum">Posted by <b>{forumItem.user}</b> on <b>{forumItem.date}</b></p>
                    <p className="stats">
                        <CommentIcon/> {'104'} Comments
                    </p>
                </CardContent>
                }
            </Card>
            <div className="edit-delete-container">
                <IconButton onClick={handleEdit}><EditIcon/></IconButton>
                <IconButton onClick={handleDelete}><DeleteIcon/></IconButton>
            </div>
        </div>
    )
}

export default ForumItem
