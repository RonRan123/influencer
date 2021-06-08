import React from 'react'
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
/**
 * Navigation bar for Home, Blog, Forum, and Shop.
 * This is where routing is handled.
 * @returns 
 */
function HomeNavbar() {
    const history = useHistory()

    const handleClick = (path) =>{
        history.push(path)
    }
    return (
        <div className="navbar">
            <div className="navbutton-group">
                <div className="navbutton--border">
                    <Button onClick={()=>handleClick("/")} classes={{label:"navbutton-label"}}>Home</Button>
                </div>
                <div className="navbutton">
                    <Button onClick={()=>handleClick("/blog")}  classes={{label:"navbutton-label"}}>Blog</Button>
                </div>
                <div className="navbutton">
                    <Button onClick={()=>handleClick("/forum")} classes={{label:"navbutton-label"}}>Forum</Button>
                </div>
                <div className="navbutton">
                    <Button onClick={()=>handleClick("/shop")} classes={{label:"navbutton-label"}}>Shop</Button>
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
