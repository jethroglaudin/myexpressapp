import React, { Component } from "react";
import Registration from "./components/Registration";
import UserInfo from "./components/UserInfo";
import AllUsers from "./components/AllUsers";
class App extends Component {
  state = {
    data: "",
    pageView: ""
  };

  updateData = (newData) =>{
    this.setState({
      data: newData
    })
  }

  render() {
    return (
      <div className="App">
        <h2>My Express App</h2>
        <a
          style={{ margin: "10px" }}
          href="#"
          onClick={() => this.setState({ pageView: <Registration /> })}
        >
          Register
        </a>
        <a
          style={{ margin: "10px" }}
          href="#"
          onClick={() => this.setState({ pageView: <UserInfo data={this.state.data}/> })}
        >
          User Info
        </a>
        <a
          style={{ margin: "10px" }}
          href="#"
          onClick={() => this.setState({ pageView: <AllUsers /> })}
        >
          All Users
        </a>
        <br />

        {this.state.pageView}
      </div>
    );
  }
}

export default App;
