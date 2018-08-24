import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './CommunityMapMarker';

const CommunityLargeMap = ({mapData}) => {
  const center = [mapData[0].lat, mapData[0].lng];
  const zoom = 8;
  console.log(<GoogleMapReact/>);
  return (
    <div style={{ height: '300px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}}
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

