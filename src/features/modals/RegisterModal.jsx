import React from 'react';
import { connect } from 'react-redux';
import { Modal } from "semantic-ui-react";
import { closeModal } from './modalActions';
import RegisterForm from '../auth/register/RegisterForm'


const actions = {
  closeModal
}

const RegisterModal = ({closeModal}) => {
  return (
    <Modal size="mini" open={true} onClose={closeModal}>
      <Modal.Header>Sign Up</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <RegisterForm/>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default connect(null, actions)(RegisterModal);
