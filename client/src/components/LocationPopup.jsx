import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
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

  const { title, image, description } = props;
  const classes = useStyles();

  const [favourited, setFavourited] = useState();

  const toggleFavourited = () => {
    setFavourited(!favourited);
    console.log(favourited);
  }

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
          onClick={() => toggleFavourited()}
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
