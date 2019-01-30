import React, { Component } from 'react';

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    render() {
        const { name, grade, address } = this.props;
        return (
            <React.Fragment>
                <p>Nama : {name}</p>
                <p>Tingkat : {grade}</p>
                <p>Alamat : {address}</p>
            </React.Fragment>
        );
    }
}

export default Student;