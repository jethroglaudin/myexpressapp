import React, { Component } from "react";

class App extends Component {
  state = {
    userName: "",
    message: ""
  };
  getUserInfo = () => {
    console.log(this.state.userName);
  };

  getUserInputName = () => {};

  getUserInputAndMessage = () => {
    console.log(this.state);
  };

  getAllUsers = () => {
    console.log(`Button was clicked`);
  };

  render() {
    return (
      <div className="App">
        <h2>My Express App</h2>
        <input
          onChange={e =>
            this.setState({
              userName: e.target.value
            })
          }
          placeholder="user name"
          type="text"
        />
        <button onClick={this.getUserInfo}>Get user info</button>
        <h2>User Registration</h2>
        <input
          onChange={e =>
            this.setState({
              userName: e.target.value
            })
          }
          placeholder="user name"
          type="text"
        />
        <input
          onChange={e =>
            this.setState({
              message: e.target.value
            })
          }
          placeholder="message"
          type="text"
        />
        <button onClick={this.getUserInputAndMessage}>Submit</button>
        <h3>Get all users</h3>
        <button onClick={this.getAllUsers}>Get</button>
      </div>
    );
  }
}

export default App;
