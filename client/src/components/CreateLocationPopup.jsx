import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Button, Card, Avatar } from '@material-ui/core';
import Basketball from '@material-ui/icons/SportsBasketball';
import Bike from '@material-ui/icons/DirectionsBike';
import Running from '@material-ui/icons/DirectionsRun';
import Tennis from '@material-ui/icons/SportsTennisOutlined';
import Calisthenics from '@material-ui/icons/FitnessCenterOutlined';
import Volleyball from '@material-ui/icons/SportsVolleyballOutlined';
import Hiking from '@material-ui/icons/FilterHdrOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    width: '250px',
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
    'margin-bottom': '10px',
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
    width: '100%',
    fontFamily: 'inherit',
    marginBottom: '7px'
  },
  inputBox: {
    width: '100%',
    marginBottom: '10px'
  },
  button: {
    backgroundColor: '#72acb1',
    '&:hover': {
      backgroundColor: '#72acb1',
      filter: 'brightness(0.7)',
    }
  },
}));

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
        <Typography gutterBottom variant="h5" align="center">
          New Location
        </Typography>
        <input
          className={classes.inputBox}
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
          ref={titleInput}
        />
        <textarea
          className={classes.textArea}
          rows="4"
          placeholder="Description"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <input
          className={classes.inputBox}
          placeholder="Image URL"
          value={image}
          onChange={event => setImage(event.target.value)}
        />
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
          className={classes.button}
          disableElevation
          fullWidth
          onClick={() => saveMarker(id, title, description, image, activity, position)}
        >
          Save
        </Button >
      </form>
    </Card>
  );

}
