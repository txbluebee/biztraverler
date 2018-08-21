/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CommunityPeopleList = ({id, fullName, photoURL}) => {

  return (
    <ImageWrapper>
      <Image src={photoURL} /> 
      <StyledLink to={`/profile/${id}`}>
        <p>{fullName}</p>
      </StyledLink>
    </ImageWrapper>
  );
};


const ImageWrapper = styled.div`
  padding: 10px 0;
  flex: 0 0 50%;
  text-align: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const StyledLink = styled(Link)`
  color: inherit;
  font-size: 1rem;
  font-weight: bold;
`;


export default CommunityPeopleList;
