import React, {useEffect} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShopCard from './ShopCard';
import Paper from '@material-ui/core/Paper';
import './shop-page.css'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";
import {loadStripe} from '@stripe/stripe-js';




const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx")

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary, // change to CSS
    alignItems: 'center',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  stripeModal: {
    width: 400,
    height: 200,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));
export default function ShopItems(){
    const [products, setProducts] = React.useState();
    const classes = useStyles();
    const [cart1, setCart1] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [openStripe, setOpenStripe] = React.useState(false)

    const handleOpen = () => {
      setOpen(true);
    };
    
    const handleOpenStripe = () => {
        setOpenStripe(true);
    };

    const handleCloseStripe = () => {
        setOpenStripe(false);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const handleAdd = (id1, id2) => {
        addProducts(id1, id2);
        return window.location.reload();
    }

    const getProducts = async () => {
        fetch('http://localhost:8080/products/get')
        .then(async (res) => {
            const results = await res.json();
            setProducts(results);
        })
    };

    const addProducts = async (data1, data2) => {
        fetch('http://localhost:8080/cart/add', 
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                title: data1,
                price: data2
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
            <IconButton color="primary" aria-label="add to shopping cart">   
                <AddShoppingCartIcon onClick={handleOpen}/>
            </IconButton>      
            <div className={classes.root}>
                <Grid container spacing={1} justify="center"> 
                    {products && products.map((item, index) => <div> <Paper className={classes.paper}> <ShopCard id={index} info={item}/> <div><br></br></div><Button className='cart-button' variant='contained' onClick={() => handleAdd(item.title, item.price)}>Add to Cart</Button></Paper><br></br></div>)}
                </Grid>
                <br></br>
                <div>
                
                <Modal
                    aria-labelledby="transition-modal-title"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}>
                    <Fade in={open}>
                    <div className={classes.paperModal}>
                        <h2 id="transition-modal-title">Your Cart: {cart1 && cart1.map((product) => <div>{product.title} - ${product.price}</div> )}</h2>
                        <Button variant = "contained" color = "primary" type="button" onClick={handleOpenStripe}>
                            Click Here To Purchase
                        </Button>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            className={classes.modal}
                            open={openStripe}
                            onClose={handleCloseStripe}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}>
                            <Fade in={openStripe}>
                            <div className={classes.stripeModal}>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                            </div>
                            </Fade>
                        </Modal>
                    </div>
                    </Fade>
                </Modal> 
                </div>  
            </div>  
        </div>  
    );  
}