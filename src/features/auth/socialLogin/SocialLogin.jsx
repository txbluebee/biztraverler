import React from "react";
import { Button, Icon } from "semantic-ui-react";

const SocialLogin = () => {
  return (
    <div>
      <Button fluid style={{ marginBottom: "10px" }} color="linkedin">
        <Icon name="linkedin" /> Login with LinkedIn
      </Button>
      <Button type="button" fluid color="google plus">
        <Icon name="google plus" />
        Login with Google
      </Button>
    </div>
  );
};

export default SocialLogin;
