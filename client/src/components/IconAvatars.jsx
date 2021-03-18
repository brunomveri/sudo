import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Basketball from '@material-ui/icons/SportsBasketball';
import Bike from '@material-ui/icons/DirectionsBike';
import Running from '@material-ui/icons/DirectionsRun';
import Soccer from '@material-ui/icons/SportsSoccerOutlined';
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

export default function IconAvatars() {
  const classes = useStyles();
  const [selected, setSelected] = useState("all");
  const isMenuSelected = () => {
    return !["all", "basketball", "bike", "running", "soccer", "calisthenics", "volleyball", "yoga", "hiking", null].includes(selected)
  };
  return (
    <div className={classes.root}>
      <Avatar className={selected === "all" ? classes.selected : classes.green} onClick={() => setSelected("all")}>
        <PublicOutlinedIcon title="all" />
      </Avatar>
      <Avatar className={selected === "basketball" ? classes.selected : classes.green} onClick={() => setSelected("basketball")}>
        <Basketball />
      </Avatar>
      <Avatar className={selected === "bike" ? classes.selected : classes.green} onClick={() => setSelected("bike")}>
        <Bike />
      </Avatar>
      <Avatar className={selected === "running" ? classes.selected : classes.green} onClick={() => setSelected("running")}>
        <Running />
      </Avatar>
      <Avatar className={selected === "soccer" ? classes.selected : classes.green} onClick={() => setSelected("soccer")}>
        <Soccer />
      </Avatar>
      <Avatar className={selected === "calisthenics" ? classes.selected : classes.green} onClick={() => setSelected("calisthenics")}>
        <Calisthenics />
      </Avatar>
      <Avatar className={selected === "volleyball" ? classes.selected : classes.green} onClick={() => setSelected("volleyball")}>
        <Volleyball />
      </Avatar>
      <Avatar className={selected === "yoga" ? classes.selected : classes.green} onClick={() => setSelected("yoga")}>
        <Yoga />
      </Avatar>
      <Avatar className={selected === "hiking" ? classes.selected : classes.green} onClick={() => setSelected("hiking")}>
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