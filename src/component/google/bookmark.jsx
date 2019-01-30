import React, { Component } from 'react';
const Bookmark = props => {
    return (
        <React.Fragment>
            <div className="bookmark">
                <div style={{ background: '#f1f3f4', width: '48px', height: '48px', borderRadius: '100%', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={props.src} style={{ width: '50%', height: '50%' }} />
                </div>
                <a style={{ fontSize: '12px' }}>{props.mark}</a>
            </div>
        </React.Fragment>
    );
}

export default Bookmark;