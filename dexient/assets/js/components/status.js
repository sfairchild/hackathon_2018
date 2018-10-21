import React, { Component } from 'react';

export default class Status extends Component {
    state = {
        status: 'active'
    }
    render() {
        const icon = this.state.status === 'active' ? 'cloud' : 'cloud_off'
        return (
            <div className="root">
                <i className="material-icons">{icon}</i>
                <span className="status">Dexient</span>
                <style jsx>{`
                    .root {
                        background: #fff;
                        border: 1px solid #ccc
                        border-radius: 3px;
                        display: flex;
                        align-items: center;
                        text-align: center;
                        position: absolute;
                        width: 100%;
                        top: 20px;
                        width: 80%;
                        margin: 0 auto;
                        left: 0;
                        right: 0;
                    }
                `}</style>
            </div>
        )
    }
}