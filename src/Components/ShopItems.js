import React from "react";
import shopData from "./ShopData";
import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ShopCard from './ShopCard';
import ShopDialog from './ShopDialog';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      flexGrow: 1,
    },
    media: {
      height: 300,
    },
    paper: {
        height: 140,
        width: 100,
    },
  });
export default function ShopItems(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
        setSelectedItem();
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = (id) => {
        console.log(id);
    }

//mapping through the shopping data 
//putting the fields into different parts of a MUI card
//wrapping it in a grid  
    return(           
        
                    <Grid container> 
                        {shopData && shopData.map(item => <div><ShopCard id={item.title} info={item} /> <Button onClick={handleAdd(item.title)}>Add to Cart</Button></div>)}
                        
                    </Grid>
                               
    );

    

}