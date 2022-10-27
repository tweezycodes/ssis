import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

import {  useParams } from "react-router-dom";

const Index = (props) => {
    const [newCourse, setNewCourse] = useState(false);
    const [student, setStudent] = useState({name:'', student_courses:[]});
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState('');
    let { id } = useParams();

    const getStudent = (e) => {
        axios.get('/students/' + id).then((response) => {
            setStudent(response.data)
        }).catch(err => { });
    }

    const getCourses = (e) => {
        axios.get('/courses/get-all').then((response) => {
            setCourses(response.data)
        }).catch(err => { });
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('course_id', course)
        formData.append('student_id', id)
        axios.post('/student-courses', formData).then((response) => {
            Swal.fire({
                title: 'Success!',
                text: 'Successfully Enrolled',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            setNewCourse(false);
            getStudent();
        }).catch(err => {
            Swal.fire({
                title: 'Fail!',
                text: err.response.data.errors.message,
                icon: 'error',
                confirmButtonText: 'Try again'
            })
        });
    }

    const handleDelete = (id) => {
        axios.delete('/student-courses/' + id).then((response) => {
            Swal.fire({
                title: 'Success!',
                text: 'Successfully Deleted',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            getStudent();
            setCourse('');
        }).catch(err => { });
    }

    useEffect(() => {
        getStudent();
        getCourses();
    }, []);

	return(
        <div className="container mt-4">
            <legend>{student.name}</legend>
            <button className="btn btn-sm btn-primary" onClick={() => setNewCourse(true)}>Enroll Course</button>
            <div className="table-responsive">
                <table className="table mt-4 table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Code</th>
                            <th scope="col">Name</th>
                            <th scope="col">Program</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={newCourse ? "" : "d-none"}>
                            <td>New*</td>
                            <td colSpan="3">
                                <select className="form-control w-50" placeholder="Select Course"
                                value={course}
                                onChange={(event)=>{
                                    setCourse(event.target.value)
                                }}>
                                    <option value=""></option>
                                    {
                                        courses.map((courseRow, index) => {
                                            return (
                                                <option value={courseRow.id} key={courseRow.id}>
                                                    {courseRow.code} &nbsp;
                                                    {courseRow.name} &nbsp;
                                                    ({courseRow.program.code})
                                                </option>
                                            )

                                        })
                                    }
                                </select>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-success"  onClick={() => handleSubmit()}>Enroll</button> &nbsp;
                                <button className="btn btn-sm btn-warning"  onClick={() => setNewCourse(false)}>Cancel</button>
                            </td>
                        </tr>
                        <tr className={student.student_courses.length > 0 || newCourse ? "d-none" : ""}><td colSpan="5" className="text-center">No data to show.</td></tr>
                        {
                            student.student_courses.map((courseRow, index) => {
                                return (
                                    <React.Fragment key={ courseRow.id }>
                                        <tr>
                                            <td>{ courseRow.course.id }</td>
                                            <td>{ courseRow.course.code }</td>
                                            <td>{ courseRow.course.name }</td>
                                            <td>{ courseRow.course.program.name } ({ courseRow.course.program.code })</td>
                                            <td><button className="btn btn-sm btn-danger" onClick={() => handleDelete(courseRow.id)}>Delete</button></td>
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