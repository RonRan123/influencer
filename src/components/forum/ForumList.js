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
/**
 * List of all forum posts. New forum posts can be started by users. 
 * Edit and delete permissions will be reserved for the admin of the site.
 * @returns 
 */
function ForumList() {
    const {path, url} = useRouteMatch()
    const [allThreads, setAllThreads] = useState([])

    useEffect(()=>{
        fetchAllThreads()
    }, [])

    //TO DO: Sort by timestamp (add time stamp in post request)
    const fetchAllThreads = () =>{
        const url = new URL('http://localhost:8080/forums/get')
        console.log("fetch threads")
        axios.get(url)
            .then(response=>{
                setAllThreads(response.data)
                console.log(response.data)
            })
            .catch(err=>{
                console.log("Error: ", err)
            })
    }
    return (
        <> 
            <Switch>
                <Route exact path={path}>
                    <ForumCRUD fetchAllThreads={fetchAllThreads}/>
          
                    {allThreads.length > 0
                        ?
                        <div className="forum-frame">
                            {
                                allThreads.map((forumObj)=>{
                                    return (<ForumItem key={forumObj.doc_id} forumItem={forumObj} setAllThreads={setAllThreads}/>)
                                })
                            }
                        </div>
                        :
                        <div className="circular-progress">
                            <CircularProgress style={{width:"100%", height:"100%"}}/>
                        </div>
                    }
                </Route>
                <Route path={`${path}/:threadId`}>
                        <ForumView allThreads={allThreads}/>
                </Route>
            </Switch>
        </>
    )
}

export default ForumList