import React from "react";
import shopData from "./ShopData";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShopCard from './ShopCard';
import Paper from '@material-ui/core/Paper';


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
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState();

    const [cart, setCart] = React.useState([]);

    const handleAdd = (id) => {
        setSelectedItem(id);
        setCart(selectedItem);
    }

//mapping through the shopping data 
//putting the fields into different parts of a MUI card
//wrapping it in a grid  
    return(           
        <div className={classes.root}>
            <Grid container spacing={1} justify="center"> 
                {shopData && shopData.map((item, index) => <div> <Paper className={classes.paper}> <ShopCard id={index} info={item}/> <div><br></br></div><Button variant="contained" onClick={() => handleAdd(item.title)}>Add to Cart</Button></Paper><br></br></div>)}
            </Grid>
            <br></br>
            <div>
                <h2>Cart = {cart} </h2>
            </div>  
        </div>     
    );  

}