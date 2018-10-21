import React, { Component } from 'react';
import User from './user';

class Users extends Component {
    state = {
        filter: '',
        users: [
            { name: 'Christian', status: 'online' },
            { name: 'Sean', status: 'away' },
            { name: 'Daniel', status: 'offline' },
            { name: 'Christian', status: 'online' },
            { name: 'Sean', status: 'away' },
            { name: 'Daniel', status: 'offline' },
            { name: 'Christian', status: 'online' },
            { name: 'Sean', status: 'away' },
            { name: 'Daniel', status: 'offline' },
        ]
    }
    onFilterChange = (e) => {
        const { value } = e.target;
        this.setState({
            filter: value
        });
    }

    render() {
        const { users, filter} = this.state;
        const { onFilterChange } = this;
        
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));

        return (
            <div className="root">
                <h1>Hive</h1>
                <div className="search">
                </div>
                <ul>
                    { filteredUsers.map((user, i) => <li key={i}><User name={user.name} status={user.status}/></li>)}
                </ul>
            <style jsx>{`
                .root {
                    max-height: 280px;
                    overflow: scroll;
                    padding: 0 20px;
                }
                h1 {
                    font-size: 12px;
                    margin: 0 auto;
                    padding: 20px;
                    color: #0169d9;
                }
                ul {
                    max-height: 282px;
                    overflow: scroll;
                    list-style: none;
                }
                ul li {
                    margin: px 0;
                }
            `}</style>
            </div>
        )
    }
}

export default Users;