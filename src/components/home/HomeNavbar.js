import React, { useState } from 'react'
import FBLogo from '../../icons/facebook-logo.svg'
import InstaLogo from '../../icons/insta-logo.svg'
import TwitterLogo from '../../icons/twitter-logo.svg'
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
/**
 * Navigation bar for Home, Blog, Forum, and Shop.
 * This is where routing is handled. Note that route paths are defined in "routerPaths.js"
 * @returns 
 */

function HomeNavbar() {
    const history = useHistory()
    const [navSelector, setNavSelector] = useState({home:true, blog:false, forum:false, shop:false})

    // const handleClick = (path) =>{
    //     history.push(path)
    //     switch(path){
    //         case home:
    //             setNavSelector()
    //             break
    //         case blog:
    //             break
    //         case forum:
    //             break
    //         case shop:
    //             break
    //         default:
    //             return
    //     }
    // }
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
                break;
            case "shop":
                history.push(shop)
                break;
            default:
                return
        }
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
            <img onClick={()=>{console.log("fb link")}} className="social-icon" src={FBLogo}/>
            <img className="social-icon" src={InstaLogo}/>
            <img className="social-icon" src={TwitterLogo}/>

            <Button classes={{label:"navbutton-label"}}>Login</Button>
        </div>
    )
}

export default HomeNavbar
