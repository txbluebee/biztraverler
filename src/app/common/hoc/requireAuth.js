import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {

  const mapState = state =>({
    auth: state.auth
  })

  class ComposedComponent extends Component{
    componentDidMount(){
      this.shouldNavigateAway();
    }
  
    componentDidUpdate(){
      this.shouldNavigateAway();
    }
  
    shouldNavigateAway(){
      if (!this.props.auth.authenticated){
        this.props.history.push('/');
      }
    }

    render(){
      return <ChildComponent {...this.props}/>
    }
  }

  return connect(mapState)(ComposedComponent);
}
