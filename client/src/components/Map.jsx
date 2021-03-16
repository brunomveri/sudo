import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import './Map.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80vh",
  },
}));

const Map = props => {

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
            <img src={item.image} alt="Location Thumbnail" className="pinThumb"></img>
            <h2 className="pinTitle">{item.title}</h2>
            <p className="pinDescription">{item.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
