import React, { Component } from "react";
import { connect } from "react-redux";
import CommunitySideBar from "./CommunitySideBar";
import CommunityContent from "./CommunityContent";
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { Grid } from "semantic-ui-react";
import { fetchUserContacts } from '../communityActions';

const mapState = state => ({
  community: state.community,
  loading: state.async.loading
});

const actions = {
  fetchUserContacts
}

class CommunityPage extends Component {

  componentDidMount(){
    this.props.fetchUserContacts();
  }

  render() {
    const { peopleData } = this.props.community;
    const { loading } = this.props;
    if (loading) return <LoadingComponent invert={true}/>
    return (
      <Grid>
        <Grid.Column width="5">
          {peopleData && <CommunitySideBar peopleData={peopleData} />}
        </Grid.Column>
        <Grid.Column width="11">
          <CommunityContent />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(CommunityPage);
