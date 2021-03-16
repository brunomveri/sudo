import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Basketball from '@material-ui/icons/SportsBasketball';
import Bike from '@material-ui/icons/DirectionsBike';
import Running from '@material-ui/icons/DirectionsRun';
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
    return !["all", "basketball", "bike", "running", null].includes(selected)
  };
  return (
    <div className={classes.root}>
      <Avatar className={selected === "all" ? classes.selected : classes.green}>
        <PublicOutlinedIcon onClick={() => setSelected("all")} title="all" />
      </Avatar>
      <Avatar className={selected === "basketball" ? classes.selected : classes.green}>
        <Basketball onClick={() => setSelected("basketball")} />
      </Avatar>
      <Avatar className={selected === "bike" ? classes.selected : classes.green}>
        <Bike onClick={() => setSelected("bike")} />
      </Avatar>
      <Avatar className={selected === "running" ? classes.selected : classes.green}>
        <Running onClick={() => setSelected("running")} />
      </Avatar>
      <Avatar className={isMenuSelected() ? classes.selected : classes.green}>
        <LongMenu setSelected={setSelected} />
      </Avatar>
      
    </div>
  );
}

// c6f1e7
// 72acb1
// 59606d