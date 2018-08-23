import React from 'react'
import { Menu, Button } from "semantic-ui-react";

const SignedOutMenu = ({signIn, openModal}) => {
  return (
    <Menu.Item position="right">
      <Button onClick={() => openModal('LoginModal')} basic inverted content="Login" />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
        onClick={() => openModal('RegisterModal')}
      />
    </Menu.Item>
  )
}

export default SignedOutMenu

