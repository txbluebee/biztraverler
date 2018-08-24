import React, { Component } from "react";
import { connect } from 'react-redux';
import { Menu, Container, Icon } from "semantic-ui-react";
import { NavLink, Link} from "react-router-dom";
import styled from "styled-components";
import SignedInMenu from "../Menus/SignedInMenu";
import SignedOutMenu from "../Menus/SignedOutMenu";
import { openModal } from '../../modals/modalActions';

const actions = {
  openModal
}

class NavBar extends Component {
  state = {
    authenticate: true
  };

  handleSignIn = () => {
    this.setState({
      authenticate: true
    });
  };

  handleSignOut = () => {
    this.setState({
      authenticate: false
    });
  };

  render() {
    const { authenticate } = this.state;
    const { openModal } = this.props;
    return (
      <MenuWrapper size="large" inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <Icon name="plane" />
            BizTravler
          </Menu.Item>
          <Menu.Item as={NavLink} to="/home" name="Home" />
          {/* {authenticate && (
            <Menu.Item as={NavLink} to="/community" name="Community" />
          )} */}
          {authenticate && (
            <Menu.Item as={NavLink} to="/profile" name="Profile" />
          )}
          <Menu.Item as={NavLink} to="/forum" name="Forum" />
          <Menu.Item as={NavLink} to="/test" name="Test" />
          {/* SignIn & SignOut Menu */}
          {authenticate ? (
            <SignedInMenu signOut={this.handleSignOut}/>
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} openModal={openModal}/>
          )}
        </Container>
      </MenuWrapper>
    );
  }
}

export default connect(null, actions)(NavBar);

const MenuWrapper = styled(Menu)`
  background-color: #17c671 !important;
  height: 60px;
`;
