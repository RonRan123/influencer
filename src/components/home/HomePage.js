import React from 'react'
import FeaturedGrid from './FeaturedGrid'
import NavigationDrawer from './NavigationDrawer'
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
//To do:
//Use media queries to set breakpoints for full screen navbar view

/**
 * Home/Landing page containing navigation bar,
 * featured blog posts and shop items. 
 * All navigation/routing is handled on this pages
 * @returns Aesthetic landing page HTML
 */
function HomePage() {

    const fetchBlogs = () => {
        //code here to get featured blogs
    }

    const fetchShopItems = () => {
        //code here to get featured shop items
    }

    //use clsx to manage button look when selected
    return (
        <div>
            <h1>
                Camille's Corner
            </h1>
            <div className="menu-button">
                    <NavigationDrawer/>
                </div>
            <div className="navbar">
                <div className="navbutton-group">
                    <div className="navbutton--border">
                        <Button classes={{label:"navbutton-label"}}>Home</Button>
                    </div>
                    <div className="navbutton">
                        <Button classes={{label:"navbutton-label"}}>Blog</Button>
                    </div>
                    <div className="navbutton">
                        <Button classes={{label:"navbutton-label"}}>Forum</Button>
                    </div>
                    <div className="navbutton">
                        <Button classes={{label:"navbutton-label"}}>Shop</Button>
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
            <FeaturedGrid/>

        </div>
    )
}

export default HomePage
