import React from 'react';
import styled from 'styled-components';
import CommunitySideBar from './CommunitySideBar';
import CommunityContent from './CommunityContent';
import { Grid } from 'semantic-ui-react';

const CommunityPage = () => {
  return (
    <React.Fragment>
      <StyledGrid container>
        <Grid.Column width="5">
          <CommunitySideBar/>
        </Grid.Column>
        <Grid.Column width="11">
          <CommunityContent/>
        </Grid.Column>
      </StyledGrid>
    </React.Fragment>
  );
};

export default CommunityPage;


const StyledGrid = styled(Grid)`
  margin-top: 1rem !important;
`;