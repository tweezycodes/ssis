import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Index = () => {
    const [programs, getPrograms] = useState([]);

    const getAllPrograms = (e) => {
        axios.get('programs/get-all').then((response) => {
            getPrograms(response.data)
        }).catch(err => { });
    }

    useEffect(() => {
        getAllPrograms();
    }, []);

    return(
        <div className="container mt-4">
            <legend>Programs</legend>
            <div className="table-responsive">
                <table className="table mt-4 table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Code</th>
                            <th scope="col">Name</th>
                            <th scope="col">College</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            programs.map((collegeRow, index) => {
                                return (
                                    <React.Fragment key={collegeRow.id}>
                                        <tr>
                                        	<td>{ collegeRow.id }</td>
                                        	<td>{ collegeRow.code }</td>
                                        	<td>{ collegeRow.name }</td>
                                        	<td>{ collegeRow.college.name } ({ collegeRow.college.code })</td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Index