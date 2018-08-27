import React from "react";
import { Icon, Popup } from "semantic-ui-react";
import styled from "styled-components";

const Marker = ({ $hover, primaryLocation, locationDetail }) => {

  return (
    <MarkerWrapper hover={$hover}>
      <Popup
        trigger={<Icon name="map marker alternate" size="big" color="red" />}
        position="top center"
      >
        <Popup.Header>{primaryLocation}</Popup.Header>
        <Popup.Content>{locationDetail}</Popup.Content>
      </Popup>
    </MarkerWrapper>
  );
};

export default Marker;

const MarkerWrapper = styled.div`
  cursor: ${({ hover }) => (hover ? "pointer" : "")};
`;
