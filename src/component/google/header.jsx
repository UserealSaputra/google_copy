import React, { Component } from 'react';
import Links from './links';
import Shortcut from './shortcut';
import './google.css';

const Header = () => {
    return (
        <React.Fragment>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Links>Gmail</Links>
                <Links>Images</Links>
                <Shortcut value={32} background={'transparent'}>
                    <a className="material-icons" style={{ color: 'gray' }}>apps</a>
                </Shortcut>
                <Shortcut value={20} background={'gray'}>
                    <a className="material-icons" style={{ fontSize: '11px', color: 'white' }}>notifications</a>
                </Shortcut>
                <Shortcut value={32} background={'#5d4037'}>
                    <a style={{ fontSize: '18px', color: 'white' }}>M</a>
                </Shortcut>
            </div>
        </React.Fragment>
    );
}

export default Header;
