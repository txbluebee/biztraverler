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

const LinkedinData = {
  status: "success",
  givenName: "Brian",
  familyName: "Fan",
  email: "kuomu.fan@gmail.com",
  image: "https://media.licdn.com/dms/image/C4E03AQEn1TAFoNSENA/profile-displayphoto-shrink_100_100/0?e=1541030400&v=beta&t=Lm6L6deyq3FiWHbHjVJFrvJG_c2FD4GncQfIzFOKuoA",
  headline: "Web Developer ",
  position: "Web Developer at Freelance",
  humanLocation: "Greater Seattle Area",
  createdAt: "2018-08-29T03:18:19.554Z"
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
            { profile  && <UserProfileBasicInfo LinkedinData={LinkedinData} profile={profile}/>}
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
  margin-bottom: 1rem;
`;

const GreyWrapper = styled.div`
  background-color: #d7d7d7;
  border: 1px solid #000;
  width: 100%;
  padding: 1rem;
`;
