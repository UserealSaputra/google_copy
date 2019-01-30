import React, { Component } from 'react';

const Shortcut = props => {
    return (
        <React.Fragment>
            <div style={{ height: `${props.value}px`, width: `${props.value}px`, background: `${props.background}`, borderRadius: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center', margin: '10px' }}>
                {props.children}
            </div>
        </React.Fragment>
    );
}


export default Shortcut;