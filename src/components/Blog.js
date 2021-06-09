import React, {useEffect, useState} from "react";
import { Button, Container, TextField } from "@material-ui/core";
import PostCard from "./PostCard"
import ImageCard from "./ImageCard"
import '../css/Blog.css'
import Masonry from 'react-masonry-css'

function Blog(){
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("canyon");
    const [random, setRandom] = useState(false);

    //Will retrieve random photos from the API for testing
    const getSomePhotos = async () => {
        const url = new URL('https://api.unsplash.com/search/photos');
        url.searchParams.append('client_id', process.env.REACT_APP_access_key);
        url.searchParams.append('query', input);
        // console.log(input);
        // console.log(url.toString());
        fetch(url)
            .then(resp => resp.json())
            .then(resp => setPosts(resp.results))
            .then(resp => resp);
        setRandom(true);
    }

    const getMyPhotos = async () => {
        fetch('/blog/get')
            .then(resp => resp.json())
            .then(resp => setPosts(resp));
    }

    useEffect(() =>{
        // getSomePhotos();
        getMyPhotos();
    }, [])

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }
    console.log(posts)
    return (
        <Container >
            {/* {posts && posts.map(p => <Post info={p} />)} */}
            {/* <TextField id="search-keyword" label="Enter Search" onChange={e => setInput(e.target.value)} defaultValue="canyon"/> */}
            {/* <Button onClick={() => getSomePhotos()}>Search</Button> */}
            <br></br>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                
            {posts && random?posts.map( (image) => <ImageCard key={image.id} image={image} />):posts.map( (post) => <PostCard key={post.doc_id} info={post} />)}
            </Masonry>
            
        </Container>
    );
}



export default Blog;