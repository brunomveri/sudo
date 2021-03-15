import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80vh",
  },
}));

// TEST VARIABLES
const position = [49.2827, -123.1207];

const locations = [
  [49.275865, -123.152283],
  [49.251903, -123.124281],
  [49.329947, -122.949554],
]


const Map = props => {

  const classes = useStyles();
  
  return (
    <MapContainer
      center={position} zoom={13} className={classes.root}>
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { locations.map(item => (
        <Marker position={item} />
      ))}
    </MapContainer>
  );
};
export default Map;