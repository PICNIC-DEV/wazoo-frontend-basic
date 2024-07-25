import { useEffect, useState } from 'react';
import { Map, CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const OverLay = styled.div`
  background-color: white;
  padding: 5px 10px;
  border-radius: 20px;
`;
const Cost = styled.span`
  color: var(--primary-dark-color);
  font-weight: 500;
`;

const KakaoMap = () => {
  const [location, setLoacation] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });
  const [position, setPosition] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });
  const locationList = [
    {
      lat: 37.194469,
      lng: 127.1160064,
      cost: '₩120000',
    },
    {
      lat: 37.1645962,
      lng: 127.130667,
      cost: '₩120000',
    },
    {
      lat: 37.1745962,
      lng: 127.130667,
      cost: '₩120000',
    },
    {
      lat: 37.1845962,
      lng: 127.130667,
      cost: '₩120000',
    },
  ];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      setLoacation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });

    navigator.geolocation.watchPosition((pos) => {
      console.log(pos);
      setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }, []);

  return (
    <>
      {location && (
        <Map center={location} style={{ width: (window.innerWidth - 60) / 2, height: window.innerHeight - 188 }} level={3}>
          {locationList.map((item, index) => (
            <CustomOverlayMap key={index} position={{ lat: item.lat, lng: item.lng }}>
              <OverLay>
                <Cost>{item.cost}</Cost>
              </OverLay>
            </CustomOverlayMap>
          ))}
          <MapMarker position={position} />
        </Map>
      )}
    </>
  );
};

export default KakaoMap;
