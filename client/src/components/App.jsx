import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PersistentDrawerLeft from "./PersistentDrawerLeft";
import MapView from './MapView'

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
    <div className="content">
      <PersistentDrawerLeft />  
      <MapView
        locations={state.locations}
        mapPosition={state.mapPosition}
      />
    </div>
  )

};

export default App;
