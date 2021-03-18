import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Basketball from '@material-ui/icons/SportsBasketball';
import Bike from '@material-ui/icons/DirectionsBike';
import Running from '@material-ui/icons/DirectionsRun';
import Tennis from '@material-ui/icons/SportsTennisOutlined';
import Calisthenics from '@material-ui/icons/FitnessCenterOutlined';
import Volleyball from '@material-ui/icons/SportsVolleyballOutlined';
import Yoga from '@material-ui/icons/AccessibilityNewOutlined';
import Hiking from '@material-ui/icons/FilterHdrOutlined';
import LongMenu from './LongMenu';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: '#fff',
    backgroundColor: "#59606d",
  },
  selected: {
    color: '#fff',
    backgroundColor: '#72acb1'
  }
}));

export default function IconAvatars(props) {
  const { activitySelected, setActivity } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar 
        className={activitySelected === 0 ? classes.selected : classes.green}
        onClick={() => setActivity(0)}
        id="0"
      >
        <PublicOutlinedIcon title="all" />
      </Avatar>
      <Avatar 
         className={activitySelected === 2 ? classes.selected : classes.green}
         onClick={() => setActivity(2)}
        id="2"
      >
        <Basketball />
      </Avatar>
      <Avatar 
        className={activitySelected === 3 ? classes.selected : classes.green}
        onClick={() => setActivity(3)}
        id="3"
      >
        <Bike />
      </Avatar>
      <Avatar 
        className={activitySelected === 1 ? classes.selected : classes.green}
        onClick={() => setActivity(1)}
        id="1"
      >
        <Running />
      </Avatar>
      <Avatar 
        className={activitySelected === 5 ? classes.selected : classes.green}
        onClick={() => setActivity(5)}
        id="5"
      >
        <Tennis />
      </Avatar>
      <Avatar 
        className={activitySelected === 4 ? classes.selected : classes.green}
        onClick={() => setActivity(4)}
        id="4"
      >
        <Calisthenics />
      </Avatar>
      <Avatar 
        className={activitySelected === 6 ? classes.selected : classes.green}
        onClick={() => setActivity(6)}
        id="6"
      >
        <Volleyball />
      </Avatar>
      <Avatar 
        className={activitySelected === 7 ? classes.selected : classes.green}
        onClick={() => setActivity(7)}
        id="7"
      >
        <Hiking />
      </Avatar>
    </div>
  );
}

// c6f1e7
// 72acb1
// 59606d

// Long Menu:
{/* <Avatar className={isMenuSelected() ? classes.selected : classes.green}>
  <LongMenu setSelected={setSelected} />
</Avatar> */}