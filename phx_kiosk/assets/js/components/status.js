import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';

export default class Status extends Component {
    state = {
        status: 'active'
    }
    render() {
        const icon = this.state.status === 'active' ? 'cloud' : 'cloud_off'
        return (
            <div className="root">
                <Icon>{icon}</Icon>
                <span className="status">Dexient</span>
                <style jsx>{`
                    .root {
                        border: 1px solid #ccc
                        border-radius: 3px;
                        display: flex;
                        align-items: center;
                        text-align: center;
                        width: 100%;
                        width: 80%;
                        margin: 0 auto;
                    }
                    i {
                        color: #0169d9;
                    }
                    .status {  
                        margin: 0 auto;
                        color: #0169d9;
                        font-size: 20px;
                        padding: 15px;
                    }
                `}</style>
            </div>
        )
    }
}