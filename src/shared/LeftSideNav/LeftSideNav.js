import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../../Layout/Pages/Categories/Categories';
import Category from '../../Layout/Pages/Category/Category';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const LeftSideNav = () => {
    const { user, logOut } = useContext(AuthContext);

    const { providerLogin } = useContext(AuthContext)

    const [categories, setCategories] = useState([]);

    const googleProvider = new GoogleAuthProvider();
    useEffect(() => {
        fetch('https://code-camp-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            {
                user ? <></> : <Container>
                    <div className='d-flex flex-column gap-1 mt-2'>
                        <Button className='border border-dark-50' variant="light"> <FaGithub></FaGithub> Sign In with Github</Button>{' '}
                        <Button onClick={handleGoogleSignIn} className='border border-warning bg-white text-warning'> <FcGoogle></FcGoogle> Sign In with Google</Button>{' '}
                    </div>
                </Container>
            }
            <h4 className='mt-4 text-center'>Categories</h4>
            <div className='mt-3'>
                {
                    categories.map(category => <p className='bg-light px-5 py-3 rounded '><Link className='text-black fw-bold text-decoration-none' key={category.id} to={`/categories/${category.id}`}>{category.name}</Link>

                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;