import React, { Component } from "react";
import Registration from './components/Registration'
import UserInfo from './components/UserInfo';
import GetAllUsers from './components/AllUsers';
class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>My Express App</h2>
        <Registration />
        <br />
        <UserInfo />
        <br />
        <GetAllUsers />
      </div>
    );
  }
}

export default App;
