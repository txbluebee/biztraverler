import React, { Component } from "react";
import { Container, Divider } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../features/nav/NavBar/NavBar";
import HomePage from '../../features/home/HomePage';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>


        <Route path="/(.+)" render={()=>(
          <div>
            <NavBar />
            <Container className="main">
              <Switch>
              </Switch>
            </Container>
          </div>  
        )}/>

      </React.Fragment>
    );
  }
}
