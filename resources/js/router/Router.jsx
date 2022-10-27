import React from 'react'
import { Routes, Route } from 'react-router-dom'

import IndexStudents from '../components/students/Index'
import IndexColleges from '../components/colleges/Index'
import IndexPrograms from '../components/programs/Index'
import IndexCourses from '../components/courses/Index'
import IndexEnrollments from '../components/enrollments/Index'
import Enrollments from '../components/enrollments/Enrollments'
import NotFound from '../components/NotFound'
import Layout from '../components/Layout'

const Router = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/students" element={<IndexStudents/>} / >
					<Route path="/colleges" element={<IndexColleges/>} / >
					<Route path="/programs" element={<IndexPrograms/>} / >
					<Route path="/courses" element={<IndexCourses/>} / >
					<Route path="/enrollments" element={<Enrollments/>} / >
					<Route path="/enrollments/:id" element={<IndexEnrollments/>} / >
					<Route path="/*" element={<NotFound/>} / >
		        </Route>
			</Routes>
		</div>
	)
}

export default Router