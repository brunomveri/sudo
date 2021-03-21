import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#72acb1',
    '&:hover': {
      backgroundColor: '#72acb1',
      filter: 'brightness(0.7)',
    }
  }
}));

export default function CustomizedButtons() {
 
  const classes = useStyles();

  return (
    <div>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        disableElevation
      >
        Logout
      </Button>
    </div>
  );

}
