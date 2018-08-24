import React from 'react'
import { Icon, Popup } from "semantic-ui-react";
import styled from "styled-components";

const CommunityMapMarker = ({$hover}) => {
  return (
    <MarkerWrapper hover={$hover}>
    <Popup
      trigger={<Icon name="map marker alternate" size="big" color="teal"/>}
    >
      <Popup.Header>City</Popup.Header>
      <Popup.Content>
        Hello Mexico
      </Popup.Content>
    </Popup>  
    </MarkerWrapper>
  )
}

export default CommunityMapMarker

const MarkerWrapper = styled.div`
  cursor: ${props => props.hover?'pointer': ""};
`