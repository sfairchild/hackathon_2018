import React, { Component } from 'react'
import Status from './status'
import ManualDeskControls from './manualDeskControls'
import Users from './users'
import Slider from '@material-ui/lab/Slider';


export default ({ onDeskPress, togglePower, settings }) => 
    <main className="root">
        <Status></Status>
        <div className="topbar">
        </div>
        <div className="main">
            <section className="panes">
                <div className="user-pane">
                    <Users/>                
                </div>
            </section>
            <section className="actions">
                <ManualDeskControls onDeskPress={onDeskPress} togglePower={togglePower} settings={settings}></ManualDeskControls>
            </section>
        </div>
        <style jsx>{`
            .root {
                height: 100%;
            }
            .main {
                display: flex;
                height: 100%;
            }
            .panes {
                width: 65%;
                display: flex;
                align-items: center;
                padding: 20px;
            }
            .user-pane {
                width: 100%;
            }
            .actions {
                display: flex;
                align-items: center;
                width: 35%;
            }

        `}</style>
    </main>