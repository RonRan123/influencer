import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import ForumIcon from '@material-ui/icons/Forum';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import{
    IconButton,
    Button,
    Drawer,
    List,
    Divider
} from '@material-ui/core'
// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

/**
 * Dropdown navigation drawer that appears when the screen width is under 700px
 * This has the same navigation functionality as the HomeNavbar but is mobile friendly
 * @returns 
 */
export default function NavigationDrawer() {
//   const classes = useStyles();
  const [open, setOpen] = useState(false)
  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open=>!open)
  };

  const list = (anchor) => (
    <div
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        <ListItem style={{height:"80px",backgroundColor:"#f7f1f0"}} button>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText primary={"Home"} />
        </ListItem>
        
        <ListItem style={{height:"80px",backgroundColor:"#f7f1f0"}} button>
            <ListItemIcon><BookIcon/></ListItemIcon>
            <ListItemText primary={"Blog"} />
        </ListItem>
        
        <ListItem style={{height:"80px",backgroundColor:"#f7f1f0"}} button>
            <ListItemIcon><ForumIcon/></ListItemIcon>
            <ListItemText primary={"Forum"} />
        </ListItem>
        
        <ListItem style={{height:"80px",backgroundColor:"#f7f1f0"}} button>
            <ListItemIcon><LocalMallIcon/></ListItemIcon>
            <ListItemText primary={"Shop"} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
        <IconButton onClick={toggleDrawer()}>
            <MenuIcon style={{fontSize:"40px"}}/>
        </IconButton>
        <React.Fragment key={"top"}>
          <Drawer anchor={"top"} open={open} onClose={toggleDrawer()}>
            {list("top")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}