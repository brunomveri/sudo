import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { 
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton
 } from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import DirectionsIcon from '@material-ui/icons/Directions';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    width: '300px',
  },
  media: {
    height: '140px',
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

const openDirections = (position) => {
  
  const [latitude, longitude] = position;

  const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=walking`;

  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;

}

export default function LocationPopup(props) {

  const {
    id,
    position,
    title, 
    image, 
    description, 
    favourited, 
    toggleFavourited,
    deleteLocation,
    addSnackbar
  } = props;
  
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image ? image : require('../images/location_placeholder.png')}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.icons}>
        <IconButton
          aria-label="add to favorites"
          color={favourited ? "secondary" : "default"}
          onClick={() => toggleFavourited(id)}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton
          aria-label="share"
          onClick={() => addSnackbar('share')}  
        >
          <ShareIcon />
        </IconButton>
        <IconButton
          aria-label="directions"
          onClick={() => openDirections(position)}  
        >
          <DirectionsIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => deleteLocation(id)}  
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );

}
