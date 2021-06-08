import React from 'react'
import CommentItem from './CommentItem'
import CommentInput from './CommentInput'
import {
    Divider
}from '@material-ui/core'

const commentItemData = {
    date:"6/8/2021",
    text:"I’d just like to interject for a moment. What you’re refering to as Linux, is in fact, GNU/Linux, or as I’ve recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.",
    likes:100,
    dislikes:200,
    user:{name:"Adriel Kim"},//ideally would be an ID referencing the user
}

function CommentList() {
    return (
        <div>
            <CommentItem commentItem={commentItemData}/>
            <Divider/>
            <CommentItem commentItem={commentItemData}/>
            <Divider/>
            <CommentItem commentItem={commentItemData}/>
            <Divider/>
            <CommentInput/>
        </div>
    )
}

export default CommentList
