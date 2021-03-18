import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PersistentDrawerLeft from "./PersistentDrawerLeft";
import MapView from './MapView'

const App = () => {

  const user_id = 1;

  const [state, setState] = useState({
    locations: [],
    activities: [],
    mapPosition: [49.2827, -123.1207]
  })
  
  useEffect(() => {

    const locationsReq = axios.get('/api/locations');
    const activitiesReq = axios.get('/api/activities');
    const favouritesReq = axios.get(`/api/users/${user_id}/favourites`);
    
    Promise.all([locationsReq, activitiesReq, favouritesReq])
      .then((responses) => {
    
      const [locationsRes, activitesRes, favouritesRes] = responses;
  
      const locations = locationsRes.data;
      const activities = activitesRes.data;
      const favourites = favouritesRes.data;

      const favouriteLocations = favourites.map(fave => fave.location_id);

      locations.forEach(location => {
        location.favourited = favouriteLocations.includes(location.id)
        location.toggleFavourited = toggleFavourited
      });
    
      setState(current => ({
        ...current,
        locations,
        activities
      }));

  })

  }, []);

  const toggleFavourited = (id) => {

    setState(current => {
  
      const location = {
        ...current.locations[id - 1],
        favourited: !current.locations[id - 1].favourited
      };

      const locations = current.locations;
      locations[id - 1] = location;

      return ({
        ...current, 
        locations
      });

    })
  
  }
  
  return(
    <div>
      <PersistentDrawerLeft />  
      <MapView
        locations={state.locations}
        mapPosition={state.mapPosition}
      />
    </div>
  )

};

export default App;
