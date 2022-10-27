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
import logo from '../../image/logo.png';



const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <img className='me-2' style={{ height: '40px' }} src={logo} alt="" />
                    <Link className='text-decoration-none fs-2 text-white fw-semi-bold' to='/home'>CODE-CAMP</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Link className='text-decoration-none text-white px-4 py-2 ' to="/courses">Courses</Link>
                            <Link className='text-decoration-none text-white px-4 py-2 ' to="/faq">FAQ</Link>
                            <Link className='text-decoration-none text-white px-4 py-2 ' to="/blog">BLOG</Link>

                            {
                                user?.email ?

                                    <>
                                        <Link title={user.displayName} className='text-decoration-none text-white px-4 py-2 ' eventKey={2} to="#memes">

                                            {
                                                user.displayName
                                            }
                                            {
                                                user?.photoURL ? <Image className='ms-2' style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image> : <FaUser></FaUser>

                                            }
                                        </Link>
                                        <Link onClick={handleLogOut} className='text-decoration-none  text-white px-4 py-2 ' to="/home">Log out</Link>
                                    </>
                                    : <>
                                        <Link className='text-decoration-none  text-white px-4 py-2 ' to="/login">Log In</Link>
                                        <Link className='text-decoration-none bg-light px-4 py-2 rounded text-warning fw-bold ' to="/register">Register</Link>
                                    </>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;