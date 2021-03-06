import React from 'react';

export default ({ connect }) => 
    <div className="root" onClick={connect}>
        <i className="material-icons">power_settings_new</i>
        <h1>Interact to power Dexient</h1>
        <style jsx>{`
            .root {
                background: #fff;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            h1 {
                color: #0B5CFD;
            }
        `}</style>
    </div>