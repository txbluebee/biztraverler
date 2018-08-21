import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../features/nav/NavBar/NavBar";
import HomePage from '../../features/home/HomePage';
import CommunityPage from '../../features/community/CommunityPage';

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
                <Route path="/community" component={CommunityPage}/>    
              </Switch>
            </Container>
          </div>  
        )}/>

      </React.Fragment>
    );
  }
}
