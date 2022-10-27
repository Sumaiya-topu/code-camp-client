import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import logo from '../../image/logo.png';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';




const Header = () => {
    const { theme, setTheme } = useState(true)
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
                    <Link className='text-decoration-none fs-2 text-white fw-semi-bold' to='/'>CODE-CAMP</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>

                            <Link className='text-decoration-none text-white px-4 py-2 ' to="/faq">FAQ</Link>
                            <Link className='text-decoration-none text-white px-4 py-2 ' to="/blog">BLOG</Link>

                            {
                                user?.displayName ?

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

                        {
                            theme ? <Button className='bg-dark border-none'><FaSun /></Button> : <Button className='bg-dark'><FaMoon /></Button>

                        }
                        <Button onClick={setTheme(!theme)} className='bg-dark'>{theme ? <FaSun /> : <FaMoon />}</Button>



                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>
    );
};

export default Header;