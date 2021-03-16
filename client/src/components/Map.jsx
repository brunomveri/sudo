import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import LocationPopup from "./LocationPopup";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "calc(100vh - 65px)",
    top: '65px'
  }
}));

export default function Map(props) {

  const { locations, mapPosition } = props;
  const classes = useStyles();  

  return (
    <MapContainer
      center={mapPosition} zoom={13} className={classes.root}>
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { locations.map(item => (
        <Marker position={[item.latitude, item.longitude]}>
         <Popup>
          <LocationPopup 
            image={item.image}
            title={item.title}
            description={item.description}
            alt="Location Thumbnail"
          />
         </Popup>
        </Marker>
      ))}
    </MapContainer>
  );

};
