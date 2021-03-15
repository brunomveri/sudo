import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MapContainer, TileLayer } from "react-leaflet";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80vh",
  },
}));

// initial location on map
const position = [49.2827, -123.1207];

const Map = props => {

  const classes = useStyles();
  
  return (
    <MapContainer
      center={position} zoom={13} className={classes.root}>
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
export default Map;