import React from 'react'
import CommentItem from './CommentItem'
import CommentInput from './CommentInput'
import {
    Divider,
    CircularProgress
}from '@material-ui/core'

/**
 * List of comments displayed under a forum or blog post
 * This component is a parent of ForumView.js
 * @returns 
 */
function CommentList({setComments, comments}) {
    return (
        <div>
            {comments.length > 0
            ? comments.map((comment, index)=>{
                return(
                    <>
                        <CommentItem key={comment.doc_id} commentItem={comment}/>
                        <Divider key={index}/>
                    </>
                )
            })
            :
            <div className="circular-progress">
                <CircularProgress style={{width:"100%", height:"100%"}}/>
            </div>
            }
            <CommentInput setComments={setComments} />
        </div>
    )
}

export default CommentList
