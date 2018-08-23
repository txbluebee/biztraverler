import React from 'react'
import styled from "styled-components";
import SearchBar from './SearchBar';

const HomePage = () => {
  return (
    <Wrapper>
      <MainContent>
        <Image src='/assets/homepage_logo.png'/>
        <SearchBar/>
        <Text>
          <p>Please <span>Login to your TripIt Account</span></p>
          <p>to get better search result!</p>
        </Text>
      </MainContent> 
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.div`
  position: relative;
  height: 85vh;
` 

const MainContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Image = styled.img`
  width: 100%;
  margin: 0 auto;
`

const Text = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.2rem;
  span {
    cursor: pointer;
    color: #4183c4;
    text-decoration: underline;
  }
`