import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from "styled-components";
import Marker from './Marker';
import {  GreenStyle } from './fancyMapStyles';

const GoogleMap = ({mapData, height}) => {
  const center = [mapData[0].lat, mapData[0].lng];
  const zoom = 8;
  return (
    <MapWrapper height={height}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}}
        defaultCenter={center}
        defaultZoom={zoom}
        options={{
          styles: GreenStyle
        }}
      >
        {mapData && mapData.map(location => 
          <Marker 
            key={location.id} 
            lat={location.lat} 
            lng={location.lng}
          />)
        }
      </GoogleMapReact>
    </MapWrapper>
  );
};

export default GoogleMap;

const MapWrapper = styled.div`
  height: ${({height}) => height? height : '300px'};
  width: 100%;
`