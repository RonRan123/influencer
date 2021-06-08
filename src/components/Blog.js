import React, {useEffect, useState} from "react";
import { Button, Container, TextField } from "@material-ui/core";
import Post from "./PostCard"
import '../css/Blog.css'

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
    return (
        <Container>
            <h1>Camille's Corner</h1>
            {/* {posts && posts.map(p => <Post info={p} />)} */}
            <TextField id="search-keyword" label="Enter Search" onChange={e => setInput(e.target.value)} defaultValue="canyon"/>
            <Button onClick={() => getPhotos()}>Search</Button>
            <br></br>
            {posts && <ImageList images={posts} />}
        </Container>
    );
}

const ImageList = (props) => {
    // console.log(props.images);
    const images = props.images.map( (image) => {
        return <ImageCard key={image.id} image={image} />;
    })
    return <div className='image-list'>{images}</div>;
}

const ImageCard = (props) => {
    const imageRef = React.createRef();
    const [spans, setSpans] = useState(0);
    useEffect(() => {
        imageRef.current.addEventListener("load", changeSpans);
    })
    const changeSpans = () => {
        const height = imageRef.current.clientHeight;
        const s = Math.ceil(height/10);
        setSpans(s);
    }
    return (
        <div style={{gridRowEnd: `span ${spans}`}}>
            <img
                ref={imageRef}
                src={props.image.urls.small}
                alt={props.image.description}
            />
        </div>
    )
}

export default Blog;