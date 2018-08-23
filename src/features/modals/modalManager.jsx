import React from 'react';
import { connect } from 'react-redux';
import TestModal from './TestModal';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal'

const modalLookup = {
  TestModal,
  LoginModal,
  RegisterModal
}

const mapState = state => ({
  currentModal: state.modals
})

const modalManager = ({currentModal}) => {
  let renderModal;
  if (currentModal){
    const {modalType, modalProps} = currentModal;
    const ModalComponenet = modalLookup[modalType];
    renderModal = <ModalComponenet {...modalProps}/>
  }
  return (
    <React.Fragment>
      {renderModal}
    </React.Fragment>
  )
}

export default connect(mapState)(modalManager);
