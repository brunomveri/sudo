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

// TEST VARIABLES
const mapPosition = [49.2827, -123.1207];

const locations = [
  {
    title:  'Kitsilano Beach Basketball Court',
    description: 'Outdoor basketball court with beauftiul backdrop next to the ocean',
    latitude: 49.275865,
    longitude: -123.152283,
    image: "https://i.pinimg.com/originals/9a/fa/0a/9afa0aff5b7bb1e41a3b4de509a83921.jpg"
  },
  {
    title:  'Douglas Park Running Track',
    description: 'A track that circles a large park in a lovely neighbourhood',
    latitude: 49.251903,
    longitude: -123.124281,
    image: "https://vancouver.ca//parks/parks/images/douglas01.jpg"
  },
  {
    title:  'Quarry Rock',
    description: 'A scenic hike close to great coffee and food',
    latitude: 49.329947,
    longitude: -122.949554,
    image: "https://www.vancouvertrails.com/images/hikes-small/quarry-rock.jpg"
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