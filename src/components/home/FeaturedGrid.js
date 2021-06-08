import React from 'react'
import {
    Button
}from '@material-ui/core'

const blurbData = `Camille is a world-famous model who has only ever wanted to be normal, 
even though her mother has always pushed her to become a superstar. Now, she's a college dropout,
working as a social media influencer to make the world a more positive place.`

function FeaturedGrid({blogPosts}) {

    //temporary function to get random pics
    const randomURL = 'https://picsum.photos/450/550'
    const randomURL2 = 'https://picsum.photos/450/200'
    const randomURL3 = 'https://picsum.photos/450/200'

    const buttonStyle={
        margin:0,
        padding:0,
        borderRadius:"10px"
    }

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
                <Button style={buttonStyle}>
                    <img className="featured-img--short" src={randomURL2}/>
                    {/* <div className="overlaid-text">overlain text</div> */}

                </Button>
            </div>
            <div className="featured-container--short">
                <h2>Latest Merchandise</h2>
                <Button style={buttonStyle}>
                    <img className="featured-img--short" src={randomURL3}/>
                </Button>
            </div>
            <div className="featured-container--short">
                <Button style={buttonStyle}>
                    <img className="featured-img--short" src={randomURL3}/>
                </Button>
            </div>
        </div>
    )
}

export default FeaturedGrid
