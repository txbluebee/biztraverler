import React, { Component } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import UserProfileBasicInfo from "./UserProfileBasicInfo";
import { fetchTripIt } from '../userActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import UserProfileTrips from './UserProfileTrips';

const mapState = state => ({
  loading: state.async.loading,
  profile: state.user.Profile,
  trips: state.user.Trip
})

const actions = {
  fetchTripIt
}

class UserProfilePage extends Component {

  componentDidMount(){
    this.props.fetchTripIt();
  }

  render() {
    const { loading, profile, trips} = this.props;
    if (loading) return <LoadingComponent inverted={true}/>
    return (
      <Wrapper>
        <SideBar>
          <GreyWrapper>
            { profile  && <UserProfileBasicInfo profile={profile}/>}
          </GreyWrapper>
        </SideBar>
        <MainContent>
            { trips && <UserProfileTrips trips={trips}/>}
        </MainContent>
      </Wrapper>
    );
  }
}

export default connect(mapState, actions)(UserProfilePage);

const Wrapper = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  flex: 0 0 35%;
  margin-right: 1.5rem;
`;

const MainContent = styled.div`
  flex: 0 0 65%;
`;

const GreyWrapper = styled.div`
  background-color: #d7d7d7;
  border: 1px solid #000;
  width: 100%;
  padding: 1rem;
`;
