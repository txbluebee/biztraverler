import React, { Component } from "react";
import { Menu, Container, Icon } from "semantic-ui-react";
import { NavLink, Link} from "react-router-dom";
import styled from "styled-components";
import SignedInMenu from "../Menus/SignedInMenu";
import SignedOutMenu from "../Menus/SignedOutMenu";

class NavBar extends Component {
  state = {
    authenticate: false
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
    return (
      <MenuWrapper size="large" inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <Icon name="plane" />
            BizTravler
          </Menu.Item>

          {authenticate && (
            <Menu.Item as={NavLink} to="/community" name="Community" />
          )}
          {authenticate && (
            <Menu.Item as={NavLink} to="/profile" name="Profile" />
          )}
          <Menu.Item as={NavLink} to="/forum" name="Forum" />
          {/* SignIn & SignOut Menu */}
          {authenticate ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </MenuWrapper>
    );
  }
}

export default NavBar;

const MenuWrapper = styled(Menu)`
  background-color: #17c671 !important;
  height: 60px;
`;
