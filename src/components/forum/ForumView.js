import React, { useState, useEffect } from 'react'
import CommentList from './CommentList'
import{
    Divider
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import axios from 'axios'

/**
 * This is the view of a single forum thread/post displaying  the forum title, author, date
 * and comments below. In addition, this is where new comments can be posted.
 * @param allThreads All forum threads, which are filtered based on threadId url parameter
 * @returns 
 */
function ForumView({allThreads}) {
    const { threadId } = useParams()
    const [currentForum, setCurrentForum] = useState(null)
    const [comments, setComments] = useState([])
    
    useEffect(()=>{
        setCurrentForum(allThreads.find(thread=>thread.doc_id === threadId))
        getComments()
    }, [])

    const getComments = () =>{
        const url = new URL('http://localhost:8080/comments/getFromForum')
        url.searchParams.append('forumId',threadId)
        axios.get(url)
            .then(response=>{
                setComments(response.data)
            })
            .catch(err=>{
                console.log("Error getting comments: ", err)
            })
    
    }

    return (
        <div className="forum-view">
            {currentForum &&
                <>
                    <h3>{currentForum.title}</h3>
                    <h4>Posted by {currentForum.user} on {currentForum.date}</h4>
                    <Divider/>
                    <CommentList setComments={setComments} comments={comments}/>
                </>
            }
        </div>
    )
}

export default ForumView
