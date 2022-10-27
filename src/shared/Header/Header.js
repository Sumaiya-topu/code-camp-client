import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';



const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">CODE-CAMP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Link className='text-decoration-none text-white px-4 py-2 ' to="/courses">Courses</Link>
                            <Link className='text-decoration-none text-white px-4 py-2 ' to="/faq">FAQ</Link>
                            <Link className='text-decoration-none text-white px-4 py-2 ' to="/blog">BLOG</Link>

                            {
                                user.email ?

                                    <Link className='text-decoration-none text-white px-4 py-2 ' eventKey={2} to="#memes">

                                        {
                                            user.displayName
                                        }
                                        {
                                            user.photoURL ? <Image className='ms-2' style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image> : <FaUser></FaUser>

                                        }
                                    </Link>
                                    : <div>
                                        <Link className='text-decoration-none  text-white px-4 py-2 ' to="/blog">Log In</Link>
                                        <Link className='text-decoration-none bg-light px-4 py-2 rounded text-warning fw-bold ' to="/blog">Sign Up</Link>
                                    </div>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;