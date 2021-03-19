import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DarkModeToggle from "dark-mode-toggle-animation";

const useStyles = makeStyles(theme => ({
  svgParent: {
    display: 'flex'
  }
}));

export default function CustomizedSwitches(props) {

  const [darkMode, setDarkMode] = useState(false);
  const change = () => setDarkMode((prev) => !prev);

  const classes = useStyles();  

  return (
    <FormGroup>
      <div
        style={{
          backgroundColor: '#3E434C',
          transition: "background-color 1s ease",
        }}
      >
        <FormControlLabel
          control={
            <DarkModeToggle
              className={classes.svgParent}
              checked={props.darkMode} 
              onClick={() => {
                props.toggleDarkMode()
                change()
              }}
              mode={darkMode ? "sun" : "moon"}
              width="40px"
              moonColor="#ffffff"
              sunColor="#ffffff"
              animationDuration={1}
            />
          }
        />
      </div>
    </FormGroup>
  );

}

