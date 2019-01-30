import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Student from '../student/index';
class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    id: 1,
                    name: 'Budiasa',
                    grade: 'XA',
                    address: "Bogor"
                },
                {
                    id: 2,
                    name: 'Parmanji',
                    grade: 'XB',
                    address: "Bandung"
                },
                {
                    id: 3,
                    name: 'Rojiksin',
                    grade: 'XC',
                    address: "Jakarta"
                },
                {
                    id: 4,
                    name: 'Daniatna',
                    grade: 'XD',
                    address: "Bekasi"
                },
                {
                    id: 5,
                    name: 'Rujang',
                    grade: 'XE',
                    address: "Cirebon"
                }
            ]
        }
    }
    render() {
        const { students } = this.state;
        return (
            <React.Fragment>
                {
                    students.map(student => (
                        <Student
                            key={student.id}
                            name={student.name}
                            grade={student.grade}
                            address={student.address}
                        // students={student}
                        />
                    ))
                }
            </React.Fragment>
        );
    }
}

export default Students;