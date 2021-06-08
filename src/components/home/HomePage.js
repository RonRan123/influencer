import React from 'react'
import FeaturedGrid from './FeaturedGrid'
import HomeNavbar from './HomeNavbar'
import NavigationDrawer from './NavigationDrawer'
import '../../css/home-page.css'
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
            <HomeNavbar/>
            <div className="menu-button">
                <NavigationDrawer/>
            </div>

            <FeaturedGrid/>
        </div>
    )
}

export default HomePage
