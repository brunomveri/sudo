import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import ProfileAvatar from './ProfileAvatar';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PersonPinCircleOutlinedIcon from '@material-ui/icons/PersonPinCircleOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined';


const useStyles = makeStyles({
  root: {
    top: 65,
    cursor: "pointer"
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto',
  },
  
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       <ProfileAvatar className="profileAvatar" />
            <Typography variant="h6">
              <h5 className="LoggedInUser">John Smith</h5>
            </Typography>
            <List>
          <Divider />
          <ListItem button key={"Location: Vancouver"}>
            <ListItemIcon><PersonPinCircleOutlinedIcon /></ListItemIcon>
              <p className={classes.test}>Vancouver</p>
          </ListItem>
          <Divider />
          <ListItem button key={"Settings"}>
            <ListItemIcon><SettingsOutlinedIcon /></ListItemIcon>
            <p className={classes.test}>Settings</p>
          </ListItem>
          <Divider />
          <ListItem button key={"My Cities"}>
            <ListItemIcon><LocationCityOutlinedIcon /></ListItemIcon>
            <p className={classes.test}>My Cities</p>
          </ListItem>
        </List>
        <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
            <MenuOutlinedIcon className="iconStyle" onClick={state.left === false ? toggleDrawer(anchor, true) : toggleDrawer(anchor, false)}/>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
