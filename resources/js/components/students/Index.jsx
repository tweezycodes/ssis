import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Index = () => {
    const [newStudent, setNewStudent] = useState(false);
    const [editStudent, setEditStudent] = useState(0);
    const [name, setName] = useState('');
    const [editName, setEditName] = useState('');
    const [editStudentNumber, setEditStudentNumber] = useState('');
    const [students, getStudents] = useState([]);

    const getAllStudents = (e) => {
        axios.get('students/get-all').then((response) => {
            getStudents(response.data);
        }).catch(err => { });
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('name', name)
        axios.post('students', formData).then((response) => {
            let newStudents = students;
            newStudents.push(response.data);
            getStudents(newStudents);
            setNewStudent(false);
            setName('');
            Swal.fire({
                title: 'Success!',
                text: 'Successfully Added',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }).catch(err => {
            Swal.fire({
                title: 'Fail!',
                text: 'Please check your inputs',
                icon: 'error',
                confirmButtonText: 'Try again'
            })
        });
    }

    const handleEdit = (data) => {
        setEditStudent(data.id)
        setEditName(data.name)
        setEditStudentNumber(data.student_number)
    }

    const saveEdit = () => {
        const formData = new FormData()
        formData.append('name', editName)
        formData.append('_method', 'PUT');
        axios.post('students/' + editStudent, formData).then((response) => {
            setEditStudent(0);
            setEditName('');

            let i = students.findIndex(s => s.id === response.data.id);
            let newStudents = students;
            newStudents[i] = response.data;
            getStudents(newStudents);

            Swal.fire({
                title: 'Success!',
                text: 'Successfully Updated',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }).catch(err => {
            Swal.fire({
                title: 'Fail!',
                text: 'Please check your inputs',
                icon: 'error',
                confirmButtonText: 'Try again'
            })
        });
    }

    const handleDelete = (id) => {
        axios.delete('students/' + id).then((response) => {
            const i = students.findIndex(s => s.id === id);
            const newStudents=[...students]
            if(i > -1) {
                newStudents.splice(i,1);
            }
            getStudents(newStudents);
            Swal.fire({
                title: 'Success!',
                text: 'Successfully Deleted',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }).catch(err => {
            Swal.fire({
                title: 'Fail!',
                text: 'Cannot delete enrolled students',
                icon: 'error',
                confirmButtonText: 'Try again'
            })
        });
    }

    useEffect(() => {
        getAllStudents();
    }, []);


    return(
        <div className="container mt-4">
            <legend>Students</legend>
            <button className="btn btn-sm btn-primary" onClick={() => setNewStudent(true)}>Add Student</button>
            <div className="table-responsive">
                <table className="table mt-4 table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Student #</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={newStudent ? "" : "d-none"}>
                            <td colSpan="2">New*</td>

                            <td>
                                <input
                                className="form-control"
                                value={name}
                                onChange={(event)=>{
                                    setName(event.target.value)
                                }}></input>
                            </td>
                            <td>
                                <button onClick={handleSubmit} className="btn btn-sm btn-success">Save</button> &nbsp;
                                <button onClick={() => setNewStudent(false)} className="btn btn-sm btn-warning">Cancel</button>
                            </td>
                        </tr>
                        <tr className={students.length > 0 || newStudent ? 'd-none' : ''}><td colSpan="5" className="text-center">No data to show.</td></tr>
                        {
                            students.map((studentRow, index) => {
                                return (
                                    <React.Fragment key={studentRow.id}>
                                        <tr className={editStudent === studentRow.id ? "d-none" : ""} >
                                            <th  scope="row">{studentRow.id}</th>
                                            <td >{studentRow.student_number}</td>
                                            <td>{studentRow.name}</td>
                                            <td>
                                                <Link className="btn btn-sm btn-success" to={`/enrollments/${studentRow.id}`} >Courses</Link>&nbsp;
                                                <button className="btn btn-sm btn-primary" onClick={() => handleEdit(studentRow)}>Edit</button>&nbsp;
                                                <button onClick={() => handleDelete(studentRow.id)}  className="btn btn-sm btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr className={editStudent === studentRow.id ? "" : "d-none"} >
                                            <td><strong>{ studentRow.id }</strong></td>
                                            <td>
                                                <input
                                                className="form-control"
                                                value={editStudentNumber}
                                                type="number"
                                                onChange={(event)=>{
                                                    setEditStudentNumber(event.target.value)
                                                }}
                                                ></input>
                                            </td>
                                            <td>
                                                <input
                                                className="form-control"
                                                value={editName}
                                                onChange={(event)=>{
                                                    setEditName(event.target.value)
                                                }}
                                                ></input>
                                            </td>
                                            <td>
                                                <button className="btn btn-sm btn-success" onClick={() => saveEdit()}>Save</button>&nbsp;
                                                <button className="btn btn-sm btn-warning" onClick={() => setEditStudent(0)}>Cancel</button>
                                            </td>
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