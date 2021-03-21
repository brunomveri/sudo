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

export default function LocationPopup(props) {

  const {
    id, 
    title, 
    image, 
    description, 
    favourited, 
    toggleFavourited, 
    addSnackbar
  } = props;
  
  const classes = useStyles();

  console.log(image);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image ? image : require('../images/placeholder.png')}
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
          onClick={() => addSnackbar('share')}  
        >
          <DirectionsIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => addSnackbar('share')}  
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );

}
