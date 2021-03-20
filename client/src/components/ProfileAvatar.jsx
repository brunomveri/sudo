import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="data:image/png;base64,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" />
    </div>
  );
}