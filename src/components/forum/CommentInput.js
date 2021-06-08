import React from 'react'
import {
    Input,
    Button
}from '@material-ui/core'
function CommentInput() {

    const handleCommentPost = () =>{
        // add comment to database
    }

    const handleCommentCancel = () =>{
        // clear form
    }

    const inputStyling={
        fontFamily:"Martel", 
        padding:"5px",
        borderRadius:"5px 5px 0px 0px"
    }
    return (
        <>          
            <div className="comment-spacer-top"/>       
            <div className="comment-input-container">
                <Input 
                    rows={5}
                    classes={{root:"comment-input"}} 
                    multiline={true} 
                    disableUnderline={true}
                    placeholder="Comment here"
                    style={inputStyling}
                />
                            <div className="comment-button-container">
                <div className="comment-button">
                    <Button onClick={handleCommentPost} classes={{root:"comment-button-label", label:"comment-button-label"}}>Post</Button>
                </div>
                <div className="comment-button">
                    <Button onClick={handleCommentCancel} classes={{root:"comment-button-label", label:"comment-button-label"}}>Cancel</Button>
                </div>
            </div> 
            </div>
            <div className="comment-spacer-bottom"/>       
        </>
    )
}

export default CommentInput
