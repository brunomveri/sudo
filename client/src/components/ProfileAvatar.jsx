import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '35px',
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    height: '75px',
    width: '75px',
    border: '2px solid #3E434C'
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Profile Image"
        className={classes.avatar}
        src={require('../images/profile_placeholder.jpeg')}
      />
    </div>
  );
}
