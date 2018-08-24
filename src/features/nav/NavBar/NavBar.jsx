import React, { Component } from "react";
import { connect } from 'react-redux';
import { Menu, Container, Icon } from "semantic-ui-react";
import { NavLink, Link, withRouter} from "react-router-dom";
import styled from "styled-components";
import SignedInMenu from "../Menus/SignedInMenu";
import SignedOutMenu from "../Menus/SignedOutMenu";
import { openModal } from '../../modals/modalActions';
import { logout } from '../../auth/authActions';


const mapState = state => ({
  auth: state.auth
})

const actions = {
  openModal,
  logout
}

class NavBar extends Component {

  handleSignOut = () => {
    this.props.logout();
    this.props.history.push('/')
  };

  render() {
    const {authenticated, currentUser} = this.props.auth;
    const { openModal } = this.props;

    console.log(currentUser);
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
          {authenticated && (
            <Menu.Item as={NavLink} to="/profile" name="Profile" />
          )}
          <Menu.Item as={NavLink} to="/forum" name="Forum" />
          <Menu.Item as={NavLink} to="/test" name="Test" />
          {/* SignIn & SignOut Menu */}
          {authenticated ? (
            <SignedInMenu currentUser={currentUser} signOut={this.handleSignOut}/>
          ) : (
            <SignedOutMenu openModal={openModal}/>
          )}
        </Container>
      </MenuWrapper>
    );
  }
}

export default connect(mapState, actions)(withRouter(NavBar));

const MenuWrapper = styled(Menu)`
  background-color: #17c671 !important;
  height: 60px;
`;
