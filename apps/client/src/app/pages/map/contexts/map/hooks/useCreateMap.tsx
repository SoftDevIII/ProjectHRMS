import { INIT_ZOOM_PERCENTAGE } from '@map-utils/constants';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef, useState } from 'react';
import {
  configureMap,
  configureZoomPercentage,
  createMap
} from '../services/MapService';

function useCreateMap() {
  const map = useRef<MapType['map']>();
  const container = useRef<MapType['container']>();
  const [actualZoom, setActualZoom] = useState<number>(INIT_ZOOM_PERCENTAGE);

  useEffect(() => {
    if (map.current || !container.current) {
      return;
    }

    map.current = createMap({ container });
    configureMap({ current: map.current });
    configureZoomPercentage({ current: map.current, setActualZoom });
  }, [container]);

  return { map, container, actualZoom };
}

export default useCreateMap;