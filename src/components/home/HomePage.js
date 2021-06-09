import React from 'react'
import FeaturedGrid from './FeaturedGrid'
import HomeNavbar from './HomeNavbar'
import ShopItems from '../ShopItems'
import NavigationDrawer from './NavigationDrawer'
import Blog from '../Blog'
import '../../css/home-page.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

//testing
import ForumList from '../forum/ForumList'
import { home, blog, forum, shop } from './routerPaths'


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
        <Router>
            <h1>
                Camille's Corner
            </h1>
            <HomeNavbar/>
            <div className="menu-button">
                <NavigationDrawer/>
            </div>

            <Switch>
                <Route exact path={home}>
                    <FeaturedGrid/>
                </Route>
                <Route path={forum}>
                   <ForumList/> 
                </Route>
                <Route path ={blog}>
                    <Blog/>
                </Route>
                <Route path ={shop}>
                    <ShopItems/>
                </Route>
            </Switch>
        </Router>
    )
}

export default HomePage
