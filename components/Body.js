import {Box, styled} from "@mui/material";

import { stores } from "../data";

import { server } from "../config";


const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
import { useState, useEffect } from "react";

const Div = styled(Box)`
  background: #efefef;
  height: 100vh;
  position: relative;
  width: 100%;
  padding: 50px 0 50px 80px;
`;

const Body = () => {
  const [Map, setMap] = useState();
  const [pageIsMounted, setPageIsMounted] = useState(false);
  mapboxgl.accessToken =
    "pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA";

  useEffect(() => {
    setPageIsMounted(true);
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
  /**
   * Wait until the map loads to make changes to the map.
   */
  /**
   * Assign a unique id to each store. You'll use this `id`
   * later to associate each point on the map with a listing
   * in the sidebar.
   */
  stores.features.forEach((store, i) => {
    store.properties.id = i;
  });
  useEffect(() => {
    if (pageIsMounted && stores) {
      Map.on("load", () => {
        Map.addSource("places", {
          type: "geojson",
          data: stores,
        });
        addMarkers();
      });
    }
  });

  const reduceMarkerSize = (cName) => {
    const markerClasses = Array.from(document.getElementsByClassName(cName));
    // console.log(markerClasses);
    markerClasses.forEach(marker => {
      marker.style.backgroundImage = `url(${server}/Images/Ellipse_S.png)`;
      marker.style.width = "14px";
      marker.style.height = "14px";
    })
  }

  /**
   * Add a marker to the map for every store listing.
   **/
  function addMarkers() {
    /* For each feature in the GeoJSON object above: */
    for (const marker of stores.features) {
      /* Create a div element for the marker. */
      const el = document.createElement("div");
      /* Assign a unique `id` to the marker. */
      el.id = `marker-${marker.properties.id}`;
      const storeId = `marker-${marker.properties.id}`;
      /* Assign the `marker` class to each marker for styling. */
      el.className = "marker";


      /**
       * Create a marker using the div element
       * defined above and add it to the map.
       **/
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(Map);

      /**
       * Listen to the element and when it is clicked, do three things:
       * 1. Fly to the point
       * 2. Close all other popups and display popup for clicked store
       * 3. Highlight listing in sidebar (and remove highlight for all other listings)
       **/
      el.addEventListener("click", (e) => {
        /* Fly to the point */
        flyToStore(marker);

        // reduce all the marker size to it's initial stage
        reduceMarkerSize("marker");
        // to scale the marker image
        const id = document.getElementById(storeId);
        id.style.backgroundImage = `url(${server}/Images/Ellipse.png)`;
        id.style.width = "32px";
        id.style.height = "32px";

        /* Close all other popups and display popup for clicked store */
        createPopUp(marker);
      });
    }
  }

  /**
   * Use Mapbox GL JS's `flyTo` to move the camera smoothly
   * a given center point.
   **/
  function flyToStore(currentFeature) {
    Map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15,
    });
  }

  /**
   * Create a Mapbox GL JS `Popup`.
   **/
  function createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName("mapboxgl-popup");
    if (popUps[0]) popUps[0].remove();
    const popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(
        `
        <div class="popUpCard">
          <img class="popUpImage" src="${currentFeature.properties.photo}" alt="" />
          <div class="popUpInfo">
              <div class="addressInfo">
                <h4>${currentFeature.properties.address}</h4>
                <svg class="iconSize" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div> 
              <div class="location">
                <svg class="iconSize" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <h5>${currentFeature.properties.city}</h5>
              </div>

              <div class="location">
                <svg class="iconSize" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                <h5>${currentFeature.properties.postalCode}</h5>
              </div>
          </div>
        </div>
        `
      )
      .addTo(Map);
  }

  return (
    <Div>
      <div id="map" class="map"></div>
    </Div>
  );
}

export default Body