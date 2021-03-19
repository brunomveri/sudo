import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Save from '@material-ui/icons/SaveAltOutlined';

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
          <Typography variant="body2" color="textSecondary" component="p">
            {image}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Save />
        </CardContent>
      </CardActionArea>
    </Card>
  );

}
