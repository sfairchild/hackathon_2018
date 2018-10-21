import React, { Component } from 'react'
import Icon from '@material-ui/core/Icon';

class User extends Component {
    render() {
        const { name, status } = this.props;
        return (
          <div className="root">
                <div className={`account ${status}`}>
                    <Icon>account_circle</Icon>
                    <div className="name">{ name }</div>
                </div>
                <div className="actions"><Icon>message</Icon></div>
                <style jsx>{`
                    .root {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 5px 20px;
                        background: #fff;
                    }
                    .account {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .offline {
                        color: red;
                    }
                    .online {
                        color: green;
                    }
                    .away {
                        color: #ccc;
                    }
                `}</style>
          </div>  
        )
    }
}

export default User