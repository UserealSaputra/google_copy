import React, { Component } from 'react';

const Body = props => {
    return (
        <React.Fragment>
            <div className="body" >
                <img src={require('../images/Google.png')} style={{ height: '92px', width: '272px', paddingTop: '109px' }} />
                {props.search}
                <div className="bookmarkgroup" style={{ justifyContent: props.justify }}>
                    {props.items}
                </div>
                {props.links}

            </div>
        </React.Fragment >
    );

}

export default Body;