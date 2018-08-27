import React from "react";
import styled from "styled-components";
import UserProfileTripListItem from "./UserProfileTripListItem";

const UserProfileTripList = ({ tripData }) => {
  console.log(tripData);
  return (
    <Wrapper>
      <h3>Lastest Travels</h3>
      <TripWrapper>
        {tripData.slice(0,4).map(trip => (
          <UserProfileTripListItem
            key={trip.id}
            imageUrl={trip.image_url}
            location={trip.primary_location}
            startDate={trip.start_date}
            endDate={trip.end_date}
          />
        ))}
      </TripWrapper>
    </Wrapper>
  );
};

export default UserProfileTripList;

const Wrapper = styled.div`
  margin-top: 1rem;
  background-color: #d7d7d7;
  border: 1px solid #000;
  width: 100%;
  padding: 1rem;
  h3 {
    text-align: center;
  }
`;

const TripWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
