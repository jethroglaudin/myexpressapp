import React, { Component } from "react";
import axios from "axios";

class UserInfo extends Component {
  state = {
    userName: "",
    result: ""
  };

  getUserInfo = () => {
    console.log("state", this.state);
    // console.log("props", this.props);
    const userData = {
      username: this.state.userName
    };

    axios
      .get("/api/showprofile/", userData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    // this.setState({
    //   result: this.props.data
    // })
  };

  render() {
    return (
      <div>
        <h3>Get User Info</h3>
        <input
          onChange={e => this.setState({ userName: e.target.value })}
          placeholder="User Name"
        />

        <button onClick={this.getUserInfo}>Get user info</button>
        {this.state.result}
      </div>
    );
  }
}

export default UserInfo;
