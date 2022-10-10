import {Box, styled} from "@mui/material";

import { stores } from "../data";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
import { useState, useEffect } from "react";

const Div = styled(Box)`
  background: #efefef;
  height: 100vh;
  position: relative;
  width: 100%;
  padding: 50px;
`;

const Body = () => {
  const [Map, setMap] = useState();
  const [pageIsMounted, setPageIsMounted] = useState(false);
  mapboxgl.accessToken =
    "pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA";
 
  useEffect(() => {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v10",
        center: [-77.034084, 38.909671],
        zoom: 13,
        scrollZoom: false,
      });
      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
      setMap(map);
  }, []);

  return (
    <Div>
      <section className="mapSection">
        <div id="map" class="map"></div>
      </section>
    </Div>
  );
}

export default Body