import React, { useState } from 'react'
import '../../css/home-page.css'
import {
    Button,
    Input,
    IconButton 
}from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import {
    useHistory
} from "react-router-dom";
import { home, blog, forum, shop } from './routerPaths'
import { useForum } from '../../context/ForumContext'
/**
 * Navigation bar for Home, Blog, Forum, and Shop.
 * This is where routing is handled. Note that route paths are defined in "routerPaths.js"
 * @returns 
 */

function HomeNavbar() {
    const history = useHistory()
    const { fetchAllThreads }  = useForum()
    const [navSelector, setNavSelector] = useState({home:true, blog:false, forum:false, shop:false})
    const handleClick= (e)=>{
        const selectorName = e.currentTarget.name
        const navSelectorNone = {home:false, blog:false, forum:false, shop:false}
        setNavSelector({...navSelectorNone, [selectorName]:true})
        switch(selectorName){
            case "home":
                history.push(home)
                break;
            case "blog":
                history.push(blog)
                break;
            case "forum":
                history.push(forum)
                handleForumRefresh()
                break;
            case "shop":
                history.push(shop)
                break;
            default:
                return
        }
    }

    const handleForumRefresh = ()=>{
        fetchAllThreads()
    }
    return (
        <div className="navbar">
            <div className="navbutton-group">
                <div className= {navSelector.home ? "navbutton--border" : "navbutton"}>
                    <Button name="home" onClick={handleClick} classes={{label:"navbutton-label"}}>Home</Button>
                </div>
                <div className={navSelector.blog ? "navbutton--border" : "navbutton"}>
                    <Button name="blog" onClick={handleClick}  classes={{label:"navbutton-label"}}>Blog</Button>
                </div>
                <div className={navSelector.forum ? "navbutton--border" : "navbutton"}>
                    <Button name="forum" onClick={handleClick}  classes={{label:"navbutton-label"}}>Forum</Button>
                </div>
                <div className={navSelector.shop ? "navbutton--border" : "navbutton"}>
                    <Button name="shop" onClick={handleClick} classes={{label:"navbutton-label"}}>Shop</Button>
                </div>
        
            </div>
            <div className="search-bar">
                <IconButton> 
                    <SearchIcon/>
                </IconButton>
                <Input disableUnderline={true} classes={{root:"search-bar__form"}} id="search-input" placeholder={"Search"}/>
            </div>
  
            <Button classes={{label:"navbutton-label"}}>Login</Button>
        </div>
    )
}

export default HomeNavbar
