import React, { useState, useEffect } from 'react'
import CommentList from './CommentList'
import{
    Divider
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
function ForumView({allThreads, forumItem}) {
    const { threadId } = useParams()
    const [currentForum, setCurrentForum] = useState(null)
    
    useEffect(()=>{
        setCurrentForum(allThreads.find(thread=>thread.doc_id === threadId))
    }, [])

    return (
        <div className="forum-view">
            {currentForum &&
                <>
                    <h3>{currentForum.title}</h3>
                    <h4>Posted by {currentForum.user} on {currentForum.date}</h4>
                    <Divider/>
                    <CommentList/>
                </>
            }
        </div>
    )
}

export default ForumView
