import React, {useEffect} from "react";
import shopData from "./ShopData";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShopCard from './ShopCard';
import Paper from '@material-ui/core/Paper';
import './shop-page.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary, // change to CSS
    alignItems: 'center',

  },
}));
export default function ShopItems(){
    const [products, setProducts] = React.useState();
    const classes = useStyles();
    const [selectedItem, setSelectedItem] = React.useState();

    
    const [cart1, setCart1] = React.useState();
    const handleAdd = (id) => {
        setSelectedItem(id);
        addProducts(id);
        
    }

    const getProducts = async () => {
        fetch('http://localhost:8080/products/get')
        .then(async (res) => {
            const results = await res.json();
            setProducts(results);
        })
    };

    const addProducts = async (data) => {
        fetch('http://localhost:8080/cart/add', 
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                productID: data
            }),
        })
        .then(res => res.json());
    }




    const getCart = async () => {
        fetch('http://localhost:8080/cart/get')
        .then(async (res) => {
            const results = await res.json();
            setCart1(results);
            
        })  
    };

   useEffect( () => {
       getProducts();
       getCart();
   }, [])
//mapping through the shopping data 
//putting the fields into different parts of a MUI card
//wrapping it in a grid  
    return( 
        <div className = 'background'>         
        <div className={classes.root}>
            <Grid container spacing={1} justify="center"> 
                {products && products.map((item, index) => <div> <Paper className={classes.paper}> <ShopCard id={index} info={item}/> <div><br></br></div><Button className='cart-button' variant='contained' onClick={() => handleAdd(item.doc_id)}>Add to Cart</Button></Paper><br></br></div>)}
            </Grid>
            <br></br>
            <div>
                <h2>Cart = {cart1 && cart1.map((product, index) => <div>{product.productID}</div> )} </h2>
            </div>  
        </div>  
        </div>    
    );  

}