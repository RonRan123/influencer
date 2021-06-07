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


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 300,
    },
  });
export default function ShopItems(){
    const classes = useStyles();
    
    return(
        <div>
            <Grid container>
            {shopData.map((item) => {
                return (
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image = {item.image}
                            title={item.title}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            <Typography variant="h6" color="textSecondary" component="p">
                                {item.description}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography size="body2" color="primary" component="h5">
                                {item.price}
                            </Typography>
                        </CardActions>
                    </Card>
                );
            })}
            </Grid>
        </div>
    )

}