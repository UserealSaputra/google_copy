import React, { Component } from 'react';

const Links = props => {
    return (
        <React.Fragment>
            <a style={{ margin: '10px', cursor: "pointer", fontSize: '14px' }}>{props.children}</a>
        </React.Fragment>
    );
}

export default Links;