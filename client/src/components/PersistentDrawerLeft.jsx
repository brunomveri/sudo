import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Avatar from '@material-ui/core/Avatar';
import IconAvatars from './IconAvatars';
import { green, pink } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DarkSwitch from './DarkModeSwitch';
import LogoutButton from './LogoutButton'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    height: '65px',
    backgroundColor: "#3E434C",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  pinkIcon: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(0.5)'
    }
  },
  defaultIcon: {
    color: '#fff',
    backgroundColor: "#59606d",
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(0.5)'
    }
  },
  selected: {
    color: '#fff',
    backgroundColor: '#72acb1',
    cursor: 'pointer'
  }
}));

export default function PersistentDrawerLeft(props) {

  const {
    favouritesOnly,
    toggleFavouritesOnly,
    darkMode,
    toggleDarkMode,
    activitySelected,
    setActivity
  } = props;

  const classes = useStyles();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            // onClick={handleDrawerOpen}
            onClick={showSidebar}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <img src={require("../images/logo_transparent_v3.png")} height="40px" width="40px" alt="Sudo"></img>
          <Typography variant="h6">
            Sudo
          </Typography>
          <div className="icons">
            <IconAvatars 
              className="IconAvatarFavourite" 
              activitySelected={activitySelected}
              setActivity={setActivity}
            />
            <Avatar
              className={favouritesOnly ? classes.pinkIcon : classes.defaultIcon}
              onClick={() => toggleFavouritesOnly()}  
            >
              <FavoriteIcon />
            </Avatar>
          </div>
          <DarkSwitch
            className="darkSwitch"
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode} />
          <LogoutButton />
        </Toolbar>
      </AppBar>
      {/* New sidebar */}
      {/* <div className='sidebarDiv'> */}
        {/* <nav className={sidebar ? 'nav-menu' : 'nav-menu-active'}> */}
        <nav className={sidebar && 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
            <h1>Now we have a sidebar!</h1>
            </li>
          </ul>
        </nav>
      {/* </div> */}
    </div>
  );
}
