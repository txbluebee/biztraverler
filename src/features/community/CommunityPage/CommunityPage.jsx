import React, { Component } from "react";
import { connect } from "react-redux";
import CommunitySideBar from "./CommunitySideBar";
import CommunityContent from "./CommunityContent";
import { Grid } from "semantic-ui-react";

const mapState = state => ({
  community: state.community
});

class CommunityPage extends Component {
  render() {
    const { peopleData } = this.props.community;
    return (
      <Grid>
        <Grid.Column width="5">
          <CommunitySideBar peopleData={peopleData} />
        </Grid.Column>
        <Grid.Column width="11">
          <CommunityContent />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState)(CommunityPage);
