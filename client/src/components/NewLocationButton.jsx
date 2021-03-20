import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import AddLocationIcon from '@material-ui/icons/AddLocation';

const useStyles = makeStyles(theme => ({
  root: {
    'z-index': '1000',
    'box-sizing': 'content-box',
    'border-radius': '2px',
    position: 'fixed',
    right: '10px',
    bottom: '26px',
    border: '2px solid rgba(0,0,0,0.2)',
  },
  button: {
    width: '60px',
    height: '60px',
    'background-color': '#fff',
    '&:hover': {
      'background-color': '#f4f4f4'
    }
  },
  locationIcon: {
    width: '36px',
    height: '36px',
  },
  markingLocationIcon: {
    width: '36px',
    height: '36px',
    fill: '#2074b6'
  }
}));

export default function NewLocationButton(props) {

  const { readyToMark } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        disableRipple
      >
        <AddLocationIcon
          className={readyToMark ? classes.markingLocationIcon : classes.locationIcon}
        />
      </Button>
    </div>
  )

};