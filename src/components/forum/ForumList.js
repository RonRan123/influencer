import React from 'react'
import ForumItem from './ForumItem'
import ForumView from './ForumView'
import ForumCRUD from './ForumCRUD'
import '../../css/forum-page.css'
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory
  } from "react-router-dom";
//testing
const forumItems =[
    { title:'A lot of famous recipes are claimed to be made with love, but what’s a dish that’s probably made with hatred?',
        author:'camomile123',
        date:'6/8/2021',
        id:"1",
    },
    { title:'A lot of famous recipes are claimed to be made with love, but what’s a dish that’s probably made with hatred?',
    author:'camomile123',
    date:'6/8/2021',
    id:"2",
    },
    { title:'A lot of famous recipes are claimed to be made with love, but what’s a dish that’s probably made with hatred?',
    author:'camomile123',
    date:'6/8/2021',
    id:"3",
    },
    { title:'A lot of famous recipes are claimed to be made with love, but what’s a dish that’s probably made with hatred?',
    author:'camomile123',
    date:'6/8/2021',
    id:"4",
    },
    { title:'A lot of famous recipes are claimed to be made with love, but what’s a dish that’s probably made with hatred?',
    author:'camomile123',
    date:'6/8/2021',
    id:"5",
    },
]
function ForumList({forumData}) {
    const {path, url} = useRouteMatch()
    return (
        <> 
            <Switch>
                <Route exact path={path}>
                    <ForumCRUD/>
                    <div className="forum-frame">
                        {
                            forumItems.map((forumObj)=>{
                                return (<ForumItem key={forumObj.id} forumItem={forumObj}/>)
                            })
                        }
                    </div>
                </Route>
                <Route path={`${path}/:threadId`}>
                        <ForumView forumItem={forumItems[0]}/>
                </Route>
            </Switch>
        </>
    )
}

export default ForumList