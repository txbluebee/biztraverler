import React from "react";
import { Icon, Popup } from "semantic-ui-react";
import styled from "styled-components";

const Marker = ({ $hover }) => {
  return (
    <MarkerWrapper hover={$hover}>
      <Popup
        trigger={<Icon name="map marker alternate" size="big" color="teal" />}
        position="top center"
      >
        <Popup.Header>Jeff Brown</Popup.Header>
        <Popup.Content>Hello Mexico</Popup.Content>
      </Popup>
    </MarkerWrapper>
  );
};

export default Marker;

const MarkerWrapper = styled.div`
  cursor: ${({ hover }) => (hover ? "pointer" : "")};
`;
