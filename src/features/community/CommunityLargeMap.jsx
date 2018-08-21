/* eslint react/prop-types: 0 */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';

const CommunityLargeMap = ({mapData}) => {
  const center = [mapData[0].lat, mapData[0].lng];
  const zoom = 8;
  return (
    <div style={{ height: '300px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.GOOGLE_MAPS_API_KEY}` }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {mapData && mapData.map(location => 
          <Marker 
            key={location.id} 
            lat={location.lat} 
            lng={location.lng}
          />)
        }
      </GoogleMapReact>
    </div>
  );
};

export default CommunityLargeMap;


const Marker = () => <Icon name="map marker" size="big" color="red"/>;
