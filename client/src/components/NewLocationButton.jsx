import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import AddLocationIcon from '@material-ui/icons/AddLocation';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    right: '40px',
    bottom: '40px',
    width: '60px',
    height: '60px',
    'background-color': '#fff',
    '&:hover': {
      'background-color': '#f4f4f4'
    }
  },
}));

export default function NewLocationButton(props) {

  const classes = useStyles();

  return (
    <Button className={'leaflet-bar leaflet-control ' + classes.root}>
      <AddLocationIcon />
    </Button>
  )

};