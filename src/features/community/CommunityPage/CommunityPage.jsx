import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
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
      <React.Fragment>
        <StyledGrid container>
          <Grid.Column width="5">
            <CommunitySideBar peopleData={peopleData} />
          </Grid.Column>
          <Grid.Column width="11">
            <CommunityContent />
          </Grid.Column>
        </StyledGrid>
      </React.Fragment>
    );
  }
}

export default connect(mapState)(CommunityPage);

const StyledGrid = styled(Grid)`
  margin-top: 1rem !important;
`;

