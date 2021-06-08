import React, {useEffect, useState} from "react";
import { Button, Container, TextField } from "@material-ui/core";
import PostCard from "./PostCard"
import '../css/Blog.css'
import Masonry from 'react-masonry-css'

function Blog(){
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("canyon");
    const getPhotos = async () => {
        // For some reason, function doesn't work when I add search in the URl
        const url = new URL('https://api.unsplash.com/search/photos');
        url.searchParams.append('client_id', process.env.REACT_APP_access_key);
        url.searchParams.append('query', input);
        // console.log(input);
        // console.log(url.toString());
        fetch(url)
            .then(resp => resp.json())
            .then(resp => setPosts(resp.results))
            .then(resp => resp);
    }
    useEffect(() =>{
        getPhotos();
    }, [])

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        <Container >
            {/* {posts && posts.map(p => <Post info={p} />)} */}
            <TextField id="search-keyword" label="Enter Search" onChange={e => setInput(e.target.value)} defaultValue="canyon"/>
            <Button onClick={() => getPhotos()}>Search</Button>
            <br></br>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {posts && posts.map( (image) => <PostCard key={image.id} image={image} />)}
            </Masonry>
            
        </Container>
    );
}



export default Blog;