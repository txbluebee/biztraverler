import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const LoadingComponent = ({invert}) => {
  return (
    <Dimmer invert={invert} active={true}>
      <Loader content="Loading..." />
    </Dimmer>
  )
}

export default LoadingComponent
