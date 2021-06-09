import React, { useState, useEffect } from 'react'
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
import { CircularProgress } from '@material-ui/core'
import axios from 'axios'
//testing
function ForumList({forumData}) {
    const {path, url} = useRouteMatch()
    const [allThreads, setAllThreads] = useState([])
    const progressStyle={
        width:"100%",
        height:"100%"
    }
    useEffect(()=>{
        fetchAllThreads()
    }, [])

    const fetchAllThreads = () =>{
        const url = new URL('http://localhost:8080/forums/get')
        axios.get(url)
            .then(response=>{
                setAllThreads(response.data)
            })
            .catch(err=>{
                console.log("Error: ", err)
            })
    }
    return (
        <> 
            <Switch>
                <Route exact path={path}>
                    <ForumCRUD/>
          
                    {allThreads.length > 0
                        ?
                        <div className="forum-frame">
                            {
                                allThreads.map((forumObj)=>{
                                    return (<ForumItem key={forumObj.doc_id} forumItem={forumObj}/>)
                                })
                            }
                        </div>
                        :
                        <div className="circular-progress">
                            <CircularProgress style={progressStyle}/>
                        </div>
                    }
                </Route>
                <Route path={`${path}/:threadId`}>
                        <ForumView allThreads={allThreads} forumItem={allThreads[0]}/>
                </Route>
            </Switch>
        </>
    )
}

export default ForumList