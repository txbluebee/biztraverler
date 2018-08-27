import React from 'react'
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const UserProfileBasicInfo = ({profile}) => {
  return (
    <Wrapper>
      <img src="/assets/user.png" alt=""/>
      <div className="profile-header">Lily Howard</div>
      <div className="profile-hometown">
        <Icon name="map marker alternate" color="blue" size="large"/>
        <span>Seattle, WA</span>
      </div>
      <div className="profile-center">
        <p>CEO at Megacorp</p>
        <div className="socail-icons">
          <Icon name="linkedin"/>
          <Icon name="facebook square"/>
          <Icon name="twitter square"/>
        </div>  
      </div>
      <div className="profile-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus esse, nesciunt animi in doloremque magnam quisquam excepturi aspernatur quae enim magni maiores, doloribus voluptatem harum officia sequi, iure dolorem? Blanditiis.
      </div>
      <div className="profile-statistics">
        <div className="profile-statistics-item">
          <span>258</span>
          <span>Posts</span>
        </div>
        <div className="profile-statistics-item">
          <span>2.5k</span>
          <span>Followers</span>
        </div>
        <div className="profile-statistics-item">
          <span>937</span>
          <span>following</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default UserProfileBasicInfo


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 125px;
    border-radius: 50%;
    margin-bottom: 1.5rem;
  }
  /* Profile Header */
  .profile-header {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .profile-hometown {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  .profile-center {
    p {
      font-size: 1.5rem;
      color: #888;
      margin-bottom: 1rem;
    }
    .socail-icons {
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      color: #17c671;
      font-size: 2.5rem;
    }
  }
  .profile-description {
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }
  .profile-statistics {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .profile-statistics-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      text-align: center;
      position: relative;
      span:last-child {
        font-size: 0.8rem;
        text-transform: uppercase;
      }
      &:not(:last-child) {
        &::after {
          content: '';
          position: absolute;
          width: 5px;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(0,0,0, 0.1);
        }
      }
    }
  }
`