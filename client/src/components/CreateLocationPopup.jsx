import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import Avatar from '@material-ui/core/Avatar';
import Basketball from '@material-ui/icons/SportsBasketball';
import Bike from '@material-ui/icons/DirectionsBike';
import Running from '@material-ui/icons/DirectionsRun';
import Tennis from '@material-ui/icons/SportsTennisOutlined';
import Calisthenics from '@material-ui/icons/FitnessCenterOutlined';
import Volleyball from '@material-ui/icons/SportsVolleyballOutlined';
import Hiking from '@material-ui/icons/FilterHdrOutlined';

const useStyles = makeStyles({
  root: {
    maxWidth: '345px',
    padding: '20px'
  },
  default: {
    color: '#fff',
    backgroundColor: "#59606d",
    cursor: 'pointer',
    '&:hover': {
        filter: 'brightness(0.7)'
    }
  },
  activityIcons: {
    display: 'flex',
    width: '100%',
    'justify-content': 'space-between',
    'margin-bottom': '0.5em',
    '& > *': {
      width: '25px',
      height: '25px',
      '& > *': {
        width: '15px',
        height: '15px',
      }
    }
  },
  selected: {
    color: '#fff',
    backgroundColor: '#72acb1',
    cursor: 'pointer'
  },
  textArea: {
    resize: 'none',
    width: '100%'
  }
});

export default function LocationPopup(props) {

  const { position, saveMarker, id } = props;
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [activity, setActivity] = useState("");

  // Focus on the title input field on component mount
  const titleInput = useRef(null);
  useEffect(() => {
    titleInput.current.focus();
  }, []);

  return (
    <Card className={classes.root}>
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <Typography gutterBottom variant="subtitle1">
          Save a new location!
        </Typography>
        <Typography gutterBottom variant="h5">
          <input
            placeholder="Title"
            value={title}
            onChange={event => setTitle(event.target.value)}
            ref={titleInput}
          />
        </Typography>
        <Typography gutterBottom variant="h5">
          <textarea
            className={classes.textArea}
            rows="4"
            placeholder="Description"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </Typography>
        <Typography gutterBottom variant="h5">
          <input
            placeholder="Image URL"
            value={image}
            onChange={event => setImage(event.target.value)}
          />
        </Typography>
        <div className={classes.activityIcons}>
          <Avatar 
            className={activity === 1 ? classes.selected : classes.default}
            onClick={() => setActivity(1)}
            id="1"
          >
            <Running />
          </Avatar>
          <Avatar 
            className={activity === 2 ? classes.selected : classes.default}
            onClick={() => setActivity(2)}
            id="2"
          >
            <Basketball />
          </Avatar>
          <Avatar 
            className={activity === 3 ? classes.selected : classes.default}
            onClick={() => setActivity(3)}
            id="3"
          >
            <Bike />
          </Avatar>
          <Avatar 
            className={activity === 4 ? classes.selected : classes.default}
            onClick={() => setActivity(4)}
            id="4"
          >
            <Calisthenics />
          </Avatar>
          <Avatar 
            className={activity === 5 ? classes.selected : classes.default}
            onClick={() => setActivity(5)}
            id="5"
          >
            <Tennis />
          </Avatar>
          <Avatar 
            className={activity === 6 ? classes.selected : classes.default}
            onClick={() => setActivity(6)}
            id="6"
          >
            <Volleyball />
          </Avatar>
          <Avatar 
            className={activity === 7 ? classes.selected : classes.default}
            onClick={() => setActivity(7)}
            id="7"
          >
            <Hiking />
          </Avatar>
        </div>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          onClick={() => saveMarker(id, title, description, image, activity, position)}
        >
          Save!
        </Button >
      </form>
    </Card>
  );

}
