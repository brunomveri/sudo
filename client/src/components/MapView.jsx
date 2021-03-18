import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import LocateControl from './LocateControl';
import NewLocationButton from './NewLocationButton';
import LocationPopup from "./LocationPopup";
import DarkModeSwitch from "./DarkModeSwitch"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "calc(100vh - 65px)",
    top: '65px'
  }
}));

export default function MapView(props) {

  const { darkMode, locations, mapPosition } = props;
  const classes = useStyles();  

  const locateOptions = {
    initialZoomLevel: 14,
    flyTo: true,
    setView: 'once',
    icon: 'fa far fa-compass',
    strings: {
        title: 'Show your location'
    },
  }

  const attributionDark = '© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  const urlDark = "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  const attributionLight = '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  const urlLight = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"


  return (
    <Map
      center={mapPosition} zoom={13} className={classes.root}>
      <TileLayer
        attribution={darkMode ? attributionDark : attributionLight}
        url={darkMode ? urlDark : urlLight}
      />
      { locations.map(item => (
        <Marker position={[item.latitude, item.longitude]} key={item.id}>
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
      <LocateControl options={locateOptions} startDirectly/>
      <NewLocationButton />
    </Map>
  );

};
