// import { useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Map = () => {
  // const [map, setMap] = React.useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  const containerStyle = {
    width: '1200px',
    height: '650px',
  };

  const center = {
    lat: 37.5649867,
    lng: 126.985575,
  };

  const OPTIONS = {
    minZoom: 4,
    maxZoom: 18,
  };
  // const onLoad = useCallback((map) => {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  // const onUnmount = useCallback((map) => {
  //   setMap(null);
  // }, []);
  return isLoaded ? (
    <GoogleMap>
      mapContainerStyle={containerStyle}
      center={center}
      {/* onLoad={onLoad}
      onUnmount={onUnmount} */}
      options={OPTIONS}
      <Marker position={center}></Marker>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
