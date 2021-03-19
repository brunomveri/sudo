import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import Basketball from '@material-ui/icons/SportsBasketball';
import Bike from '@material-ui/icons/DirectionsBike';
import Running from '@material-ui/icons/DirectionsRun';
import Tennis from '@material-ui/icons/SportsTennisOutlined';
import Calisthenics from '@material-ui/icons/FitnessCenterOutlined';
import Volleyball from '@material-ui/icons/SportsVolleyballOutlined';
import Hiking from '@material-ui/icons/FilterHdrOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  default: {
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

export default function IconAvatars(props) {

  const { activitySelected, setActivity } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar 
        className={activitySelected === 0 ? classes.selected : classes.default}
        onClick={() => setActivity(0)}
        id="0"
      >
        <PublicOutlinedIcon title="all" />
      </Avatar>
      <Avatar 
        className={activitySelected === 1 ? classes.selected : classes.default}
        onClick={() => setActivity(1)}
        id="1"
      >
        <Running />
      </Avatar>
      <Avatar 
         className={activitySelected === 2 ? classes.selected : classes.default}
         onClick={() => setActivity(2)}
        id="2"
      >
        <Basketball />
      </Avatar>
      <Avatar 
        className={activitySelected === 3 ? classes.selected : classes.default}
        onClick={() => setActivity(3)}
        id="3"
      >
        <Bike />
      </Avatar>
      <Avatar 
        className={activitySelected === 4 ? classes.selected : classes.default}
        onClick={() => setActivity(4)}
        id="4"
      >
        <Calisthenics />
      </Avatar>
      <Avatar 
        className={activitySelected === 5 ? classes.selected : classes.default}
        onClick={() => setActivity(5)}
        id="5"
      >
        <Tennis />
      </Avatar>
      <Avatar 
        className={activitySelected === 6 ? classes.selected : classes.default}
        onClick={() => setActivity(6)}
        id="6"
      >
        <Volleyball />
      </Avatar>
      <Avatar 
        className={activitySelected === 7 ? classes.selected : classes.default}
        onClick={() => setActivity(7)}
        id="7"
      >
        <Hiking />
      </Avatar>
    </div>
  );
  
}
