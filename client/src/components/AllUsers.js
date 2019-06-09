import React, { Component } from 'react';
import axios from 'axios';

 class AllUsers extends Component {

    getUsers = () => {
        axios.get('/api/getallusers')
        .then(res => console.log(res))
        .catch(err => console.log(err))

    }

    render() {
        return (
            <div>
            <h3>Get All Users</h3>
            <button onClick={this.getUsers}>Get All</button>
                
            </div>
        )
    }
}

export default AllUsers;