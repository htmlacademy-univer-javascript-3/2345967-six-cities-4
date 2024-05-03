import React, { useEffect } from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../store/hooks/use-map';
import {City} from '../types/city';
import {Point} from '../types/point';
import 'leaflet/dist/leaflet.css';
import { MapMarker } from '../const';

type MapProps = {
  city: City;
  points: Point[];
  selectedPoint?: Point;
}

function Map({city, points, selectedPoint}: MapProps): JSX.Element {

  const mapRef = React.useRef(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    if(map) {
      const markerLayer = layerGroup().addTo(map);
      map.panTo(selectedPoint === undefined
        ? [city.point.lat, city.point.lng]
        : [selectedPoint.lat, selectedPoint.lng]
      );
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });
        marker
          .setIcon(
            new Icon({
              iconUrl: point === selectedPoint ? MapMarker.Current : MapMarker.Default,
              iconAnchor: [14, 40]
            })
          )
          .addTo(markerLayer);
      });


      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [city.point.lat, city.point.lng, map, points, selectedPoint]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
