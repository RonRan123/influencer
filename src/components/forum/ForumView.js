import React from 'react'
import CommentList from './CommentList'
import{
    Divider
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
function ForumView({forumItem}) {
    const { threadId } = useParams()
    console.log(threadId)
    return (
        <div className="forum-view">
            <h3>{forumItem.title}</h3>
            <h4>Posted by {forumItem.author} on {forumItem.date}</h4>
            <Divider/>
            <CommentList/>
        </div>
    )
}

export default ForumView
