import { Map } from 'mapbox-gl';
import { INIT_LAT, INIT_LONG, INIT_ZOOM, MAX_ZOOM, MIN_ZOOM } from '../utils/constants';

function createMap({ container }: CreateMapProps) {
  return new Map({
    accessToken: import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN,
    container: container.current as HTMLElement,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [INIT_LONG, INIT_LAT],
    zoom: INIT_ZOOM
  });
}

function configureMap({ current }: ConfigureMapProps) {
  current.setMinZoom(MIN_ZOOM);
  current.setMaxZoom(MAX_ZOOM);
}

export { configureMap, createMap };

