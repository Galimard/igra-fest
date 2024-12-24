import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import PropTypes from 'prop-types';

export function MapUI({ coords }) {   
  return (
    <>
      <YMaps query={{ lang: "ru_RU", load: "package.full", apikey: 'b29760dd-e8dd-4a58-b0f3-2a3ce8a05378' }}>
        <Map
          state={{ center: coords, zoom: 12, controls: [] }}
          width="100%"
          height="100%"
          options={{
          minZoom: 8,
          maxZoom: 18,
          suppressMapOpenBlock: true
        }}
        >
          <Placemark geometry={coords} />
        </Map>
      </YMaps>   
    </>    
  );
}

MapUI.propTypes = {
  coords: PropTypes.array.isRequired,
}