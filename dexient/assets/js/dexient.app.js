import React, { Component } from 'react'
import Panel from './components/panel'
import Off  from './components/off'

async function connect() {
    await fetch('/api/connect');
    return true;
}

class Dexient extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        connected: false,
        settings: {
            power: 'off',
            timer: ''
        }

    }
    connect = async () => {
        const response = await connect();
        if ( response ) {
            this.setState({
                connected: true
            });
        }
    }
    onDeskPress = async (type) => {
        let response = await fetch(`/api/desk/${type}`);
        response = await response.json(); 
        console.log(response);
    }
    togglePower = async (status) => {
        let response = await fetch(`/api/power/${status}`);
        response = await response.json();
    }


    render() {
        const { connected } = this.state;
        const { onDeskPress, togglePower } = this;
        return (
            <div className="root">
                {
                    connected ? <Panel connect={connect} onDeskPress={onDeskPress} togglePower={togglePower}/>  : <Off connect={this.connect}/>
                }
                <style jsx>{`
                    .root {
                        background: #F8FCFD;
                        width: 100vw;
                        height: 100vh;
                    }
                `}</style>
            </div>
    )}
}

export default Dexient;