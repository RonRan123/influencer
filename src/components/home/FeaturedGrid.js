import React from 'react'

const blurbData = `Camille is a world-famous model who has only ever wanted to be normal, 
even though her mother has always pushed her to become a superstar. Now, she's a college dropout,
working as a social media influencer to make the world a more positive place.`

function FeaturedGrid({blogPosts}) {

    //temporary function to get random pics
    const randomURL = 'https://picsum.photos/450/550'
    const randomURL2 = 'https://picsum.photos/450/200'
    const randomURL3 = 'https://picsum.photos/450/200'


    return (
        <div className="featured-blogs">
            <div className="featured-container--long">
                <h2>About Me</h2>
                <img className="featured-img--long" src={randomURL}/>
                <p>
                    {blurbData}
                </p>
            </div>
            <div className="featured-container--short">
                <h2>Latest Blog Post</h2>
                <img className="featured-img--short" src={randomURL2}/>
            </div>
            <div className="featured-container--short">
                <h2>Latest Merchandise</h2>
                <img className="featured-img--short" src={randomURL3}/>
            </div>
            <div className="featured-container--short">
                <img className="featured-img--short" src={randomURL3}/>
            </div>
        </div>
    )
}

export default FeaturedGrid
