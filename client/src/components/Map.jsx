import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80vh",
  },
}));

// TEST VARIABLES
const mapPosition = [49.2827, -123.1207];

const locations = [
  {
    title: 'Test 1',
    description: 'Description 1',
    coordinates: [49.275865, -123.152283]
  },
  {
    title: 'Test 2',
    description: 'Description 2',
    coordinates: [49.251903, -123.124281]
  },
  {
    title: 'Test 3',
    description: 'Description 3',
    coordinates: [49.329947, -122.949554]
  }
]


const Map = props => {

  const classes = useStyles();
  
  return (
    <MapContainer
      center={mapPosition} zoom={13} className={classes.root}>
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { locations.map(item => (
        <Marker position={item.coordinates}>
          <Popup>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
export default Map;