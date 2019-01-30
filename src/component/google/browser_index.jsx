import React, { Component } from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';
import Bookmark from './bookmark';

class BrowserIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bmk: [
                {
                    img: require('../images/favicon.ico'),
                    mark: 'Bookmark 1'
                },
                {
                    img: require('../images/favicon.ico'),
                    mark: 'Bookmark 2'
                },
                {
                    img: require('../images/favicon.ico'),
                    mark: 'Bookmark 3'
                },
                {
                    img: require('../images/favicon.ico'),
                    mark: 'Bookmark 4'
                },
                {
                    img: require('../images/favicon.ico'),
                    mark: 'Bookmark 5'
                },
                {
                    img: require('../../logo.svg'),
                    mark: 'Bookmark 6'
                },
                {
                    img: require('../../logo.svg'),
                    mark: 'Bookmark 7'
                },
                {
                    img: require('../../logo.svg'),
                    mark: 'Bookmark 8'
                },
                {
                    img: require('../../logo.svg'),
                    mark: 'Bookmark 9'
                },
                {
                    img: require('../../logo.svg'),
                    mark: 'Bookmark 10'
                },
            ]
        }
    }
    render() {
        const { bmk } = this.state;
        return (
            <React.Fragment>
                <Header />
                <Body
                    search={[
                        <input className="Browse_src" type='search' placeholder="Search Google or type a URL" style={{}} />
                    ]}
                    items={[
                        bmk.map((item) =>
                            <Bookmark src={item.img} mark={item.mark} />
                        )
                    ]} />
            </React.Fragment>
        );
    }
}

export default BrowserIndex;