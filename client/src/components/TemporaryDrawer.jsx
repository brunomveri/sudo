import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import ProfileAvatar from './ProfileAvatar';

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PersonPinCircleOutlinedIcon from '@material-ui/icons/PersonPinCircleOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import AccessibilityNewOutlinedIcon from '@material-ui/icons/AccessibilityNewOutlined';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';

const useStyles = makeStyles({
  root: {
    top: 65,
    cursor: "pointer"
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  porfileAvatar: {
    marginTop: '10px',
    width: '80px',
    height: '80px'
  }
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
       <ProfileAvatar className={classes.profileAvatar} />
            <Typography variant="h6">
              <h5 className="LoggedInUser">Steve Nash</h5>
            </Typography>
            <List>
          <Divider />
          <ListItem button key="location">
            <ListItemIcon><PersonPinCircleOutlinedIcon /></ListItemIcon>
              <p className={classes.test}>Vancouver</p>
          </ListItem>
          <Divider />
          <ListItem button key="activities">
            <ListItemIcon><AccessibilityNewOutlinedIcon /></ListItemIcon>
            <p className={classes.test}>My Activities</p>
          </ListItem>
          <Divider />
          <ListItem button key="friends">
            <ListItemIcon><GroupOutlinedIcon /></ListItemIcon>
            <p className={classes.test}>Friends</p>
          </ListItem>
          <Divider />
          <ListItem button key="events">
            <ListItemIcon><EventAvailableOutlinedIcon /></ListItemIcon>
            <p className={classes.test}>Events</p>
          </ListItem>
          <Divider />
          <ListItem button key="upgrade">
            <ListItemIcon><EmojiEventsOutlinedIcon /></ListItemIcon>
            <p className={classes.test}>Upgrade to Pro</p>
          </ListItem>
          <Divider />
          <ListItem button key="settings">
            <ListItemIcon><SettingsOutlinedIcon /></ListItemIcon>
            <p className={classes.test}>Settings</p>
          </ListItem>
          <Divider />
        </List>
    </div>
  );

  return (
    <div className={classes.root}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuOutlinedIcon onClick={state.left === false ? toggleDrawer(anchor, true) : toggleDrawer(anchor, false)}/>
          <Drawer
            anchor={anchor}
            BackdropProps={{ invisible: true }}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
  
}
