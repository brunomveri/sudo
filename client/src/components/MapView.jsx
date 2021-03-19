import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import Search from "react-leaflet-search";

import LocateControl from './LocateControl';
import NewLocationButton from './NewLocationButton';
import LocationPopup from "./LocationPopup";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "calc(100vh - 65px)",
    top: '65px'
  }
}));

export default function MapView(props) {

  const { locations, mapPosition, darkMode, favouritesOnly, activitySelected } = props;
  const classes = useStyles();  

  // Map markers for favourited and unfavourited locations
  const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // Attributions and URLs for light and dark maps
  const attributionDark = '© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  const urlDark = "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  const attributionLight = '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  const urlLight = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

  // Filter the dispalyed locations based on activity and favourited status
  const filteredByFavourited = locations.filter(location => {
    return favouritesOnly ? location.favourited : true
  })
  const filteredByActivity = filteredByFavourited.filter(location => {
    return activitySelected === 0 ? true : location.activity_id === activitySelected
  });

  // Turns off autocomplete on the search input after 500ms
  useEffect(() => {
    const timer = setTimeout(() => {
      const searchInput = document.querySelector(".search-control-active > input");
       searchInput.setAttribute('autocomplete', 'off');
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Map
      center={mapPosition} zoom={13} className={classes.root}>
      <TileLayer
        attribution={darkMode ? attributionDark : attributionLight}
        url={darkMode ? urlDark : urlLight}
      />
      { filteredByActivity.map(item => (
        <Marker
          position={[item.latitude, item.longitude]}
          icon={item.favourited ? redIcon : blueIcon}
          key={item.id}>
         <Popup>
          <LocationPopup
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            favourited={item.favourited}
            toggleFavourited={item.toggleFavourited}
          />
         </Popup>
        </Marker>
      ))}
      <LocateControl
        startDirectly
        options={{
          initialZoomLevel: 14,
          flyTo: true,
          setView: 'once',
          icon: 'fa far fa-compass',
          strings: {
              title: 'Show your location'
          },
        }}
      />
      <Search
        position="topright"
        inputPlaceholder="Where do you want to exercise?"
        zoom={13}
        showMarker={false}
        openSearchOnLoad={true}
        closeResultsOnClick={true}
      />;
      <NewLocationButton />
    </Map>
  );

};
