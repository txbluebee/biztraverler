/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';
import CommunityPeopleList from './CommunityPeopleList';



const PeopleDataAll = [
  {
    id: 1,
    fullName: 'Chloe Parker',
    currentCity: 'Mexico',
    photoURL: 'https://randomuser.me/api/portraits/women/88.jpg',
    frequentTravelCities: ['Seattle', 'Portland'],
  },
  {
    id: 2,
    fullName: 'Lily Howard',
    currentCity: 'Mexico',
    photoURL: 'https://randomuser.me/api/portraits/women/7.jpg',
    frequentTravelCities: ['Seattle', 'Portland', 'Houston'],
  },
  {
    id: 3,
    fullName: 'Max Fan',
    currentCity: 'Mexico',
    photoURL: 'https://randomuser.me/api/portraits/women/80.jpg',
    frequentTravelCities: ['Dallas', 'Austin'],
  },
  {
    id: 4,
    fullName: 'Jeff Brown',
    currentCity: 'Seattle',
    photoURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    frequentTravelCities: ['New York', 'Dallas', 'Mexico'],
  },
  {
    id: 5,
    fullName: 'Charlie Brown',
    currentCity: 'San Francisco',
    photoURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    frequentTravelCities: ['New York', 'Dallas', 'Mexico'],
  },
  {
    id: 6,
    fullName: 'Brat Pitt',
    currentCity: 'San Francisco',
    photoURL: 'https://randomuser.me/api/portraits/men/5.jpg',
    frequentTravelCities: ['Detroit', 'Chicago', 'Mexico'],
  },
  {
    id: 7,
    fullName: 'Nike Evans',
    currentCity: 'San Francisco',
    photoURL: 'https://randomuser.me/api/portraits/men/10.jpg',
    frequentTravelCities: ['Detroit', 'Chicago', 'Mexico'],
  },
];


const CommunitySideBar = ({currentCity = 'Mexico'}) => {

  const peopleInCurrentCity = PeopleDataAll.filter(people => people.currentCity === currentCity);
  const PeopleOftenTravelToCurrentCity = PeopleDataAll.filter(({frequentTravelCities}) => frequentTravelCities.includes(currentCity));

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