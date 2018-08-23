import React from 'react'
import { connect } from 'react-redux'
import { Button } from "semantic-ui-react";
import { openModal } from '../modals/modalActions';

const actions = {
  openModal
}

const TestComponent = ({openModal}) => {
  console.log(process.env);
  return (
    <div>
      <Button onClick={() => openModal("TestModal", {data:43})} content="open modal"/>
    </div>
  )
}

export default connect(null, actions)(TestComponent)
