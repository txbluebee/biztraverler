import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import ModalManager from '../../features/modals/modalManager';
import NavBar from "../../features/nav/NavBar/NavBar";
import LandingPage from '../../features/landing/LandingPage';
import HomePage from '../../features/home/HomePage';
import CommunityPage from '../../features/community/CommunityPage/CommunityPage';
import TestComponent from '../../features/test/TestComponent';
// import SearchComponent from '../../features/test/SearchComponent';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ModalManager/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
        </Switch>


        <Route path="/(.+)" render={()=>(
          <div>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path="/home" component={HomePage}/>    
                <Route path="/community" component={CommunityPage}/>    
                <Route path="/test" component={TestComponent}/> 
              </Switch>
            </Container>
          </div>  
        )}/>

      </React.Fragment>
    );
  }
}
