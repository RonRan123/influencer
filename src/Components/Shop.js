import React, { useState } from "react";
import shopData from "./ShopData";
import ShopItems from "./ShopItems";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

export default function ShopPage(){
    const [items, setItems] = useState();
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={2}>
            <Paper>
                <ShopItems/>
            </Paper>
        </Grid>
    )
}