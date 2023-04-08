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
  const apiKey = "v1.public.eyJqdGkiOiIzZmU2ZjQzMS1jNWUzLTRlMmQtOWVmZi02MjFhY2VhZDliNTUifTsj2AVwoUeuKuDzrb9WJ0hm97_0xNrHspyLV5IfJBX82sWiWMqjZkN2JyOiGZRH9TsbRKMsv0LzCU0W91Hz2YnFcWD2N1o9oiSMhaBodfpRdV317XxwTAeBV42VyYhKVWdpQeQAz0D39AL09rj8pOCkSfvPCNrBtLVR45uRQqEXTYA_VGtda7udkb5uxGyd4mzdpwwieoo70o5YVUTdZRPhWuyWZzbnAhqrd9XTdz0kV-FQixHDpOMxbbSq8MreXnl2N_PyfSsYqjsqqsq1y8YVmTokRFV2e6YrblK_WfpqwYIfktusCdBpHWvQWRftxnD-52SHEwWZJg_YBREUoCY.ZWU0ZWIzMTktMWRhNi00Mzg0LTllMzYtNzlmMDU3MjRmYTkx";

  useEffect(() => {
    let map;
    async function initializeMap() {
      if (mapRef.current != null) {
        map = await createMap({
          container: mapRef.current,
          center: [103.76758813512407, 1.3242533699581813],
          zoom: 11,
          apiKey: apiKey
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