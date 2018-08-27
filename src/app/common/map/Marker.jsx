import React from "react";
import { Icon, Popup } from "semantic-ui-react";
import styled from "styled-components";
import moment from 'moment';

const Marker = ({ $hover, primaryLocation, locationDetail, travelDate }) => {
  const travelMonth = moment(travelDate).format('MMMM, YYYY') || 'Unknown'
  return (
    <MarkerWrapper hover={$hover}>
      <Popup
        trigger={<Icon name="map marker alternate" size="big" color="red" />}
        position="top center"
      >
        <Popup.Header>{primaryLocation}</Popup.Header>
        <Popup.Content>{travelMonth}</Popup.Content>
      </Popup>
    </MarkerWrapper>
  );
};

export default Marker;

const MarkerWrapper = styled.div`
  cursor: ${({ hover }) => (hover ? "pointer" : "")};
`;
