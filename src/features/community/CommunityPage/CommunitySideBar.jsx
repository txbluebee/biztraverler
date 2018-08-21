/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';
import CommunityPeopleList from './CommunityPeopleList';

const CommunitySideBar = ({peopleData, currentCity = 'Mexico'}) => {

  const peopleInCurrentCity = peopleData.filter(people => people.currentCity === currentCity);
  const PeopleOftenTravelToCurrentCity = peopleData.filter(({frequentTravelCities}) => frequentTravelCities.includes(currentCity));

  return (
    <Wrapper>
      <h3>Live in {currentCity || 'Mexico'}</h3>

      { peopleInCurrentCity ? 
        (<CommunityPeopleList 
          peopleData={peopleInCurrentCity}/>) :
        (<p>No Friends Found</p>)  
      }

      <h3>Frequent travel to {currentCity || 'Mexico'}</h3>
      { PeopleOftenTravelToCurrentCity ?
        <CommunityPeopleList peopleData={PeopleOftenTravelToCurrentCity}/>:
        <p>No Friends Found</p>
      }
    </Wrapper>
  );
};

export default CommunitySideBar;


const Wrapper = styled.div`
  background-color: #eee;
  padding: 10px;
  h3 {
    text-align: center;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translate(-50%);
      width: 50px;
      height: 2px;
      background-color: #000;
    }
  }
`;