import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import useMap from '@map-contexts/map/MapState';
import '@map-styles/marker.css';
import { LngLat, MapMouseEvent, Marker } from 'mapbox-gl';
import { useRef, useState } from 'react';

function useMarker({ setCoordinates, type, icon }: UseMarkerProps) {
  const { map } = useMap();
  const { isMarking, setIsMarking } = useCoordinates();

  const marker = useRef<Marker>(new Marker());
  const [isMarked, setIsMarked] = useState(false);

  const createMarker = (lngLat: LngLat) => {
    if (!map.current) {
      return;
    }
    marker.current = new Marker().setLngLat(lngLat);
    marker.current.getElement().innerHTML = `<div><div class='animate-bounce'><div class='marker ${type}'></div></div><div class='shadow shadow-${type}'></div></div>`;
    marker.current.addTo(map.current);
  };

  const handleClick = (event: MapMouseEvent) => {
    if (!map.current || map.current.getCanvas().style.cursor === '') {
      map.current?.off('click', handleClick);
      return;
    }
    setIsMarking(false);
    map.current.off('click', handleClick);
    map.current.getCanvas().style.cursor = '';
    setCoordinates(event.lngLat);
    createMarker(event.lngLat);
    setIsMarked(true);
  };

  const setPoint = () => {
    if (isMarked || !map.current || isMarking) {
      return;
    }
    map.current.getCanvas().style.cursor = `url(${icon}) 18 30, pointer`;
    map.current.on('click', handleClick);
    setIsMarking(true);
  };

  const removePoint = () => {
    if (!isMarked) {
      return;
    }
    marker.current.remove();
    setIsMarked(false);
    setCoordinates(new LngLat(0, 0));
  };

  return {
    setMarker: setPoint,
    removeMarker: removePoint
  };
}

export default useMarker;
