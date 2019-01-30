import React, { Component } from 'react';

const Footer = props => {
    return (
        <React.Fragment>
            <div className='foot' style={{ bottom: '41px' }}>
                <div><span>Indonesia</span></div>
            </div>
            <div className='foot' >
                {props.itemfooter}
            </div>
        </React.Fragment>
    );
}

export default Footer;