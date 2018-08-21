import React from "react";

const HomePage = ({history}) => {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <div className="content">BizTraveler</div>
          </h1>
          <h2>Make Your Next Business Trip Easy</h2>
          <div onClick={() => history.push('./community')} className="ui huge white inverted button">
            Community
          </div>

          <div onClick={() => history.push('./events')} className="ui huge white inverted button">
            Sign In
            <i className="right sign in alternate icon" />
          </div>
          <div onClick={() => history.push('./events')} className="ui huge white inverted button">
            Sign Up
            <i className="right user plus icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
