import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from "styled-components";
import Marker from './Marker';
import {  GreenStyle } from './fancyMapStyles';

const GoogleMap = ({mapData, height, zoom, defaultCenter = {lat: 35.640696, lng: -42.845525 }}) => {
  const center = [defaultCenter.lat, defaultCenter.lng];
  return (
    <MapWrapper height={height}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}}
        defaultCenter={center}
        defaultZoom={zoom || 10}
        options={{
          styles: GreenStyle,
          minZoom: 1.5
        }}
      >
        {mapData && mapData.map(location => 
          <Marker 
            key={location.id} 
            lat={location.lat} 
            lng={location.lng}
            primaryLocation={location.primary_location}
            travelDate={location.start_date}
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