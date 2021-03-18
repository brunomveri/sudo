import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PersistentDrawerLeft from "./PersistentDrawerLeft";
import MapView from './MapView'

const App = () => {

  const [state, setState] = useState({
    locations: [],
    mapPosition: [49.2827, -123.1207],
    darkMode: false
  })
  
  useEffect(() => {
    axios.get('/api/locations')
    .then((response) => {
      setState({
        ...state,
        locations: response.data
      });
    }).catch(err => console.log(err));
  }, []);

  const toggleDarkMode = function() {
    setState({
      ...state,
      darkMode: !state.darkMode
    });
    console.log("HERE: ", state.darkMode);
  };
  
  return(
    <div>
      <PersistentDrawerLeft 
      darkMode={state.darkMode}
      toggleDarkMode={toggleDarkMode}
      />  
      <MapView
        locations={state.locations}
        mapPosition={state.mapPosition}
        darkMode={state.darkMode}
      />
    </div>
  )

};

export default App;
