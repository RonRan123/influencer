import React from 'react'
import ForumItem from './ForumItem'
import ForumView from './ForumView'
import '../../css/forum-page.css'

//testing
const forumItem = {
    title:'A lot of famous recipes are claimed to be made with love, but what’s a dish that’s probably made with hatred?',
    author:'camomile123',
    date:'6/8/2021'
}
function ForumList({forumData}) {
    return (
        <>
            {/* <div className="forum-frame">
                <ForumItem forumItem={forumItem}/>
                <ForumItem forumItem={forumItem}/>
                <ForumItem forumItem={forumItem}/>
                <ForumItem forumItem={forumItem}/>
                <ForumItem forumItem={forumItem}/>
            </div> */}
            <ForumView forumItem={forumItem}/>
        </>
    )
}

export default ForumList