import { getAuth, updateProfile } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home';


    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);
    const auth = getAuth();


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoURL
                }).then(() => {
                    // Profile updated!
                    // ...
                })
                    .catch((error) => {
                        // An error occurred
                        // ...
                    });
                navigate(from, { replace: true });

            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Photo</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Your photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className='"text-danger'>
                {
                    error
                }
            </Form.Text>
        </Form>
    );
};

export default Register;