import React from 'react';
import { connect } from 'react-redux';
import TestModal from './TestModal';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal'
import TripItLoginModal from './TripItLoginModal'

const modalLookup = {
  TestModal,
  LoginModal,
  RegisterModal,
  TripItLoginModal
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
