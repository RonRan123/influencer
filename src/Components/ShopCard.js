import React from 'react';
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
function ShopCard({info}){
    const classes = useStyles();
    
    
    return (
        <Card className = {classes.root}>
            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image = {info.image}
                                title={info.title}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {info.title}
                                </Typography>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    {info.description}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Typography size="body2" color="primary" component="h5">
                                    {info.price}
                                </Typography>
                            </CardActions>
            
        </Card>
    )
}

export default ShopCard;