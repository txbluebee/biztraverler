import React from 'react';
import styled from 'styled-components';
import CommunityFeed from './CommunityFeed';
import CommunityLargeMap from './CommunityLargeMap';


const mapData = [
  {
    id: 1,
    lat: 19.3905201,
    lng: -99.4231421,
  },
  {
    id: 2,
    lat: 19.422904,
    lng: -99.1632983,
  },
  {
    id: 3,
    lat: 19.4249276,
    lng: -99.1577406,
  },
];

const CommunityContent = () => {

  return (
    <Wrapper>
      <CommunityLargeMap mapData={mapData}/>
      <StyledHeader>
      </StyledHeader>
      <CommunityFeed/>
    </Wrapper>
  );
};

export default CommunityContent;


const Wrapper = styled.div`
  padding: 5px;
`;

const StyledHeader = styled.h2`
  font-size: 30px;
  text-align: center;
  margin: 15px 0;
`;

