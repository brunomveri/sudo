import { useEffect } from "react";
import { withLeaflet } from "react-leaflet";
import Locate from "leaflet.locatecontrol";

// Adds the 'find my location' button and its functionality
const LocateControl = props => {

  useEffect(() => {

    const { options, startDirectly } = props;
    const { map } = props.leaflet;

    const lc = new Locate(options);
    lc.addTo(map);

    if (startDirectly) {
      lc.start();
    }

  }, []);

  return null;

};

export default withLeaflet(LocateControl);
