import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Index = () => {
    const [colleges, getColleges] = useState([]);

    const getAllColleges = (e) => {
        axios.get('colleges/get-all').then((response) => {
            getColleges(response.data);
        }).catch(err => { });
    }

    useEffect(() => {
        getAllColleges();
    }, []);

    return(
        <div className="container mt-4">
            <legend>Colleges</legend>
            <div className="table-responsive">
                <table className="table mt-4 table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Code</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            colleges.map((collegeRow, index) => {
                                return (
                                    <React.Fragment key={collegeRow.id}>
                                        <tr>
                                        	<td>{ collegeRow.id }</td>
                                        	<td>{ collegeRow.code }</td>
                                        	<td>{ collegeRow.name }</td>
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