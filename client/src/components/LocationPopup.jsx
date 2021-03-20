import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { 
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton
 } from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
  root: {
    maxWidth: '345px',
  },
  media: {
    height: '140px',
  },
});

export default function LocationPopup(props) {

  const { id, title, image, description, favourited, toggleFavourited } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
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
      </CardActionArea>
      <CardActions>
        <IconButton
          aria-label="add to favorites"
          color={favourited ? "secondary" : "default"}
          onClick={() => toggleFavourited(id)}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );

}
