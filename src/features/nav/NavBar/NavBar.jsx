import React, { Component } from 'react';
import { Menu, Container } from "semantic-ui-react";

class NavBar extends Component {
  render() {
    return (
      <Menu>
        <Container>
          <Menu.Item>
            <h1>Narbar</h1>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}


export default NavBar;