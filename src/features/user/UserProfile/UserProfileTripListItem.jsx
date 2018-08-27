import React from 'react'
import styled from "styled-components";
import { Button } from 'semantic-ui-react';

const UserProfileTripListItem = ({imageUrl, location, startDate, endDate}) => {
  return (
    <Card>
      <CardImage imageUrl={imageUrl}/>
      <CardContent>
        <div className="card__header">{location}</div>
        <div className="card__date">{startDate} - {endDate}</div>
        <div className="card__descriptio">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi magni modi tempore</div>
        <Button inverted color='green' content="Read"/>
      </CardContent>
    </Card>
  )
}

export default UserProfileTripListItem

const Card = styled.div`
  flex: 0 0 45%;
  border: 1px solid #eee;
  box-shadow: 4px 2px 2px rgba(0,0,0,0.2);
  margin-bottom: 1rem;
  border-radius: 10px;
  overflow: hidden;
`
const CardImage = styled.div`
  height: 100px;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center center;
`
const CardContent = styled.div`
  background-color: #fff;
  padding: 0.5rem;
  >* {
    margin-bottom: 5px;
  }
  .card__header {
    font-size: 1.2rem;
    font-weight: bold;
  }
`