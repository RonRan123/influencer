import React from 'react'

function FeaturedBlogs({blogPosts}) {

    //temporary function to get random pics
    const randomURL = 'https://picsum.photos/512/512'
    return (
        <div class="featured-blogs">
            <img src={randomURL}/>
            <img src={randomURL}/>
            <img src={randomURL}/>
        </div>
    )
}

export default FeaturedBlogs
