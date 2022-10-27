import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Index = () => {
    const [courses, getCourses] = useState([]);

    const getAllCourses = (e) => {
        axios.get('courses/get-all').then((response) => {
            getCourses(response.data)
        }).catch(err => { });
    }

    useEffect(() => {
        getAllCourses();
    }, []);

    return(
        <div className="container mt-4">
            <legend>Courses</legend>
            <div className="table-responsive">
                <table className="table mt-4 table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Code</th>
                            <th scope="col">Name</th>
                            <th scope="col">Program</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((courseRow, index) => {
                                return (
                                    <React.Fragment key={courseRow.id}>
                                        <tr>
                                        	<td>{ courseRow.id }</td>
                                        	<td>{ courseRow.code }</td>
                                            <td>{ courseRow.name }</td>
                                        	<td>{ courseRow.program.name } ({ courseRow.program.code })</td>
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