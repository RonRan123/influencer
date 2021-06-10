import React, { useState, useEffect } from 'react'
import CommentItem from './CommentItem'
import CommentInput from './CommentInput'
import {
    Divider,
    CircularProgress
}from '@material-ui/core'
import { useParams } from 'react-router-dom'
import axios from 'axios'
/**
 * List of comments displayed under a forum or blog post
 * This component is a parent of ForumView.js
 * @returns 
 */
function CommentList() {
    const { threadId } = useParams()
    const [comments, setComments] = useState([])

    useEffect(()=>{
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
        <div>
            {comments.length > 0
            ? comments.map((comment, index)=>{
                return(
                    <>
                        <CommentItem 
                            key={comment.doc_id} 
                            commentItem={comment}
                            setComments={setComments}
                        />
                        <Divider key={index}/>
                    </>
                )
            })
            :
            <div className="circular-progress">
                <CircularProgress style={{width:"100%", height:"100%"}}/>
            </div>
            }
            <CommentInput setComments={setComments} fetchComments={getComments} />
        </div>
    )
}

export default CommentList
