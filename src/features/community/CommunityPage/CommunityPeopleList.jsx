/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';
import CommunityPeopleItem from './CommunityPeopleItem';

const CommunityPeopleList = ({peopleData}) => {
  return (
    <Wrapper>
      {peopleData.map(people => 
        <CommunityPeopleItem 
          key={people.id} 
          id={people.id}
          fullName={people.fullName} 
          photoURL={people.photoURL}/>)}
    </Wrapper>
  );
};


export default CommunityPeopleList;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;