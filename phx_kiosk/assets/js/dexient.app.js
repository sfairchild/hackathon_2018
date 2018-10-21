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
            this.hive = this.socket.channel("home:lobby", {});
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
                    console.log('up')
                    this.hive.push('raise_desk', { value: 'up'});
                break;
                case 'down':
                    console.log('down')
                    this.hive.push('lower_desk', { value: 'down'});
                break;
            }
        }
    }
    onDeskRelease = async() => {
        if(this.state.connected) {
            this.hive.push('stop_desk');
            console.log('button release');
        }
    }
    togglePower = async (status) => {
        this.hive.push(`turn_${status}_desk`);
        const settings = this.state.settings;
        console.log(status);
        this.setState({
            settings: {
                ...settings,
                power: status
            }
        })
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
                            onDeskRelease={this.onDeskRelease}
                            togglePower={togglePower}/>  : 
                        <Off connect={this.connect}/>
                }
                <style jsx>{`
                    .root {
                        background: #F8FCFD;
                        width: 100vw;
                        height: 100vh;
                        overflow: hidden;
                        margin: 0;
                        padding: 0;
                    }
                `}</style>
            </div>
    )}
}

export default Dexient;