import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Enrollments = () => {
    const [courses, getCourses] = useState([]);

    const getAllCourses = (e) => {
        axios.get('student-courses/get-all').then((response) => {
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
                            <th scope="col">College</th>
                            <th scope="col">Program</th>
                            <th scope="col">Course Code</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Date Enrolled</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={courses.length > 0 ? 'd-none' : ''}><td colSpan="9" className="text-center">No data to show.</td></tr>
                        {
                            courses.map((courseRow, index) => {
                                return (
                                    <React.Fragment key={courseRow.id}>
                                        <tr>
                                            <td>{ courseRow.student.id }</td>
                                            <td>{ courseRow.student.student_number }</td>
                                            <td>{ courseRow.student.name }</td>
                                            <td>{ courseRow.course.program.college.code }</td>
                                            <td>{ courseRow.course.program.code }</td>
                                            <td>{ courseRow.course.code }</td>
                                            <td>{ courseRow.course.name }</td>
                                            <td>{ new Date(courseRow.created_at).toLocaleString("lookup")  }</td>
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

export default Enrollments