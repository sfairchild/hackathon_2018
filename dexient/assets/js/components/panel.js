import React, { Component } from 'react'
import Status from './status'
import ManualDeskControls from './manualDeskControls'
import Users from './users'
import Slider from '@material-ui/lab/Slider';
import { Notifications } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

export default ({ onDeskPress, togglePower, toggleDND, settings={} }) => 
    <main className="root">
        <div className="topbar">
            <Status></Status>
        </div>
        <div className="main">
            <section className="panes">
                <div className="user-pane">
                    <div className="user">
                        <div className="details">
                            <span className="picture"><img src="/images/dan.jpeg"/></span>
                            <span className="name">Sean</span>
                        </div>
                        <div>
                            { <Icon onClick={toggleDND}> {settings.doNotDisturb ? 'notifications_off' : 'notifications' }</Icon>}
                        </div>
                        
                    </div>
                    <Users/>                
                </div>
            </section>
            <section className="actions">
                <ManualDeskControls 
                    onDeskPress={onDeskPress} 
                    togglePower={togglePower}
                    settings={settings}></ManualDeskControls>
            </section>
        </div>
        <style jsx>{`
            .root {
                height: 100%;
                overflow:hidden;
            }
            .main {
                display: flex;
                height: calc(100%-30px);
            }
            .panes {
                width: 65%;
                display: flex;
                align-items: center;
                padding: 20px;
            }
            .user {
                display: flex;
                padding: 10px 40px;
                align-items: center;
                justify-content: space-between;
            }
            .user-pane {
                width: 100%;
                background: #ffffff;
                border-radius: 5px;
                box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
            }
            .actions {
                display: flex;
                align-items: center;
                width: 35%;
            }
            .details {
                display: flex;
                align-items: center;
            }
            .picture {
                padding: 15px;
                display: block;
            }
            .picture img {
                display: block;
                max-width: 30px;
                border-radius: 50%;
            }
            .name {
                display: block;
            }
        `}</style>
    </main>