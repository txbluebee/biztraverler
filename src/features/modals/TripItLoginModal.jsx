import React from 'react';
import { connect } from 'react-redux';
import { Modal } from "semantic-ui-react";
import { closeModal } from './modalActions';
import TripItLoginForm from '../auth/socialLogin/TripItLoginForm';


const actions = {
  closeModal
}

const TripItLoginModal = ({closeModal}) => {
  return (
    <Modal dimmer="blurring" size="mini" open={true} onClose={closeModal}>
      <Modal.Header>Login to TripIt</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <TripItLoginForm/>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default connect(null, actions)(TripItLoginModal);