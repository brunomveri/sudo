import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DarkModeToggle from "dark-mode-toggle-animation";

// const PurpleSwitch = withStyles({
//   switchBase: {
//     color: "#72acb1",
//     '&$checked': {
//       color: "#72acb1",
//     },
//     '&$checked + $track': {
//       backgroundColor: "#72acb1",
//     },
//   },
//   checked: {},
//   track: {},
// })(Switch);


export default function CustomizedSwitches(props) {
  // const [darkMode, setDarkMode] = React.useState(false);

  // const handleChange = () => {
  //   setDarkMode(!darkMode);
  // };

  const [darkMode, setDarkMode] = useState(false);
  const change = () => setDarkMode((prev) => !prev);


  return (
    <FormGroup>
      <div
      style={{
        backgroundColor: '#3E434C',
        transition: "background-color 1s ease",
      }}
      >
        <FormControlLabel
          control={<DarkModeToggle 
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
          />}
        />
      </div>
    </FormGroup>
  );
}

