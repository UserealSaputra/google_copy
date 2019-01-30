import React, { Component } from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';
import Bookmark from './bookmark';

class GoogleIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <Body
                    search={[
                        <input className="Google_src" type='search' />
                    ]}
                    justify={'center'}
                    items={[
                        <button className="src_button">Google Search</button>,
                        <button className="src_button">I'm Feeling Lucky</button>
                    ]}
                    links={[
                        <div className="offer">
                            Google offered in :
                            <a>Indonesia</a>
                            <a>Bahasa Bali</a>
                            <a>Bahasa Sunda</a>
                        </div>
                    ]} />
                <Footer itemfooter={[
                    <div style={{ fontSize: 'small' }}>
                        <a>Advertising</a>
                        <a>Business</a>
                        <a>About</a>
                    </div>,
                    <div style={{ fontSize: 'small' }}>
                        <a>Privacy</a>
                        <a>Terms</a>
                        <a>Settings</a>
                    </div>
                ]} />
            </React.Fragment>
        );
    }
}

export default GoogleIndex;