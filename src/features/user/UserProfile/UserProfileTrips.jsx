import React from "react";
import GoogleMap from '../../../app/common/map/GoogleMap';

const UserProfileTrips = ({ trips }) => {
  console.log(trips);
  const filterData = trips.map(
    ({ id, image_url, start_date, end_date, primary_location, PrimaryLocationAddress }) => ({
      id,
      start_date,
      end_date,
      image_url,
      primary_location,
      lat: PrimaryLocationAddress.latitude,
      lng: PrimaryLocationAddress.longitude
    })
  );
  console.log(filterData);
  return (
    <React.Fragment>
      <GoogleMap mapData={filterData} height="300px" zoom={1}/>
    </React.Fragment>
  );
};

export default UserProfileTrips;
