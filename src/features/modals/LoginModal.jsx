import React from 'react';
import { connect } from "react-redux";
import { Modal } from "semantic-ui-react";
import LoginForm from '../auth/login/LoginForm';
import { closeModal } from './modalActions';

const actions = {
  closeModal
}

const LoginModal = ({closeModal}) => {
  return (
    <Modal size="mini" open={true} onClose={closeModal}>
      <Modal.Header>Sign In</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <LoginForm/>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default connect(null, actions)(LoginModal)
