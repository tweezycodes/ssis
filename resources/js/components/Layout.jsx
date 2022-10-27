import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {

    const handleSubmit = (e) => {
        axios.post('/logout').then((response) => {
            window.location.reload(false);
        });
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-links">
                            <Link to="/colleges">Colleges</Link>
                            <Link to="/programs">Programs</Link>
                            <Link to="/courses">Courses</Link>
                            <Link to="/enrollments">Enrollments</Link>
                            <Link to="/students">Students</Link> &nbsp;
                        </Nav>
                        <Nav className="nav-links">
                            <Link onClick={handleSubmit}>Logout</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
      );
};

export default Layout;