import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Navbar from './Navbar';
import PersistentDrawerLeft from "./PersistentDrawerLeft";
import Map from './Map'
// import ControlledOpenSelect from './ControlledOpenSelect'

const App = () => {

  const [state, setState] = useState({
    locations: [],
    mapPosition: [49.2827, -123.1207]
  })
  
  useEffect(() => {
    axios.get('/api/locations')
    .then((response) => {
      setState({
        ...state,
        locations: response.data.message
      });
    }).catch(err => console.log(err));
  }, []);
  
  return(
    <div>
      {/* <Navbar /> */}
      <PersistentDrawerLeft />  
      <Map
        locations={state.locations}
        mapPosition={state.mapPosition}
      />
    </div>
  )

};

export default App;
