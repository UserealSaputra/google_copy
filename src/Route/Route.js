import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Called Elements
import BrowserIndex from '../component/google/browser_index';
import GoogleIndex from '../component/google/google_index';
class RouteRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/google/index" component={BrowserIndex} />
                    <Route path="/" component={GoogleIndex} />
                </div>
            </BrowserRouter>
        );
    }
}

export default RouteRegister;