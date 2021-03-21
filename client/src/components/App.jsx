import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import PersistentDrawerLeft from "./PersistentDrawerLeft";
import MapView from './MapView'

const App = () => {

  const user_id = 1;

  const [state, setState] = useState({
    locations: [],
    activities: [],
    mapPosition: [49.2827, -123.1207],
    darkMode: false,
    favouritesOnly: false,
    activitySelected: 0,
    markers: [],
    readyToMark: false,
    snackbar: {
      open: false,
      message: '',
      severity: undefined
    }
  });
  
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

  const toggleFavourited = id => {

    setState(current => {

      const index = current.locations.findIndex(loc => loc.id === id);

      const currentlyFavourite = current.locations[index].favourited;
  
      const location = {
        ...current.locations[index],
        favourited: !currentlyFavourite
      };

      const locations = current.locations;
      locations[index] = location;

      currentlyFavourite
        ? axios.delete(`/api/users/${user_id}/favourites/${id}`)
        : axios.post(`/api/users/${user_id}/favourites`, {location_id: id})

      return ({
        ...current, 
        locations
      })

    });

  };

  const toggleFavouritesOnly = () => {
    setState({
      ...state,
      favouritesOnly: !state.favouritesOnly
    });
  };

  const toggleDarkMode = function() {
    setState({
      ...state,
      darkMode: !state.darkMode
    });
  };
  
  const setActivity = function(id) {
    setState({
      ...state,
      activitySelected: id
    });
  };
  
  const setReadyToMark = () => {
    setState({
      ...state,
      readyToMark: !state.readyToMark
    })
  }

  const addMarker = (e) => {
    if (state.readyToMark === true) {
      const markers = [ ...state.markers ];
      markers.push(e.latlng)
      setState({
        ...state,
        markers,
        readyToMark: false
      });
    }
  }

  // Validate the form input, save to db if sound
  const saveMarker = (id, title, description, image, activity, position) => {

    if (title === "") {
      addSnackbar('noTitle');
      return;
    }
    if (activity === "") {
      addSnackbar('noActivity');
      return;
    }

    const newLocation = {
      title,
      description,
      image,
      activity_id: activity,
      latitude: position.lat,
      longitude: position.lng,
      user_id
    }

    axios.post(`/api/locations`, newLocation)
    .then(response => {
      
      // remove the marker with the form
      const markers = [ ...state.markers ]
      markers.splice(id, 1);

      // get the new location data from the response + add it to locations
      const location = response.data;
      location.favourited = true;
      location.toggleFavourited = toggleFavourited;

      const locations = [ ...state.locations ];
      locations.push(location)
      
      setState({ ...state, markers, locations });

      // set the success snackbar
      addSnackbar('save');
      
    }).catch(() => addSnackbar('saveError'));

  };

  const deleteLocation = (id) => {

    // delete the location in the db
    axios.delete(`/api/locations/${id}`)
    .then(() => {

      // find the location's index in locations + remove it
      const locations = [ ...state.locations ]
      const index = locations.findIndex(loc => loc.id === id);
      locations.splice(index, 1);

      setState({ ...state, locations });

      // set the success snackbar
      addSnackbar('delete');

    })

  };

  const addSnackbar = (type) => {

    const snackbar = {open: true};

    switch (type) {
      case 'share':
        snackbar.message = 'Link copied to clipboard!';
        snackbar.severity = 'success';
        break;
      case 'save':
        snackbar.message = 'Location saved to map!';
        snackbar.severity = 'success';
        break;   
      case 'delete':
        snackbar.message = 'Location deleted!';
        snackbar.severity = 'success';
        break;
      case 'saveError':
        snackbar.message = 'Error saving map!';
        snackbar.severity = 'error';
        break;
      case 'noTitle':
        snackbar.message = 'Title cannot be blank!';
        snackbar.severity = 'error';
        break;
      case 'noActivity':
        snackbar.message = 'You must select an activity type!';
        snackbar.severity = 'error';
        break;
      default:
        break;
    }
    
    setState(current => {
      return { ...current, snackbar }
    });

  };

  return(

    <div className="appContent">
      <div className="activityIcons">
        <PersistentDrawerLeft 
          favouritesOnly={state.favouritesOnly}
          toggleFavouritesOnly={toggleFavouritesOnly}
          darkMode={state.darkMode}
          toggleDarkMode={toggleDarkMode}
          activitySelected={state.activitySelected}
          setActivity={setActivity}
        />  
      </div>
      <MapView
        locations={state.locations}
        mapPosition={state.mapPosition}
        darkMode={state.darkMode}
        favouritesOnly={state.favouritesOnly}
        activitySelected={state.activitySelected}
        markers={state.markers}
        saveMarker={saveMarker}
        addMarker={addMarker}
        readyToMark={state.readyToMark}
        setReadyToMark={setReadyToMark}
        deleteLocation={deleteLocation}
        addSnackbar={addSnackbar}
      />
      <Snackbar
        open={state.snackbar.open}
        autoHideDuration={3000}
        onClose={() => setState({...state, snackbar: {open: false} })}
      >
        <Alert severity={state.snackbar.severity}>
          {state.snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  )

};

export default App;
