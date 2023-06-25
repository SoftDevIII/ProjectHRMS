import { LngLat } from 'mapbox-gl';
import { createContext } from 'react';

const CoordinatesContext = createContext<CoordinatesContextValue>({
  startCoordinates: new LngLat(0, 0),
  setStartCoordinates: () => {},
  endCoordinates: new LngLat(0, 0),
  setEndCoordinates: () => {},
  userCoordinates: new LngLat(0, 0),
  setUserCoordinates: () => {},
  isMarking: false,
  setIsMarking: () => {}
});

export default CoordinatesContext;