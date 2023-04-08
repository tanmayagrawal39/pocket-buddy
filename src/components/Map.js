import React, { useEffect, useRef } from 'react';
import { createMap, drawPoints } from "maplibre-gl-js-amplify";
import { withAuthenticator } from '@aws-amplify/ui-react';
import "maplibre-gl/dist/maplibre-gl.css";
import "@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css";
import "maplibre-gl-js-amplify/dist/public/amplify-geocoder.css";
import '@aws-amplify/ui-react/styles.css';
import './App.css';

function App() {
  const mapRef = useRef(null);

  useEffect(() => {
    let map;
    async function initializeMap() {
      if (mapRef.current != null) {
        map = await createMap({
          container: mapRef.current,
          center: [103.76758813512407, 1.3242533699581813],
          zoom: 11,
        });
      }
      map.on('load', () => {
        drawPoints("pointsSource",
          [
            {
              coordinates: [103.76758813512407, 1.3242533699581813],
              title: "Cold Storage Clementi Arcade",
              address: "41 Sunset Way, #01-01A Clementi Arcade, Singapore 597071",
            }
          ],
          map,
          {
            showCluster: true,
            unclusteredOptions: {
              showMarkerPopup: true,
            },
            clusterOptions: {
              showCount: true,
            },
          }
        );
      });
    }
    initializeMap();

    return function cleanup() {
      if (map != null) map.remove();
    };
  }, []);

  return (
    <div ref={mapRef} id="map" />
  );
}

export default withAuthenticator(App);