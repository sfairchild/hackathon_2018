import React, { Component } from 'react'
import Panel from './components/panel'
import Off  from './components/off'
import {Socket} from "phoenix"

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
            timer: '',
            doNotDisturb: false,
        }

    }

    socket = null;
    hive = null;
    
    connect = async () => {
        const defaultState = {
            connected: false,
            settings: {
                power: 'off',
                timer: '',
                doNotDisturb: false,
            }
        }
        if(this.socket) {
            this.socket.connect();
            this.hive = this.socket.channel("hive:connect", {});
            this.hive.join().receive('ok', resp => {
                this.setState({ connected: true });
            }).receive('error', resp => { console.log("unable to join" )})
        } else {
            this.setState(defaultState);
        }
    }
    onDeskPress = async (type) => {
        if(this.state.connected) {
            switch(type) {
                case 'up':
                    this.hive.push('desk_raise');
                break;
                case 'down':
                    this.hive.push('desk_raise');
                break;
            }
        }
    }
    onDeskRelease = async() => {
        if(this.state.connected) {
            this.hive.push('desk_stop');
        }
    }
    togglePower = async (status) => {
        let response = await fetch(`/api/power/${status}`);
        response = await response.json();
    }
    toggleDND = async () => {
        let response = await fetch(`/api/power/on`);
        response = await response.json();
        this.setState({
            settings: {
                ...this.state.settings,
                doNotDisturb: !this.state.settings.doNotDisturb
            }
        })
    }

    componentDidMount() {
        this.socket = new Socket("/socket", {params: {token: window.userToken}});
    }

    render() {
        const { connected, settings } = this.state;
        const { onDeskPress, togglePower, toggleDND } = this;
        return (
            <div className="root">
                {
                    connected ? 
                        <Panel 
                            settings={settings}
                            connect={connect} 
                            onDeskPress={onDeskPress}
                            toggleDND={toggleDND} 
                            togglePower={togglePower}/>  : 
                        <Off connect={this.connect}/>
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